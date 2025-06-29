import React from 'react';
import DashboardCard from '../Dashboard/DashboardCard';
import { Users, GraduationCap, Building2, CreditCard, TrendingUp, Activity, Award } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const departmentData = [
  { name: 'Computer Science & AI', value: 35, color: '#22c55e' },
  { name: 'AI & Machine Learning', value: 25, color: '#84cc16' },
  { name: 'Data Science', value: 20, color: '#eab308' },
  { name: 'Software Engineering', value: 20, color: '#16a34a' },
];

const monthlyGrowth = [
  { month: 'Jan', students: 2650, faculty: 150 },
  { month: 'Feb', students: 2720, faculty: 152 },
  { month: 'Mar', students: 2780, faculty: 154 },
  { month: 'Apr', students: 2820, faculty: 155 },
  { month: 'May', students: 2847, faculty: 156 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-2">Administrative Dashboard</h2>
        <p className="text-sage-600">Comprehensive overview of institutional excellence and technology innovation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <DashboardCard
          title="Total Students"
          value="2,847"
          icon={GraduationCap}
          color="primary"
          trend={{ value: 8, isPositive: true }}
          subtitle="Growing community"
        />
        <DashboardCard
          title="Faculty Members"
          value="156"
          icon={Users}
          color="secondary"
          trend={{ value: 3, isPositive: true }}
          subtitle="Expert educators"
        />
        <DashboardCard
          title="Tech Departments"
          value="12"
          icon={Building2}
          color="forest"
          subtitle="AI-focused programs"
        />
        <DashboardCard
          title="Monthly Revenue"
          value="41,439₹"
          icon={CreditCard}
          color="accent"
          trend={{ value: 12, isPositive: true }}
          subtitle="Technology growth"
        />
        <DashboardCard
          title="Innovation Rate"
          value="98.5%"
          icon={TrendingUp}
          color="success"
          trend={{ value: 2.3, isPositive: true }}
          subtitle="Tech advancement"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-nature p-6 animate-slide-up animate-delay-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            <span>Department Distribution</span>
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #22c55e',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(34, 197, 94, 0.1)'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-nature p-6 animate-slide-up animate-delay-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary-600" />
            <span>Recent Activities</span>
          </h3>
          <div className="space-y-4">
            {[
              { 
                title: 'New AI research lab inaugurated', 
                time: '1 hour ago', 
                type: 'success',
                user: 'Computer Science Dept',
                icon: '🤖'
              },
              { 
                title: 'Machine Learning workshop completed', 
                time: '3 hours ago', 
                type: 'success',
                user: 'AI Department',
                icon: '🧠'
              },
              { 
                title: 'Student tech project presentation', 
                time: '5 hours ago', 
                type: 'info',
                user: 'Student Affairs',
                icon: '💻'
              },
              { 
                title: 'Faculty AI training session', 
                time: '1 day ago', 
                type: 'info',
                user: 'Prof. Michael Brown',
                icon: '📚'
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 rounded-xl hover:from-primary-100/50 hover:to-secondary-100/50 transition-all duration-300 border border-primary-100/50">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-sage-600">{activity.user} • {activity.time}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-primary-500' :
                  activity.type === 'warning' ? 'bg-accent-500' :
                  'bg-secondary-500'
                } animate-bounce-gentle`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Trends */}
      <div className="card-nature p-6 animate-slide-up animate-delay-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary-600" />
          <span>Growth Trends</span>
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyGrowth}>
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
              <Bar dataKey="students" fill="url(#studentsGradient)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="faculty" fill="url(#facultyGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="studentsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#84cc16" />
                </linearGradient>
                <linearGradient id="facultyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Technology Metrics */}
      <div className="card-nature p-6 animate-slide-up animate-delay-400">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Award className="w-5 h-5 text-primary-600" />
          <span>Technology Achievements</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { metric: 'AI Research Projects', value: '45+', icon: '🤖', color: 'primary' },
            { metric: 'Industry Partnerships', value: '85%', icon: '🤝', color: 'secondary' },
            { metric: 'Tech Innovation Rate', value: '92%', icon: '💡', color: 'forest' },
            { metric: 'Student Placement', value: '98%', icon: '🏆', color: 'accent' },
          ].map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 p-4 rounded-xl border border-primary-100 text-center">
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="font-medium text-gray-900 mb-1">{achievement.metric}</h4>
              <p className="text-2xl font-bold text-primary-600">{achievement.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;