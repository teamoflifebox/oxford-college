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
    const handleAttendanceUpdate = (data: unknown) => {
      if (typeof data === 'object' && data !== null && 'studentName' in data && 'isPresent' in data) {
        const attendanceData = data as AttendanceData;
        setLastUpdate({ type: 'attendance_update', data: attendanceData, timestamp: new Date() });

        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Attendance Updated', {
            body: `${attendanceData.studentName} marked ${attendanceData.isPresent ? 'present' : 'absent'}`,
            icon: '/favicon.ico',
          });
        }
      }
    };

    const handleFeePayment = (data: unknown) => {
      if (typeof data === 'object' && data !== null && 'amount' in data) {
        const feePaymentData = data as FeePaymentData;
        setLastUpdate({ type: 'fee_payment', data: feePaymentData, timestamp: new Date() });

        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Fee Payment Received', {
            body: `Payment of ₹${feePaymentData.amount} received`,
            icon: '/favicon.ico',
          });
        }
      }
    };

    const handleMarksUpdate = (data: unknown) => {
      if (typeof data === 'object' && data !== null && 'subject' in data && 'marks' in data) {
        const marksData = data as MarksData;
        setLastUpdate({ type: 'marks_update', data: marksData, timestamp: new Date() });

        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Marks Updated', {
            body: `New marks published for ${marksData.subject}`,
            icon: '/favicon.ico',
          });
        }
      }
    };

    const handleEmergency = (data: unknown) => {
      if (typeof data === 'object' && data !== null && 'message' in data) {
        const emergencyData = data as EmergencyData;
        setLastUpdate({ type: 'emergency', data: emergencyData, timestamp: new Date() });

        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('🚨 Emergency Alert', {
            body: emergencyData.message,
            icon: '/favicon.ico',
            requireInteraction: true,
          });
        }
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
