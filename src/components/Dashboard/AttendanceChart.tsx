import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { month: 'Jan', attendance: 85 },
  { month: 'Feb', attendance: 92 },
  { month: 'Mar', attendance: 78 },
  { month: 'Apr', attendance: 88 },
  { month: 'May', attendance: 95 },
  { month: 'June', attendance: 82 },
];

const AttendanceChart: React.FC = () => {
  return (
    <div className="card-nature p-6 animate-slide-up animate-delay-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        <span>Attendance Overview</span>
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #22c55e',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(34, 197, 94, 0.1)'
              }}
            />
            <Bar 
              dataKey="attendance" 
              fill="url(#attendanceGradient)" 
              radius={[6, 6, 0, 0]}
            />
            <defs>
              <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;