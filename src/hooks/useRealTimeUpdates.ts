import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { realTimeService, RealTimeEvent } from '../services/realTimeService';

export const useRealTimeUpdates = () => {
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<RealTimeEvent | null>(null);

  useEffect(() => {
    if (user?.id) {
      // Connect to real-time service
      realTimeService.connect(user.id);
      setIsConnected(true);

      // Listen for real-time events
      const handleAttendanceUpdate = (data: any) => {
        setLastUpdate({
          type: 'attendance_update',
          data,
          timestamp: new Date(),
        });
        
        // Show notification
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Attendance Updated', {
            body: `${data.studentName} marked ${data.isPresent ? 'present' : 'absent'}`,
            icon: '/favicon.ico',
          });
        }
      };

      const handleFeePayment = (data: any) => {
        setLastUpdate({
          type: 'fee_payment',
          data,
          timestamp: new Date(),
        });
        
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Fee Payment Received', {
            body: `Payment of ₹${data.amount} received`,
            icon: '/favicon.ico',
          });
        }
      };

      const handleMarksUpdate = (data: any) => {
        setLastUpdate({
          type: 'marks_update',
          data,
          timestamp: new Date(),
        });
        
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Marks Updated', {
            body: `New marks published for ${data.subject}`,
            icon: '/favicon.ico',
          });
        }
      };

      const handleEmergency = (data: any) => {
        setLastUpdate({
          type: 'emergency',
          data,
          timestamp: new Date(),
        });
        
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Emergency Alert', {
            body: data.message,
            icon: '/favicon.ico',
            requireInteraction: true,
          });
        }
      };

      // Register event listeners
      realTimeService.on('attendance_update', handleAttendanceUpdate);
      realTimeService.on('fee_payment', handleFeePayment);
      realTimeService.on('marks_update', handleMarksUpdate);
      realTimeService.on('emergency', handleEmergency);

      // Request notification permission
      if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
      }

      return () => {
        // Cleanup
        realTimeService.off('attendance_update', handleAttendanceUpdate);
        realTimeService.off('fee_payment', handleFeePayment);
        realTimeService.off('marks_update', handleMarksUpdate);
        realTimeService.off('emergency', handleEmergency);
        realTimeService.disconnect();
        setIsConnected(false);
      };
    }
  }, [user?.id]);

  return {
    isConnected,
    lastUpdate,
  };
};