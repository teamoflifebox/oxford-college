import axios from 'axios';
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});

export class WhatsAppService {
  constructor() {
    this.apiUrl = process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v17.0';
    this.accessToken = process.env.WHATSAPP_API_TOKEN;
    this.phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    this.webhookVerifyToken = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
  }

  async sendMessage(to, message, type = 'text') {
    if (!this.accessToken || !this.phoneNumberId) {
      throw new Error('WhatsApp API credentials not configured');
    }

    try {
      const payload = {
        messaging_product: 'whatsapp',
        to: to,
        type: type,
        text: {
          body: message
        }
      };

      const response = await axios.post(
        `${this.apiUrl}/${this.phoneNumberId}/messages`,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      logger.info(`WhatsApp message sent to ${to}: ${response.data.messages[0].id}`);
      return response.data;
    } catch (error) {
      logger.error('WhatsApp API Error:', error.response?.data || error.message);
      throw new Error('Failed to send WhatsApp message');
    }
  }

  async sendAttendanceNotification(studentName, parentName, parentPhone, isPresent, subject, date) {
    const message = isPresent 
      ? `✅ *ATTENDANCE CONFIRMED*\n\nDear ${parentName},\n\nYour child *${studentName}* was *PRESENT* in ${subject} class today (${date}).\n\n🎓 Oxford College\nTechnology Excellence`
      : `❌ *ATTENDANCE ALERT*\n\nDear ${parentName},\n\nYour child *${studentName}* was *ABSENT* from ${subject} class today (${date}).\n\nPlease contact the college if this is unexpected.\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendMessage(parentPhone, message);
  }

  async sendFeePaymentNotification(studentName, parentName, parentPhone, amount, receiptNumber) {
    const message = `💰 *FEE PAYMENT CONFIRMED*\n\nDear ${parentName},\n\nFee payment received successfully!\n\n👤 Student: ${studentName}\n💵 Amount: ₹${amount.toLocaleString()}\n📄 Receipt: ${receiptNumber}\n📅 Date: ${new Date().toLocaleDateString()}\n\nThank you for your payment.\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendMessage(parentPhone, message);
  }

  async sendMarksNotification(studentName, parentName, parentPhone, subject, marks, maxMarks, examType) {
    const percentage = (marks / maxMarks) * 100;
    const grade = this.calculateGrade(percentage);
    const emoji = percentage >= 90 ? '🏆' : percentage >= 80 ? '🌟' : percentage >= 70 ? '👍' : percentage >= 60 ? '📚' : '⚠️';

    const message = `${emoji} *MARKS PUBLISHED*\n\nDear ${parentName},\n\nNew marks published for *${studentName}*\n\n📚 Subject: ${subject}\n📝 Exam: ${examType}\n📊 Marks: ${marks}/${maxMarks}\n📈 Percentage: ${percentage.toFixed(1)}%\n🎯 Grade: ${grade}\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendMessage(parentPhone, message);
  }

  async sendBulkNotification(recipients, title, message) {
    const results = [];
    
    for (const recipient of recipients) {
      try {
        const whatsappMessage = `📢 *${title.toUpperCase()}*\n\nDear ${recipient.parentName},\n\n${message}\n\n👤 Student: ${recipient.studentName}\n\n🎓 Oxford College\nTechnology Excellence`;
        
        const result = await this.sendMessage(recipient.parentPhone, whatsappMessage);
        results.push({ 
          studentId: recipient.studentId, 
          status: 'sent', 
          messageId: result.messages[0].id 
        });
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        results.push({ 
          studentId: recipient.studentId, 
          status: 'failed', 
          error: error.message 
        });
      }
    }
    
    return results;
  }

  calculateGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
  }

  async verifyWebhook(mode, token, challenge) {
    if (mode === 'subscribe' && token === this.webhookVerifyToken) {
      logger.info('WhatsApp webhook verified successfully');
      return challenge;
    }
    throw new Error('Webhook verification failed');
  }

  async handleWebhook(body) {
    try {
      if (body.entry) {
        for (const entry of body.entry) {
          if (entry.changes) {
            for (const change of entry.changes) {
              if (change.value.statuses) {
                for (const status of change.value.statuses) {
                  logger.info(`Message ${status.id} status: ${status.status}`);
                  // Handle delivery status updates
                }
              }
              if (change.value.messages) {
                for (const message of change.value.messages) {
                  logger.info(`Received message from ${message.from}: ${message.text?.body}`);
                  // Handle incoming messages
                }
              }
            }
          }
        }
      }
    } catch (error) {
      logger.error('Webhook processing error:', error);
    }
  }

  async healthCheck() {
    try {
      const response = await axios.get(`${this.apiUrl}/${this.phoneNumberId}`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        },
      });
      return response.status === 200;
    } catch (error) {
      logger.error('WhatsApp API health check failed:', error);
      return false;
    }
  }
}