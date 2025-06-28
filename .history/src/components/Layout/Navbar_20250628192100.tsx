import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search,  LogOut, GraduationCap, Settings, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const getRoleDisplayName = (role: string) => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'student': return 'status-info';
      case 'faculty': return 'status-success';
      case 'hod': return 'bg-accent-100 text-accent-800';
      case 'principal': return 'bg-warning-100 text-warning-800';
      case 'director': return 'bg-error-100 text-error-800';
      default: return 'status-info';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-200/50 shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-gradient-primary p-2.5 rounded-xl shadow-soft">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse-gentle"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Oxford ERP</h1>
                <p className="text-xs text-neutral-500 -mt-1">Technology Excellence</p>
              </div>
            </div>
            
            {/* Role Badge */}
            <div className="hidden md:block">
              <span className={`${getRoleBadgeColor(user?.role || '')} px-3 py-1.5 rounded-full text-sm font-medium`}>
                {getRoleDisplayName(user?.role || '')}
              </span>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 w-64 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => navigate('/notifications')}
                className="relative p-2.5 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-500 rounded-full animate-bounce-gentle"></span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Notifications
                </span>
              </button>

              <button className="p-2.5 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group">
                <Settings className="w-5 h-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Settings
                </span>
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-3 border-l border-neutral-200">
              <div className="relative group">
                <img
                  src={user?.avatar || `https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                  alt={user?.name}
                  className="w-9 h-9 rounded-xl object-cover border-2 border-neutral-200 cursor-pointer hover:border-primary-400 transition-all duration-200 hover:scale-105"
                  onClick={() => navigate('/profile')}
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-neutral-900">{user?.name}</p>
                <p className="text-xs text-neutral-500 truncate max-w-32">{user?.department}</p>
              </div>
              
              <button
                onClick={handleLogout}
                className="p-2 text-neutral-600 hover:text-error-600 hover:bg-error-50 rounded-xl transition-all duration-200 group"
              >
                <LogOut className="w-4 h-4" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Logout
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;