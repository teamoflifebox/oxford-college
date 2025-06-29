import axios from 'axios';
import { config } from '../config/environment';

// API Client Configuration
const apiClient = axios.create({
  baseURL: config.api.baseUrl,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for authentication
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  parentName: string;
  parentPhone: string;
  emergencyContact?: string;
  address: string;
  avatar?: string;
  cgpa?: number;
  attendance?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Faculty {
  id: string;
  name: string;
  jobId: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  qualification: string;
  experience: string;
  subjects: string[];
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  facultyId: string;
  subject: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  markedAt: Date;
  notificationSent: boolean;
}

export interface MarksRecord {
  id: string;
  studentId: string;
  facultyId: string;
  subject: string;
  examType: string;
  marks: number;
  maxMarks: number;
  percentage: number;
  grade: string;
  date: string;
  notificationSent: boolean;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  amount: number;
  paymentMethod: string;
  receiptNumber: string;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  paidDate?: string;
  notificationSent: boolean;
}

class DatabaseService {
  // Student Management
  async getStudents(filters?: { department?: string; year?: string; search?: string }) {
    const response = await apiClient.get('/students', { params: filters });
    return response.data;
  }

  async getStudent(id: string): Promise<Student> {
    const response = await apiClient.get(`/students/${id}`);
    return response.data;
  }

  async createStudent(student: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Promise<Student> {
    const response = await apiClient.post('/students', student);
    return response.data;
  }

  async updateStudent(id: string, updates: Partial<Student>): Promise<Student> {
    const response = await apiClient.put(`/students/${id}`, updates);
    return response.data;
  }

  async deleteStudent(id: string): Promise<void> {
    await apiClient.delete(`/students/${id}`);
  }

  // Faculty Management
  async getFaculty(filters?: { department?: string; search?: string }) {
    const response = await apiClient.get('/faculty', { params: filters });
    return response.data;
  }

  async createFaculty(faculty: Omit<Faculty, 'id' | 'createdAt' | 'updatedAt'>): Promise<Faculty> {
    const response = await apiClient.post('/faculty', faculty);
    return response.data;
  }

  async updateFaculty(id: string, updates: Partial<Faculty>): Promise<Faculty> {
    const response = await apiClient.put(`/faculty/${id}`, updates);
    return response.data;
  }

  // Attendance Management
  async getAttendance(filters?: { 
    studentId?: string; 
    facultyId?: string; 
    subject?: string; 
    date?: string; 
    dateRange?: { start: string; end: string } 
  }) {
    const response = await apiClient.get('/attendance', { params: filters });
    return response.data;
  }

  async markAttendance(records: Omit<AttendanceRecord, 'id' | 'markedAt' | 'notificationSent'>[]): Promise<AttendanceRecord[]> {
    const response = await apiClient.post('/attendance', { records });
    return response.data;
  }

  async updateAttendance(id: string, updates: Partial<AttendanceRecord>): Promise<AttendanceRecord> {
    const response = await apiClient.put(`/attendance/${id}`, updates);
    return response.data;
  }

  // Marks Management
  async getMarks(filters?: { 
    studentId?: string; 
    facultyId?: string; 
    subject?: string; 
    examType?: string 
  }) {
    const response = await apiClient.get('/marks', { params: filters });
    return response.data;
  }

  async saveMarks(records: Omit<MarksRecord, 'id' | 'notificationSent'>[]): Promise<MarksRecord[]> {
    const response = await apiClient.post('/marks', { records });
    return response.data;
  }

  async updateMarks(id: string, updates: Partial<MarksRecord>): Promise<MarksRecord> {
    const response = await apiClient.put(`/marks/${id}`, updates);
    return response.data;
  }

  // Fee Management
  async getFees(filters?: { studentId?: string; status?: string }) {
    const response = await apiClient.get('/fees', { params: filters });
    return response.data;
  }

  async recordPayment(payment: Omit<FeeRecord, 'id' | 'notificationSent'>): Promise<FeeRecord> {
    const response = await apiClient.post('/fees', payment);
    return response.data;
  }

  async updateFeeRecord(id: string, updates: Partial<FeeRecord>): Promise<FeeRecord> {
    const response = await apiClient.put(`/fees/${id}`, updates);
    return response.data;
  }

  // Analytics
  async getAnalytics(
    type: 'attendance' | 'marks' | 'fees' | 'overview',
    filters?: { [key: string]: string | number | undefined }
  ) {
    const response = await apiClient.get(`/analytics/${type}`, { params: filters });
    return response.data;
  }

  // Notifications
  async getNotificationHistory(filters?: { type?: string; status?: string; studentId?: string }) {
    const response = await apiClient.get('/notifications', { params: filters });
    return response.data;
  }

  async markNotificationSent(recordType: 'attendance' | 'marks' | 'fees', recordId: string) {
    await apiClient.patch(`/${recordType}/${recordId}/notification-sent`);
  }
}

export const databaseService = new DatabaseService();