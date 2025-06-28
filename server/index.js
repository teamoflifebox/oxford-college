import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import winston from 'winston';
import cron from 'node-cron';

// Import routes
import authRoutes from './routes/auth.js';
import studentRoutes from './routes/students.js';
import facultyRoutes from './routes/faculty.js';
import attendanceRoutes from './routes/attendance.js';
import marksRoutes from './routes/marks.js';
import feeRoutes from './routes/fees.js';
import notificationRoutes from './routes/notifications.js';
import analyticsRoutes from './routes/analytics.js';
import whatsappRoutes from './routes/whatsapp.js';

// Import services
import { WhatsAppService } from './services/whatsappService.js';
import { NotificationService } from './services/notificationService.js';
import { AnalyticsService } from './services/analyticsService.js';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'oxford-erp' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Rate limiting
const rateLimiter = new RateLimiterMemory({
  keyGenerator: (req) => req.ip,
  points: 100, // Number of requests
  duration: 60, // Per 60 seconds
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting middleware
app.use(async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (rejRes) {
    res.status(429).json({ error: 'Too many requests' });
  }
});

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/oxford-erp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  logger.info('Connected to MongoDB');
})
.catch((error) => {
  logger.error('MongoDB connection error:', error);
  process.exit(1);
});

// Initialize services
const whatsappService = new WhatsAppService();
const notificationService = new NotificationService(io, whatsappService);
const analyticsService = new AnalyticsService();

// Make services available to routes
app.locals.whatsappService = whatsappService;
app.locals.notificationService = notificationService;
app.locals.analyticsService = analyticsService;

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/whatsapp', whatsappRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  logger.info(`User connected: ${socket.id}`);

  socket.on('join_room', (userId) => {
    socket.join(`user_${userId}`);
    logger.info(`User ${userId} joined room`);
  });

  socket.on('attendance_update', (data) => {
    // Broadcast to relevant users
    io.to(`user_${data.studentId}`).emit('attendance_update', data);
    logger.info('Attendance update broadcasted', data);
  });

  socket.on('fee_payment', (data) => {
    io.to(`user_${data.studentId}`).emit('fee_payment', data);
    logger.info('Fee payment broadcasted', data);
  });

  socket.on('marks_update', (data) => {
    io.to(`user_${data.studentId}`).emit('marks_update', data);
    logger.info('Marks update broadcasted', data);
  });

  socket.on('emergency', (data) => {
    // Broadcast to all connected users
    io.emit('emergency', data);
    logger.info('Emergency alert broadcasted', data);
  });

  socket.on('disconnect', () => {
    logger.info(`User disconnected: ${socket.id}`);
  });
});

// Scheduled tasks
// Daily attendance reminder
cron.schedule('0 8 * * 1-5', async () => {
  logger.info('Running daily attendance reminder');
  try {
    await notificationService.sendDailyAttendanceReminder();
  } catch (error) {
    logger.error('Failed to send daily attendance reminder:', error);
  }
});

// Weekly fee reminder
cron.schedule('0 9 * * 1', async () => {
  logger.info('Running weekly fee reminder');
  try {
    await notificationService.sendWeeklyFeeReminder();
  } catch (error) {
    logger.error('Failed to send weekly fee reminder:', error);
  }
});

// Monthly analytics report
cron.schedule('0 10 1 * *', async () => {
  logger.info('Generating monthly analytics report');
  try {
    await analyticsService.generateMonthlyReport();
  } catch (error) {
    logger.error('Failed to generate monthly report:', error);
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  logger.info(`🚀 Oxford ERP Server running on port ${PORT}`);
  logger.info(`📱 WhatsApp integration: ${process.env.WHATSAPP_API_TOKEN ? 'Enabled' : 'Disabled'}`);
  logger.info(`🔗 Real-time updates: Enabled`);
  logger.info(`📊 Analytics: Enabled`);
  logger.info(`🔔 Scheduled notifications: Enabled`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    mongoose.connection.close(false, () => {
      logger.info('MongoDB connection closed');
      process.exit(0);
    });
  });
});

export default app;