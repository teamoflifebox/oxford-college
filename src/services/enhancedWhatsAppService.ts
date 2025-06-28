import axios from 'axios';
import { config } from '../config/environment';
import { databaseService } from './databaseService';
import { realTimeService } from './realTimeService';

export interface WhatsAppMessage {
  to: string;
  type: 'text' | 'template' | 'image' | 'document';
  text?: {
    body: string;
  };
  template?: {
    name: string;
    language: {
      code: string;
    };
    components: any[];
  };
}

export interface WhatsAppResponse {
  messaging_product: string;
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
}

class EnhancedWhatsAppService {
  private apiUrl: string;
  private accessToken: string;
  private phoneNumberId: string;

  constructor() {
    this.apiUrl = config.whatsapp.apiUrl;
    this.accessToken = config.whatsapp.apiToken;
    this.phoneNumberId = config.whatsapp.phoneNumberId;
  }

  // Core WhatsApp API integration
  private async sendMessage(message: WhatsAppMessage): Promise<WhatsAppResponse> {
    if (!this.accessToken || !this.phoneNumberId) {
      throw new Error('WhatsApp API credentials not configured');
    }

    try {
      const response = await axios.post(
        `${this.apiUrl}/${this.phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          ...message,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('WhatsApp API Error:', error);
      throw new Error('Failed to send WhatsApp message');
    }
  }

  // Enhanced attendance notification with real-time updates
  async sendAttendanceNotification(studentId: string, isPresent: boolean, subject: string, date: string) {
    try {
      const student = await databaseService.getStudent(studentId);
      
      const message = isPresent 
        ? `✅ *ATTENDANCE CONFIRMED*\n\nDear ${student.parentName},\n\nYour child *${student.name}* (${student.rollNumber}) was *PRESENT* in ${subject} class today (${date}).\n\n📚 Subject: ${subject}\n📅 Date: ${date}\n⏰ Time: ${new Date().toLocaleTimeString()}\n\n🎓 *Oxford College*\n_Technology Excellence_\n\nFor any queries, contact: +91 (555) 123-4567`
        : `❌ *ATTENDANCE ALERT*\n\nDear ${student.parentName},\n\nYour child *${student.name}* (${student.rollNumber}) was *ABSENT* from ${subject} class today (${date}).\n\n📚 Subject: ${subject}\n📅 Date: ${date}\n⏰ Time: ${new Date().toLocaleTimeString()}\n\n⚠️ Please contact the college if this is unexpected.\n\n🎓 *Oxford College*\n_Technology Excellence_\n\nContact: +91 (555) 123-4567`;

      const whatsappMessage: WhatsAppMessage = {
        to: student.parentPhone,
        type: 'text',
        text: {
          body: message,
        },
      };

      const response = await this.sendMessage(whatsappMessage);
      
      // Update database with notification status
      await databaseService.markNotificationSent('attendance', studentId);
      
      // Send real-time update
      realTimeService.sendAttendanceUpdate(studentId, isPresent, subject, date);
      
      console.log(`📱 Attendance notification sent to ${student.parentPhone}`);
      return response;
    } catch (error) {
      console.error('Failed to send attendance notification:', error);
      throw error;
    }
  }

  // Enhanced fee payment notification with receipt
  async sendFeePaymentNotification(studentId: string, amount: number, paymentMethod: string, receiptNumber: string) {
    try {
      const student = await databaseService.getStudent(studentId);
      
      const message = `💰 *FEE PAYMENT CONFIRMED*\n\nDear ${student.parentName},\n\nFee payment received successfully! 🎉\n\n👤 *Student:* ${student.name} (${student.rollNumber})\n💵 *Amount:* ₹${amount.toLocaleString()}\n💳 *Method:* ${paymentMethod}\n📄 *Receipt:* ${receiptNumber}\n📅 *Date:* ${new Date().toLocaleDateString()}\n⏰ *Time:* ${new Date().toLocaleTimeString()}\n\n✅ Payment Status: *CONFIRMED*\n\nThank you for your payment! 🙏\n\n🎓 *Oxford College*\n_Technology Excellence_\n\nFor receipt copy or queries: +91 (555) 123-4567`;

      const whatsappMessage: WhatsAppMessage = {
        to: student.parentPhone,
        type: 'text',
        text: {
          body: message,
        },
      };

      const response = await this.sendMessage(whatsappMessage);
      
      // Record payment in database
      await databaseService.recordPayment({
        studentId,
        amount,
        paymentMethod,
        receiptNumber,
        status: 'paid',
        dueDate: new Date().toISOString(),
        paidDate: new Date().toISOString(),
      });
      
      // Send real-time update
      realTimeService.sendFeePayment(studentId, amount, receiptNumber);
      
      console.log(`💰 Fee payment notification sent to ${student.parentPhone}`);
      return response;
    } catch (error) {
      console.error('Failed to send fee payment notification:', error);
      throw error;
    }
  }

  // Enhanced marks notification with detailed analysis
  async sendMarksNotification(studentId: string, subject: string, marks: number, maxMarks: number, examType: string) {
    try {
      const student = await databaseService.getStudent(studentId);
      
      const percentage = (marks / maxMarks) * 100;
      const grade = this.calculateGrade(percentage);
      const emoji = percentage >= 90 ? '🏆' : percentage >= 80 ? '🌟' : percentage >= 70 ? '👍' : percentage >= 60 ? '📚' : '⚠️';
      const performance = percentage >= 85 ? 'Excellent' : percentage >= 75 ? 'Good' : percentage >= 60 ? 'Satisfactory' : 'Needs Improvement';

      const message = `${emoji} *MARKS PUBLISHED*\n\nDear ${student.parentName},\n\nNew marks published for *${student.name}* (${student.rollNumber})\n\n📚 *Subject:* ${subject}\n📝 *Exam:* ${examType}\n📊 *Marks:* ${marks}/${maxMarks}\n📈 *Percentage:* ${percentage.toFixed(1)}%\n🎯 *Grade:* ${grade}\n⭐ *Performance:* ${performance}\n📅 *Date:* ${new Date().toLocaleDateString()}\n\n${percentage >= 75 ? '🎉 Excellent performance! Keep it up!' : '💪 Keep working hard! You can do better!'}\n\n🎓 *Oxford College*\n_Technology Excellence_\n\nFor detailed report: +91 (555) 123-4567`;

      const whatsappMessage: WhatsAppMessage = {
        to: student.parentPhone,
        type: 'text',
        text: {
          body: message,
        },
      };

      const response = await this.sendMessage(whatsappMessage);
      
      // Save marks in database
      await databaseService.saveMarks([{
        studentId,
        facultyId: 'current_faculty_id', // This should come from context
        subject,
        examType,
        marks,
        maxMarks,
        percentage,
        grade,
        date: new Date().toISOString(),
      }]);
      
      // Send real-time update
      realTimeService.sendMarksUpdate(studentId, subject, marks, examType);
      
      console.log(`📊 Marks notification sent to ${student.parentPhone}`);
      return response;
    } catch (error) {
      console.error('Failed to send marks notification:', error);
      throw error;
    }
  }

  // Emergency notification with immediate delivery
  async sendEmergencyNotification(studentId: string, message: string, useEmergencyContact: boolean = false) {
    try {
      const student = await databaseService.getStudent(studentId);
      const phone = useEmergencyContact && student.emergencyContact ? student.emergencyContact : student.parentPhone;
      
      const emergencyMessage = `🚨 *EMERGENCY ALERT*\n\nDear ${student.parentName},\n\n${message}\n\n👤 *Student:* ${student.name} (${student.rollNumber})\n📅 *Time:* ${new Date().toLocaleString()}\n\n🚨 *IMMEDIATE ATTENTION REQUIRED*\n\nPlease contact the college immediately:\n📞 Emergency: +91 (555) 123-4567\n📞 Principal: +91 (555) 123-4568\n\n🎓 *Oxford College*\n_Technology Excellence_`;

      const whatsappMessage: WhatsAppMessage = {
        to: phone,
        type: 'text',
        text: {
          body: emergencyMessage,
        },
      };

      const response = await this.sendMessage(whatsappMessage);
      
      // Send real-time emergency alert
      realTimeService.sendEmergencyAlert(message, [studentId]);
      
      console.log(`🚨 Emergency notification sent to ${phone}`);
      return response;
    } catch (error) {
      console.error('Failed to send emergency notification:', error);
      throw error;
    }
  }

  // Bulk notifications for announcements
  async sendBulkNotification(studentIds: string[], title: string, message: string, priority: 'low' | 'medium' | 'high' = 'medium') {
    const results = [];
    const priorityEmoji = priority === 'high' ? '🚨' : priority === 'medium' ? '📢' : 'ℹ️';
    
    for (const studentId of studentIds) {
      try {
        const student = await databaseService.getStudent(studentId);
        
        const whatsappMessage = `${priorityEmoji} *${title.toUpperCase()}*\n\nDear ${student.parentName},\n\n${message}\n\n👤 *Student:* ${student.name} (${student.rollNumber})\n📅 *Date:* ${new Date().toLocaleDateString()}\n\n🎓 *Oxford College*\n_Technology Excellence_\n\nFor queries: +91 (555) 123-4567`;

        const response = await this.sendMessage({
          to: student.parentPhone,
          type: 'text',
          text: {
            body: whatsappMessage,
          },
        });

        results.push({ studentId, status: 'sent', response });
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        results.push({ studentId, status: 'failed', error: error.message });
      }
    }
    
    return results;
  }

  // Webhook handler for delivery status
  async handleWebhook(webhookData: any) {
    try {
      if (webhookData.entry) {
        for (const entry of webhookData.entry) {
          if (entry.changes) {
            for (const change of entry.changes) {
              if (change.value.statuses) {
                for (const status of change.value.statuses) {
                  console.log(`Message ${status.id} status: ${status.status}`);
                  // Update notification status in database
                  // await this.updateNotificationStatus(status.id, status.status);
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Webhook processing error:', error);
    }
  }

  // Utility methods
  private calculateGrade(percentage: number): string {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
  }

  // Health check
  async healthCheck(): Promise<boolean> {
    try {
      // Test API connectivity
      const response = await axios.get(`${this.apiUrl}/${this.phoneNumberId}`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        },
      });
      return response.status === 200;
    } catch (error) {
      console.error('WhatsApp API health check failed:', error);
      return false;
    }
  }
}

export const enhancedWhatsAppService = new EnhancedWhatsAppService();