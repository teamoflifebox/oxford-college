// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { 
//   Home, 
//   User, 
//   Calendar, 
//   BookOpen, 
//   Users, 
//   CreditCard, 
//   Bell, 
//   BarChart3, 
//   Settings, 
//   FileText,
//   GraduationCap,
//   Building2,
//   Code,
//   MessageCircle,
//   Sparkles
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';

// const Sidebar: React.FC = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const getMenuItems = () => {
//     const baseItems = [
//       { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
//       { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
//     ];

//     switch (user?.role) {
//       case 'student':
//         return [
//           ...baseItems,
//           { id: 'attendance', label: 'Attendance', icon: Calendar, path: '/attendance' },
//           { id: 'marks', label: 'Marks', icon: BookOpen, path: '/marks' },
//           { id: 'fees', label: 'Fees', icon: CreditCard, path: '/fees' },
//           { id: 'documents', label: 'Documents', icon: FileText, path: '/documents' },
//           { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
//         ];
      
//       case 'faculty':
//         return [
//           ...baseItems,
//           { id: 'attendance', label: 'Mark Attendance', icon: Calendar, path: '/attendance' },
//           { id: 'marks', label: 'Upload Marks', icon: BookOpen, path: '/marks' },
//           { id: 'students', label: 'My Students', icon: Users, path: '/students' },
//           { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
//           { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
//         ];
      
//       case 'hod':
//         return [
//           ...baseItems,
//           { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
//           { id: 'faculty', label: 'Faculty', icon: Users, path: '/faculty' },
//           { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
//           { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
//           { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
//         ];
      
//       case 'principal':
//       case 'director':
//         return [
//           ...baseItems,
//           { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
//           { id: 'faculty', label: 'Faculty', icon: Users, path: '/faculty' },
//           { id: 'fees', label: 'Fee Management', icon: CreditCard, path: '/fees' },
//           { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
//           { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
//           { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
//         ];
      
//       default:
//         return baseItems;
//     }
//   };

//   const menuItems = getMenuItems();

//   return (
//     <div className="w-64 min-h-screen bg-white/90 backdrop-blur-md border-r border-neutral-200/50 shadow-soft relative overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-full -translate-y-16 translate-x-16"></div>
//       <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-success-100/40 to-warning-100/40 rounded-full translate-y-12 -translate-x-12"></div>
      
//       <div className="p-6 relative z-10">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center gap-3 mb-3">
//             <div className="bg-gradient-primary p-2 rounded-lg shadow-soft">
//               <Code className="w-5 h-5 text-white" />
//             </div>
//             <span className="font-semibold text-neutral-800">Navigation</span>
//           </div>
//           <div className="h-px bg-gradient-to-r from-primary-200 via-accent-200 to-transparent"></div>
//         </div>
        
//         {/* Menu Items */}
//         <nav className="space-y-2">
//           {menuItems.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;
            
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => navigate(item.path)}
//                 className={`w-full text-left transition-all duration-300 animate-fade-in-up group ${
//                   isActive ? 'nav-item-active' : 'nav-item'
//                 }`}
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 <Icon className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 ${
//                   isActive ? 'text-white' : 'text-neutral-600 group-hover:text-primary-600'
//                 }`} />
//                 <span className="font-medium">{item.label}</span>
                
//                 {/* Active Indicator */}
//                 {isActive && (
//                   <div className="ml-auto flex items-center gap-2">
//                     <div className="w-2 h-2 bg-white rounded-full animate-pulse-gentle"></div>
//                     <Sparkles className="w-3 h-3 text-white animate-bounce-gentle" />
//                   </div>
//                 )}
                
//                 {/* WhatsApp Indicator */}
//                 {item.id === 'whatsapp' && (
//                   <div className="ml-auto w-2 h-2 bg-success-500 rounded-full animate-bounce-gentle"></div>
//                 )}
//               </button>
//             );
//           })}
//         </nav>

//         {/* Bottom Card */}
//         <div className="mt-12 p-4 bg-gradient-card backdrop-blur-sm rounded-2xl border border-white/50 shadow-soft">
//           <div className="flex items-center gap-3 mb-3">
//             <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
//               <GraduationCap className="w-4 h-4 text-white" />
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-neutral-800">Oxford ERP</p>
//               <p className="text-xs text-neutral-600">v2.1.0</p>
//             </div>
//           </div>
//           <p className="text-xs text-neutral-600 leading-relaxed">
//             Empowering minds, building futures with cutting-edge technology education.
//           </p>
          
//           {/* Progress Bar */}
//           <div className="mt-3 w-full bg-neutral-200 rounded-full h-1.5">
//             <div className="bg-gradient-primary h-1.5 rounded-full w-3/4 animate-pulse-gentle"></div>
//           </div>
//           <p className="text-xs text-neutral-500 mt-1">System Status: Optimal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  Calendar,
  BookOpen,
  Users,
  CreditCard,
  Bell,
  BarChart3,
  FileText,
  GraduationCap,
  Code,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  /* ------------ menu builder (unchanged) ------------ */
  const getMenuItems = () => {
    const baseItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
      { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    ];

    switch (user?.role) {
      case 'student':
        return [
          ...baseItems,
          { id: 'attendance', label: 'Attendance', icon: Calendar, path: '/attendance' },
          { id: 'marks', label: 'Marks', icon: BookOpen, path: '/marks' },
          { id: 'fees', label: 'Fees', icon: CreditCard, path: '/fees' },
          { id: 'documents', label: 'Documents', icon: FileText, path: '/documents' },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
        ];
      case 'faculty':
        return [
          ...baseItems,
          { id: 'attendance', label: 'Mark Attendance', icon: Calendar, path: '/attendance' },
          { id: 'marks', label: 'Upload Marks', icon: BookOpen, path: '/marks' },
          { id: 'students', label: 'My Students', icon: Users, path: '/students' },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
          { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
        ];
      case 'hod':
        return [
          ...baseItems,
          { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
          { id: 'faculty', label: 'Faculty', icon: Users, path: '/faculty' },
          { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
          { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
        ];
      case 'principal':
      case 'director':
        return [
          ...baseItems,
          { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
          { id: 'faculty', label: 'Faculty', icon: Users, path: '/faculty' },
          { id: 'fees', label: 'Fee Management', icon: CreditCard, path: '/fees' },
          { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
          { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
        ];
      default:
        return baseItems;
    }
  };

  const menuItems = getMenuItems();

  return (
    /* hide the big sidebar below md */
    <div className="hidden md:block fixed top-0 left-0 w-64 h-screen pt-16 bg-white/90 backdrop-blur-md border-r border-neutral-200/50 shadow-soft overflow-hidden z-40">
      {/* decorative blobs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-success-100/40 to-warning-100/40 rounded-full translate-y-12 -translate-x-12" />

      <div className="p-6 relative z-10">
        {/* header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-soft">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-neutral-800">Navigation</span>
          </div>
          <div className="h-px bg-gradient-to-r from-primary-200 via-accent-200 to-transparent" />
        </div>

        {/* menu */}
        <nav className="space-y-2">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`w-full text-left transition-all duration-300 animate-fade-in-up group ${
                  isActive ? 'nav-item-active' : 'nav-item'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Icon
                  className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-600 group-hover:text-primary-600'
                  }`}
                />
                <span className="font-medium">{item.label}</span>

                {isActive && (
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse-gentle" />
                    <Sparkles className="w-3 h-3 text-white animate-bounce-gentle" />
                  </div>
                )}

                {item.id === 'whatsapp' && (
                  <div className="ml-auto w-2 h-2 bg-success-500 rounded-full animate-bounce-gentle" />
                )}
              </button>
            );
          })}
        </nav>

        {/* bottom card (unchanged) */}
        <div className="mt-12 p-4 bg-gradient-card backdrop-blur-sm rounded-2xl border border-white/50 shadow-soft">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800">
                Oxford ERP
              </p>
              <p className="text-xs text-neutral-600">v2.1.0</p>
            </div>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Empowering minds, building futures with cutting-edge technology
            education.
          </p>
          <div className="mt-3 w-full bg-neutral-200 rounded-full h-1.5">
            <div className="bg-gradient-primary h-1.5 rounded-full w-3/4 animate-pulse-gentle" />
          </div>
          <p className="text-xs text-neutral-500 mt-1">System Status: Optimal</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
