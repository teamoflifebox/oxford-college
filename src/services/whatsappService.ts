export interface WhatsAppNotification {
  id: string;
  studentId: string;
  parentPhone: string;
  type: 'attendance' | 'fee_payment' | 'marks' | 'general' | 'emergency';
  message: string;
  timestamp: Date;
  status: 'pending' | 'sent' | 'delivered' | 'failed';
  metadata?: Record<string, unknown>;
}

export interface StudentParentInfo {
  studentId: string;
  studentName: string;
  rollNumber: string;
  parentName: string;
  parentPhone: string;
  emergencyContact?: string;
}

class WhatsAppService {
  // private apiUrl = 'https://api.whatsapp.com/send'; // This would be your WhatsApp Business API endpoint
  private notifications: WhatsAppNotification[] = [];

  // Updated parent data with actual student names
  private parentContacts: StudentParentInfo[] = [
    {
      studentId: '1',
      studentName: 'Sridhar',
      rollNumber: 'CS2023001',
      parentName: 'Mr. Sridhar Father',
      parentPhone: '+91 9876543210',
      emergencyContact: '+91 9876543211'
    },
    {
      studentId: '2',
      studentName: 'Sai',
      rollNumber: 'AI2023002',
      parentName: 'Mr. Sai Father',
      parentPhone: '+91 9876543212',
      emergencyContact: '+91 9876543213'
    },
    {
      studentId: '3',
      studentName: 'Santhosh',
      rollNumber: 'CS2023003',
      parentName: 'Mr. Santhosh Father',
      parentPhone: '+91 9876543214',
      emergencyContact: '+91 9876543215'
    },
    {
      studentId: '4',
      studentName: 'Sandeep',
      rollNumber: 'ML2023004',
      parentName: 'Mr. Sandeep Father',
      parentPhone: '+91 9876543216',
      emergencyContact: '+91 9876543217'
    },
    {
      studentId: '5',
      studentName: 'Rajkumar',
      rollNumber: 'DS2023005',
      parentName: 'Mr. Rajkumar Father',
      parentPhone: '+91 9876543218',
      emergencyContact: '+91 9876543219'
    },
    {
      studentId: '6',
      studentName: 'Pradeep',
      rollNumber: 'DA2023006',
      parentName: 'Mr. Pradeep Father',
      parentPhone: '+91 9876543220',
      emergencyContact: '+91 9876543221'
    },
    {
      studentId: '7',
      studentName: 'Swamy',
      rollNumber: 'CS2023007',
      parentName: 'Mr. Swamy Father',
      parentPhone: '+91 9876543222',
      emergencyContact: '+91 9876543223'
    },
    {
      studentId: '8',
      studentName: 'Ganasai',
      rollNumber: 'AI2023008',
      parentName: 'Mr. Ganasai Father',
      parentPhone: '+91 9876543224',
      emergencyContact: '+91 9876543225'
    },
    {
      studentId: '9',
      studentName: 'Vasanth',
      rollNumber: 'ML2023009',
      parentName: 'Mr. Vasanth Father',
      parentPhone: '+91 9876543226',
      emergencyContact: '+91 9876543227'
    },
    {
      studentId: '10',
      studentName: 'Harsha',
      rollNumber: 'DS2023010',
      parentName: 'Mr. Harsha Father',
      parentPhone: '+91 9876543228',
      emergencyContact: '+91 9876543229'
    }
  ];

  // Send attendance notification
  async sendAttendanceNotification(studentId: string, isPresent: boolean, subject: string, date: string) {
    const parentInfo = this.getParentInfo(studentId);
    if (!parentInfo) return;

    const message = isPresent 
      ? `✅ ATTENDANCE UPDATE\n\nDear ${parentInfo.parentName},\n\nYour child ${parentInfo.studentName} (${parentInfo.rollNumber}) was PRESENT in ${subject} class today (${date}).\n\n🎓 Oxford College\nTechnology Excellence`
      : `❌ ATTENDANCE ALERT\n\nDear ${parentInfo.parentName},\n\nYour child ${parentInfo.studentName} (${parentInfo.rollNumber}) was ABSENT from ${subject} class today (${date}).\n\nPlease contact the college if this is unexpected.\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendNotification(studentId, parentInfo.parentPhone, 'attendance', message, {
      subject,
      date,
      isPresent
    });
  }

  // Send fee payment notification
  async sendFeePaymentNotification(studentId: string, amount: number, paymentMethod: string, receiptNumber: string) {
    const parentInfo = this.getParentInfo(studentId);
    if (!parentInfo) return;

    const message = `💰 FEE PAYMENT CONFIRMATION\n\nDear ${parentInfo.parentName},\n\nFee payment received successfully!\n\n👤 Student: ${parentInfo.studentName} (${parentInfo.rollNumber})\n💵 Amount: ₹${amount.toLocaleString()}\n💳 Method: ${paymentMethod}\n📄 Receipt: ${receiptNumber}\n📅 Date: ${new Date().toLocaleDateString()}\n\nThank you for your payment.\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendNotification(studentId, parentInfo.parentPhone, 'fee_payment', message, {
      amount,
      paymentMethod,
      receiptNumber
    });
  }

  // Send marks notification
  async sendMarksNotification(studentId: string, subject: string, marks: number, maxMarks: number, examType: string) {
    const parentInfo = this.getParentInfo(studentId);
    if (!parentInfo) return;

    const percentage = (marks / maxMarks) * 100;
    const grade = this.calculateGrade(percentage);
    const emoji = percentage >= 90 ? '🏆' : percentage >= 80 ? '🌟' : percentage >= 70 ? '👍' : percentage >= 60 ? '📚' : '⚠️';

    const message = `${emoji} MARKS UPDATE\n\nDear ${parentInfo.parentName},\n\nNew marks published for ${parentInfo.studentName} (${parentInfo.rollNumber})\n\n📚 Subject: ${subject}\n📝 Exam: ${examType}\n📊 Marks: ${marks}/${maxMarks}\n📈 Percentage: ${percentage.toFixed(1)}%\n🎯 Grade: ${grade}\n📅 Date: ${new Date().toLocaleDateString()}\n\n${percentage >= 75 ? 'Excellent performance! 🎉' : 'Keep up the good work! 💪'}\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendNotification(studentId, parentInfo.parentPhone, 'marks', message, {
      subject,
      marks,
      maxMarks,
      percentage,
      grade,
      examType
    });
  }

  // Send general notification
  async sendGeneralNotification(studentId: string, title: string, message: string, priority: 'low' | 'medium' | 'high' = 'medium') {
    const parentInfo = this.getParentInfo(studentId);
    if (!parentInfo) return;

    const priorityEmoji = priority === 'high' ? '🚨' : priority === 'medium' ? '📢' : 'ℹ️';
    
    const whatsappMessage = `${priorityEmoji} ${title.toUpperCase()}\n\nDear ${parentInfo.parentName},\n\n${message}\n\n👤 Student: ${parentInfo.studentName} (${parentInfo.rollNumber})\n📅 Date: ${new Date().toLocaleDateString()}\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendNotification(studentId, parentInfo.parentPhone, 'general', whatsappMessage, {
      title,
      priority
    });
  }

  // Send emergency notification
  async sendEmergencyNotification(studentId: string, message: string, useEmergencyContact: boolean = false) {
    const parentInfo = this.getParentInfo(studentId);
    if (!parentInfo) return;

    const phone = useEmergencyContact && parentInfo.emergencyContact ? parentInfo.emergencyContact : parentInfo.parentPhone;
    
    const whatsappMessage = `🚨 EMERGENCY ALERT\n\nDear ${parentInfo.parentName},\n\n${message}\n\n👤 Student: ${parentInfo.studentName} (${parentInfo.rollNumber})\n📅 Time: ${new Date().toLocaleString()}\n\nPlease contact the college immediately.\n📞 College: +91 (555) 123-4567\n\n🎓 Oxford College\nTechnology Excellence`;

    return this.sendNotification(studentId, phone, 'emergency', whatsappMessage, {
      isEmergency: true,
      useEmergencyContact
    });
  }

  // Core notification sending method
  private async sendNotification(studentId: string, phone: string, type: WhatsAppNotification['type'], message: string, metadata?: Record<string, unknown>): Promise<WhatsAppNotification> {
    const notification: WhatsAppNotification = {
      id: this.generateId(),
      studentId,
      parentPhone: phone,
      type,
      message,
      timestamp: new Date(),
      status: 'pending',
      metadata
    };

    try {
      // In a real implementation, you would integrate with WhatsApp Business API
      // For demo purposes, we'll simulate the API call
      await this.simulateWhatsAppAPI(phone, message);
      
      notification.status = 'sent';
      this.notifications.push(notification);
      
      // Log for demo purposes
      console.log(`📱 WhatsApp sent to ${phone}:`, message);
      
      return notification;
    } catch (error) {
      notification.status = 'failed';
      this.notifications.push(notification);
      console.error('Failed to send WhatsApp notification:', error);
      throw error;
    }
  }

    // Simulate WhatsApp API call
      private async simulateWhatsAppAPI(phone: string, message: string): Promise<void> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate occasional failures (5% failure rate)
        if (Math.random() < 0.05) {
          throw new Error('WhatsApp API error');
        }
        
        // In real implementation, this would be:
        // const response = await fetch(this.apiUrl, {
        //   method: 'POST',
        //   headers: {
        //     'Authorization': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     messaging_product: 'whatsapp',
  //     to: phone,
  //     type: 'text',
  //     text: { body: message }
  //   })
  // });
        // This is just to use the parameters and avoid unused variable errors
        void phone;
        void message;
      }

  // Get parent information
  private getParentInfo(studentId: string): StudentParentInfo | null {
    return this.parentContacts.find(contact => contact.studentId === studentId) || null;
  }

  // Calculate grade based on percentage
  private calculateGrade(percentage: number): string {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
  }

  // Generate unique ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Get notification history
  getNotificationHistory(studentId?: string): WhatsAppNotification[] {
    if (studentId) {
      return this.notifications.filter(n => n.studentId === studentId);
    }
    return this.notifications;
  }

  // Get notification statistics
  getNotificationStats() {
    const total = this.notifications.length;
    const sent = this.notifications.filter(n => n.status === 'sent').length;
    const failed = this.notifications.filter(n => n.status === 'failed').length;
    const pending = this.notifications.filter(n => n.status === 'pending').length;

    return {
      total,
      sent,
      failed,
      pending,
      successRate: total > 0 ? (sent / total) * 100 : 0
    };
  }

  // Bulk send notifications
  async sendBulkNotifications(notifications: Array<{
    studentId: string;
    type: WhatsAppNotification['type'];
    message: string;
    metadata?: Record<string, unknown>;
  }>) {
    const results = await Promise.allSettled(
      notifications.map(async (notif) => {
        const parentInfo = this.getParentInfo(notif.studentId);
        if (!parentInfo) throw new Error(`Parent info not found for student ${notif.studentId}`);
        
        return this.sendNotification(
          notif.studentId,
          parentInfo.parentPhone,
          notif.type,
          notif.message,
          notif.metadata
        );
      })
    );

    return results;
  }
}

export const whatsappService = new WhatsAppService();