import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  trend,
  subtitle 
}) => {
  const colorClasses = {
    primary: 'bg-gradient-primary text-white shadow-glow',
    secondary: 'bg-gradient-secondary text-white shadow-soft',
    accent: 'bg-gradient-accent text-white shadow-glow-accent',
    success: 'bg-gradient-success text-white shadow-soft',
    warning: 'bg-gradient-to-br from-warning-500 to-warning-600 text-white shadow-soft',
    error: 'bg-gradient-to-br from-error-500 to-error-600 text-white shadow-soft',
  };

  return (
    <div className="dashboard-card group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-neutral-900 mb-1 group-hover:scale-105 transition-transform duration-200">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-neutral-500">{subtitle}</p>
          )}
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-sm ${
              trend.isPositive ? 'text-success-600' : 'text-error-500'
            }`}>
              <span className="text-lg">{trend.isPositive ? '↗' : '↘'}</span>
              <span className="font-medium">{Math.abs(trend.value)}%</span>
              <span className="text-neutral-500">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-4 rounded-2xl ${colorClasses[color]} group-hover:scale-110 transition-all duration-300`}>
          <Icon className="w-7 h-7" />
        </div>
      </div>
      
      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 rounded-b-2xl overflow-hidden">
        <div className="h-full bg-gradient-primary w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
      </div>
    </div>
  );
};

export default DashboardCard;