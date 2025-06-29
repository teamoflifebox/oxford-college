import { io, Socket } from 'socket.io-client';
import { config } from '../config/environment';

export interface RealTimeEvent {
  type: 'attendance_update' | 'fee_payment' | 'marks_update' | 'notification' | 'emergency';
  data:
    | { studentId: string; isPresent: boolean; subject: string; date: string; timestamp: Date } // attendance_update
    | { studentId: string; amount: number; receiptNumber: string; timestamp: Date } // fee_payment
    | { studentId: string; subject: string; marks: number; examType: string; timestamp: Date } // marks_update
    | { message: string; studentIds?: string[]; timestamp: Date } // emergency
    | { [key: string]: unknown }; // notification or fallback
  timestamp: Date;
  userId?: string;
  studentId?: string;
}

class RealTimeService {
  private socket: Socket | null = null;
  private eventListeners: Map<string, Array<(data: unknown) => void>> = new Map();

  connect(userId: string) {
    if (this.socket?.connected) {
      return;
    }

    this.socket = io(config.socket.url, {
      ...config.socket.options,
      auth: {
        userId,
      },
    });

    this.socket.on('connect', () => {
      console.log('🔗 Real-time connection established');
    });

    this.socket.on('disconnect', () => {
      console.log('🔌 Real-time connection lost');
    });

    this.socket.on('attendance_update', (data) => {
      this.emit('attendance_update', data);
    });

    this.socket.on('fee_payment', (data) => {
      this.emit('fee_payment', data);
    });

    this.socket.on('marks_update', (data) => {
      this.emit('marks_update', data);
    });

    this.socket.on('notification', (data) => {
      this.emit('notification', data);
    });

    this.socket.on('emergency', (data) => {
      this.emit('emergency', data);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Event emitter methods
  on(event: string, callback: (data: unknown) => void) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event)?.push(callback);
  }

  off(event: string, callback: (data: unknown) => void) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: unknown) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(callback => callback(data));
    }
  }

  // Send real-time updates
  sendAttendanceUpdate(studentId: string, isPresent: boolean, subject: string, date: string) {
    if (this.socket?.connected) {
      this.socket.emit('attendance_update', {
        studentId,
        isPresent,
        subject,
        date,
        timestamp: new Date(),
      });
    }
  }

  sendFeePayment(studentId: string, amount: number, receiptNumber: string) {
    if (this.socket?.connected) {
      this.socket.emit('fee_payment', {
        studentId,
        amount,
        receiptNumber,
        timestamp: new Date(),
      });
    }
  }

  sendMarksUpdate(studentId: string, subject: string, marks: number, examType: string) {
    if (this.socket?.connected) {
      this.socket.emit('marks_update', {
        studentId,
        subject,
        marks,
        examType,
        timestamp: new Date(),
      });
    }
  }

  sendEmergencyAlert(message: string, studentIds?: string[]) {
    if (this.socket?.connected) {
      this.socket.emit('emergency', {
        message,
        studentIds,
        timestamp: new Date(),
      });
    }
  }
}

export const realTimeService = new RealTimeService();