import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { realTimeService } from '../services/realTimeService';

// Define interfaces for known events
interface AttendanceData {
  studentId: string;
  studentName: string;
  subject: string;
  isPresent: boolean;
  date: string;
}

interface FeePaymentData {
  studentId: string;
  amount: number;
  paymentMethod: string;
  receiptNumber: string;
}

interface MarksData {
  studentId: string;
  subject: string;
  marks: number;
  maxMarks: number;
  examType: string;
}

interface EmergencyData {
  studentId: string;
  message: string;
  useEmergencyContact: boolean;
}

type KnownEventTypes =
  | { type: 'attendance_update'; data: AttendanceData }
  | { type: 'fee_payment'; data: FeePaymentData }
  | { type: 'marks_update'; data: MarksData }
  | { type: 'emergency'; data: EmergencyData };

export const useRealTimeUpdates = () => {
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<(KnownEventTypes & { timestamp: Date }) | null>(null);

  useEffect(() => {
    if (!user?.id) return;

    realTimeService.connect(user.id);
    setIsConnected(true);

    // ✅ Event Handlers
    const handleAttendanceUpdate = (data: AttendanceData) => {
      setLastUpdate({ type: 'attendance_update', data, timestamp: new Date() });

      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Attendance Updated', {
          body: `${data.studentName} marked ${data.isPresent ? 'present' : 'absent'}`,
          icon: '/favicon.ico',
        });
      }
    };

    const handleFeePayment = (data: FeePaymentData) => {
      setLastUpdate({ type: 'fee_payment', data, timestamp: new Date() });

      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Fee Payment Received', {
          body: `Payment of ₹${data.amount} received`,
          icon: '/favicon.ico',
        });
      }
    };

    const handleMarksUpdate = (data: MarksData) => {
      setLastUpdate({ type: 'marks_update', data, timestamp: new Date() });

      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Marks Updated', {
          body: `New marks published for ${data.subject}`,
          icon: '/favicon.ico',
        });
      }
    };

    const handleEmergency = (data: EmergencyData) => {
      setLastUpdate({ type: 'emergency', data, timestamp: new Date() });

      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('🚨 Emergency Alert', {
          body: data.message,
          icon: '/favicon.ico',
          requireInteraction: true,
        });
      }
    };

    // ✅ Register all event handlers
    realTimeService.on('attendance_update', handleAttendanceUpdate);
    realTimeService.on('fee_payment', handleFeePayment);
    realTimeService.on('marks_update', handleMarksUpdate);
    realTimeService.on('emergency', handleEmergency);

    // ✅ Request notification permission if not already granted
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    return () => {
      realTimeService.off('attendance_update', handleAttendanceUpdate);
      realTimeService.off('fee_payment', handleFeePayment);
      realTimeService.off('marks_update', handleMarksUpdate);
      realTimeService.off('emergency', handleEmergency);
      realTimeService.disconnect();
      setIsConnected(false);
    };
  }, [user?.id]);

  return { isConnected, lastUpdate };
};
