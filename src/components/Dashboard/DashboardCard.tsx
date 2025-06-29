import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'forest' | 'error';
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
  subtitle,
}) => {
  const colorClasses: Record<string, string> = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md',
    secondary: 'bg-gradient-to-r from-gray-500 to-gray-700 text-white shadow-md',
    accent: 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md',
    success: 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md',
    warning: 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-md',
    error: 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md',
    forest: 'bg-gradient-to-r from-emerald-600 to-green-800 text-white shadow-md',
  };

  return (
    <div className="relative p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-neutral-900 mb-1 group-hover:scale-105 transition-transform duration-200">
            {value}
          </p>
          {subtitle && <p className="text-xs text-neutral-500">{subtitle}</p>}

          {trend && (
            <div
              className={`flex items-center gap-1 mt-2 text-sm ${
                trend.isPositive ? 'text-green-600' : 'text-red-500'
              }`}
            >
              <span className="text-lg">{trend.isPositive ? '↗' : '↘'}</span>
              <span className="font-medium">{Math.abs(trend.value)}%</span>
              <span className="text-neutral-500">vs last month</span>
            </div>
          )}
        </div>

        <div
          className={`p-4 rounded-2xl ${colorClasses[color]} group-hover:scale-110 transition-all duration-300`}
        >
          <Icon className="w-7 h-7" />
        </div>
      </div>

      {/* Progress Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 rounded-b-2xl overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
      </div>
    </div>
  );
};

export default DashboardCard;
