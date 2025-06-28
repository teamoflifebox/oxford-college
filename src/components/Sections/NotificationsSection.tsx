import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, Send, Users, MessageSquare, AlertCircle, CheckCircle, Info, X } from 'lucide-react';

const NotificationsSection: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'received' | 'send'>('received');
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    audience: 'all',
    type: 'info' as 'info' | 'warning' | 'success' | 'error'
  });

  const canSendNotifications = ['hod', 'principal', 'director'].includes(user?.role || '');

  const mockNotifications = [
    {
      id: '1',
      title: 'Fee Payment Reminder',
      message: 'Your quarterly fee payment is due by the end of this month. Please make the payment to avoid late fees.',
      type: 'warning' as const,
      date: '2024-01-15',
      read: false,
      sender: 'Finance Department'
    },
    {
      id: '2',
      title: 'New Course Materials Available',
      message: 'New study materials for Data Structures and Algorithms have been uploaded to the portal.',
      type: 'info' as const,
      date: '2024-01-14',
      read: true,
      sender: 'Dr. Sarah Johnson'
    },
    {
      id: '3',
      title: 'Exam Schedule Released',
      message: 'Mid-semester examination schedule has been released. Check the academic calendar for details.',
      type: 'success' as const,
      date: '2024-01-12',
      read: true,
      sender: 'Academic Office'
    },
    {
      id: '4',
      title: 'Library Maintenance',
      message: 'The library will be closed for maintenance on January 20th. Plan your study schedule accordingly.',
      type: 'warning' as const,
      date: '2024-01-10',
      read: false,
      sender: 'Library Administration'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning': return AlertCircle;
      case 'success': return CheckCircle;
      case 'error': return X;
      default: return Info;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const handleSendNotification = () => {
    // In a real app, this would send the notification
    console.log('Sending notification:', newNotification);
    setNewNotification({
      title: '',
      message: '',
      audience: 'all',
      type: 'info'
    });
    alert('Notification sent successfully!');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Notifications</h2>
        <p className="text-gray-600">Stay updated with important announcements and messages.</p>
      </div>

      {canSendNotifications && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('received')}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'received'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Bell className="w-4 h-4 inline-block mr-2" />
                Received
              </button>
              <button
                onClick={() => setActiveTab('send')}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'send'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Send className="w-4 h-4 inline-block mr-2" />
                Send Notification
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'received' ? (
              <div className="space-y-4">
                {mockNotifications.map((notification) => {
                  const Icon = getNotificationIcon(notification.type);
                  return (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
                        notification.read ? 'bg-gray-50' : 'bg-white shadow-sm'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className={`font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                              {notification.title}
                            </h4>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{notification.date}</span>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-700'} mb-2`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500">From: {notification.sender}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notification Title
                  </label>
                  <input
                    type="text"
                    value={newNotification.title}
                    onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter notification title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={newNotification.message}
                    onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your message..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Audience
                    </label>
                    <select
                      value={newNotification.audience}
                      onChange={(e) => setNewNotification({ ...newNotification, audience: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="all">All Users</option>
                      <option value="students">Students Only</option>
                      <option value="faculty">Faculty Only</option>
                      <option value="department">My Department</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      value={newNotification.type}
                      onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value as any })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="info">Information</option>
                      <option value="warning">Warning</option>
                      <option value="success">Success</option>
                      <option value="error">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleSendNotification}
                    disabled={!newNotification.title || !newNotification.message}
                    className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Notification</span>
                  </button>
                  <button
                    onClick={() => setNewNotification({ title: '', message: '', audience: 'all', type: 'info' })}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Clear Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!canSendNotifications && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            {mockNotifications.map((notification) => {
              const Icon = getNotificationIcon(notification.type);
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
                    notification.read ? 'bg-gray-50' : 'bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                          {notification.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{notification.date}</span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-700'} mb-2`}>
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">From: {notification.sender}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsSection;