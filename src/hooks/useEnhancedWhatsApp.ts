import { useState } from 'react';
import { enhancedWhatsAppService } from '../services/enhancedWhatsAppService';

type NotificationType =
  | 'attendance'
  | 'fee_payment'
  | 'marks'
  | 'emergency'
  | 'bulk';

interface BaseNotification {
  type: NotificationType;
  studentId?: string;
  studentIds?: string[];
  timestamp: Date;
}

export const useEnhancedWhatsApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastNotification, setLastNotification] = useState<BaseNotification | null>(null);

  const handleError = (err: unknown, fallbackMsg: string) => {
    let msg = fallbackMsg;
    if (typeof err === 'object' && err !== null && 'message' in err) {
      const errorWithMessage = err as { message?: unknown };
      if (typeof errorWithMessage.message === 'string') {
        msg = errorWithMessage.message;
      }
    }
    setError(msg);
    throw new Error(msg);
  };

  const sendAttendanceNotification = async (
    studentId: string,
    isPresent: boolean,
    subject: string,
    date: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await enhancedWhatsAppService.sendAttendanceNotification(studentId, isPresent, subject, date);
      setLastNotification({
        type: 'attendance',
        studentId,
        timestamp: new Date(),
      });
      return result;
    } catch (err) {
      handleError(err, 'Failed to send attendance notification');
    } finally {
      setIsLoading(false);
    }
  };

  const sendFeePaymentNotification = async (
    studentId: string,
    amount: number,
    paymentMethod: string,
    receiptNumber: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await enhancedWhatsAppService.sendFeePaymentNotification(studentId, amount, paymentMethod, receiptNumber);
      setLastNotification({
        type: 'fee_payment',
        studentId,
        timestamp: new Date(),
      });
      return result;
    } catch (err) {
      handleError(err, 'Failed to send fee payment notification');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMarksNotification = async (
    studentId: string,
    subject: string,
    marks: number,
    maxMarks: number,
    examType: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await enhancedWhatsAppService.sendMarksNotification(studentId, subject, marks, maxMarks, examType);
      setLastNotification({
        type: 'marks',
        studentId,
        timestamp: new Date(),
      });
      return result;
    } catch (err) {
      handleError(err, 'Failed to send marks notification');
    } finally {
      setIsLoading(false);
    }
  };

  const sendEmergencyNotification = async (
    studentId: string,
    message: string,
    useEmergencyContact: boolean = false
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await enhancedWhatsAppService.sendEmergencyNotification(studentId, message, useEmergencyContact);
      setLastNotification({
        type: 'emergency',
        studentId,
        timestamp: new Date(),
      });
      return result;
    } catch (err) {
      handleError(err, 'Failed to send emergency notification');
    } finally {
      setIsLoading(false);
    }
  };

  const sendBulkNotification = async (
    studentIds: string[],
    title: string,
    message: string,
    priority: 'low' | 'medium' | 'high' = 'medium'
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await enhancedWhatsAppService.sendBulkNotification(studentIds, title, message, priority);
      setLastNotification({
        type: 'bulk',
        studentIds,
        timestamp: new Date(),
      });
      return results;
    } catch (err) {
      handleError(err, 'Failed to send bulk notification');
    } finally {
      setIsLoading(false);
    }
  };

  const checkHealth = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      return await enhancedWhatsAppService.healthCheck();
    } catch (err) {
      handleError(err, 'Health check failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    lastNotification,
    sendAttendanceNotification,
    sendFeePaymentNotification,
    sendMarksNotification,
    sendEmergencyNotification,
    sendBulkNotification,
    checkHealth,
    clearError: () => setError(null),
  };
};
