// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { GraduationCap, Mail, Lock, User, ArrowLeft, Code, Brain, Hash, Briefcase, Sparkles } from 'lucide-react';

// const LoginPage: React.FC = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     identifier: '',
//     password: '',
//     role: 'student'
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     const success = login(formData.identifier, formData.password, formData.role);
    
//     if (success) {
//       navigate('/dashboard');
//     } else {
//       setError('Invalid credentials. Use password123 for all demo accounts.');
//     }
    
//     setIsLoading(false);
//   };

//   const demoCredentials = [
//     { role: 'student', identifier: 'CS2023001', name: 'Sridhar', icon: '🎓', dept: 'CS with AI' },
//     { role: 'student', identifier: 'AI2023002', name: 'Sai', icon: '🎓', dept: 'AI & ML' },
//     { role: 'student', identifier: 'CS2023003', name: 'Santhosh', icon: '🎓', dept: 'Computer Science' },
//     { role: 'student', identifier: 'ML2023004', name: 'Sandeep', icon: '🎓', dept: 'ML Engineering' },
//     { role: 'student', identifier: 'DS2023005', name: 'Rajkumar', icon: '🎓', dept: 'AI & Data Science' },
//     { role: 'faculty', identifier: 'FAC001', name: 'Ajay', icon: '👨‍🏫', dept: 'Computer Science' },
//     { role: 'faculty', identifier: 'FAC002', name: 'Bhanu', icon: '👨‍🏫', dept: 'Cybersecurity' },
//     { role: 'faculty', identifier: 'FAC003', name: 'Chakresh', icon: '👨‍🏫', dept: 'AIML' },
//     { role: 'faculty', identifier: 'FAC004', name: 'Harika', icon: '👩‍🏫', dept: 'Machine Learning' },
//     { role: 'hod', identifier: 'HOD001', name: 'Adbuth Singh', icon: '👨‍💼', dept: 'Computer Science' },
//     { role: 'principal', identifier: 'PRI001', name: 'Indhu', icon: '👩‍💼', dept: 'Administration' },
//   ];

//   const fillDemoCredentials = (identifier: string, role: string) => {
//     setFormData({ ...formData, identifier, role });
//   };

//   const getPlaceholderText = () => {
//     return formData.role === 'student' 
//       ? 'Enter your roll number (e.g., CS2023001)' 
//       : 'Enter your job ID (e.g., FAC001)';
//   };

//   const getIdentifierIcon = () => {
//     return formData.role === 'student' ? Hash : Briefcase;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-success-200/30 to-warning-200/30 rounded-full translate-y-32 -translate-x-32 blur-2xl"></div>
//       <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-xl"></div>
      
//       <div className="max-w-md w-full relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="card relative overflow-hidden"
//         >
//           {/* Card Background Pattern */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70"></div>
//           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-full -translate-y-10 translate-x-10"></div>
//           <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-success-100/40 to-warning-100/40 rounded-full translate-y-8 -translate-x-8"></div>
          
//           <div className="relative z-10 p-8">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <button
//                 onClick={() => navigate('/')}
//                 className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors mb-6 group"
//               >
//                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//                 <span>Back to Home</span>
//               </button>
              
//               <div className="flex items-center justify-center mb-6">
//                 <div className="relative">
//                   <div className="bg-gradient-primary p-4 rounded-2xl shadow-glow">
//                     <GraduationCap className="w-8 h-8 text-white animate-float" />
//                   </div>
//                   <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent-500 animate-bounce-gentle" />
//                 </div>
//               </div>
              
//               <h1 className="text-3xl font-bold text-gradient-hero mb-2">Oxford ERP</h1>
//               <p className="text-neutral-600 mb-2">Technology Education Portal</p>
//               <div className="flex items-center justify-center gap-2">
//                 <Code className="w-4 h-4 text-primary-500" />
//                 <span className="text-xs text-neutral-500">AI & Tech Learning</span>
//                 <Brain className="w-4 h-4 text-accent-500" />
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
//                   <User className="w-4 h-4" />
//                   <span>Role</span>
//                 </label>
//                 <select
//                   value={formData.role}
//                   onChange={(e) => setFormData({ ...formData, role: e.target.value, identifier: '' })}
//                   className="input"
//                 >
//                   <option value="student">Student</option>
//                   <option value="faculty">Faculty</option>
//                   <option value="hod">HOD</option>
//                   <option value="principal">Principal</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
//                   {React.createElement(getIdentifierIcon(), { className: "w-4 h-4" })}
//                   <span>{formData.role === 'student' ? 'Roll Number' : 'Job ID'}</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.identifier}
//                   onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
//                   className="input"
//                   placeholder={getPlaceholderText()}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
//                   <Lock className="w-4 h-4" />
//                   <span>Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   className="input"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>

//               {error && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="notification-error"
//                 >
//                   <div className="w-5 h-5 bg-error-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-xs">!</span>
//                   </div>
//                   <span>{error}</span>
//                 </motion.div>
//               )}

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="btn-primary w-full justify-center"
//               >
//                 {isLoading ? (
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Signing In...</span>
//                   </div>
//                 ) : (
//                   'Sign In to ERP'
//                 )}
//               </button>
//             </form>

//             {/* Demo Accounts */}
//             <div className="mt-8">
//               <div className="border-t border-neutral-200 pt-6">
//                 <h3 className="text-sm font-medium text-neutral-700 mb-4 flex items-center gap-2">
//                   <Brain className="w-4 h-4 text-primary-500" />
//                   <span>Demo Accounts (Password: password123)</span>
//                 </h3>
//                 <div className="space-y-2 max-h-64 overflow-y-auto">
//                   {demoCredentials.map((cred) => (
//                     <button
//                       key={`${cred.role}-${cred.identifier}`}
//                       onClick={() => fillDemoCredentials(cred.identifier, cred.role)}
//                       className="w-full text-left p-4 bg-gradient-to-r from-neutral-50/50 to-primary-50/50 hover:from-primary-100/50 hover:to-accent-100/50 rounded-xl transition-all duration-200 border border-neutral-200/50 hover:border-primary-300/50 group"
//                     >
//                       <div className="flex items-center gap-3">
//                         <span className="text-lg">{cred.icon}</span>
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2">
//                             <span className="font-medium text-neutral-900 group-hover:text-primary-700">
//                               {cred.name}
//                             </span>
//                             <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
//                               {cred.identifier}
//                             </span>
//                           </div>
//                           <p className="text-xs text-neutral-600">{cred.dept}</p>
//                         </div>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer */}
//         <footer className="mt-8 text-center text-sm text-neutral-600">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <GraduationCap className="w-4 h-4 text-primary-500" />
//             <p>Powered by <strong className="text-gradient">Lifebox NextGen Pvt Ltd</strong></p>
//           </div>
//           <div className="flex justify-center gap-4">
//             <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
//             <span className="text-neutral-400">•</span>
//             <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
//             <span className="text-neutral-400">•</span>
//             <a href="#" className="hover:text-primary-600 transition-colors">Contact</a>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  Lock,
  User,
  ArrowLeft,
  Code,
  Brain,
  Hash,
  Briefcase,
  Sparkles,
  Eye,
  EyeOff,
  ShieldCheck,
  LogIn,
} from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    role: 'student',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(
        formData.identifier,
        formData.password,
        formData.role
      );
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };

  const getPlaceholderText = () =>
    formData.role === 'student'
      ? 'Enter your roll number (e.g., CS2023001)'
      : 'Enter your job ID (e.g., FAC001)';

  const getIdentifierIcon = () =>
    formData.role === 'student' ? Hash : Briefcase;

  const handleGoogleLogin = () => {
    // Placeholder: trigger Google OAuth login logic
    alert('Google login not yet connected.');
  };

  const handleOtpLogin = () => {
    navigate('/otp-login');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-success-200/30 to-warning-200/30 rounded-full translate-y-32 -translate-x-32 blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-xl" />

      <div className="max-w-md w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70" />

          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </button>

              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="bg-gradient-primary p-4 rounded-2xl shadow-glow">
                    <GraduationCap className="w-8 h-8 text-white animate-float" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent-500 animate-bounce-gentle" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gradient-hero mb-2">Oxford ERP</h1>
              <p className="text-neutral-600 mb-2">Technology Education Portal</p>
              <div className="flex items-center justify-center gap-2">
                <Code className="w-4 h-4 text-primary-500" />
                <span className="text-xs text-neutral-500">AI & Tech Learning</span>
                <Brain className="w-4 h-4 text-accent-500" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
                  <User className="w-4 h-4" />
                  <span>Role</span>
                </label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value,
                      identifier: '',
                    })
                  }
                  className="input"
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="hod">HOD</option>
                  <option value="principal">Principal</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
                  {React.createElement(getIdentifierIcon(), { className: 'w-4 h-4' })}
                  <span>{formData.role === 'student' ? 'Roll Number' : 'Job ID'}</span>
                </label>
                <input
                  type="text"
                  value={formData.identifier}
                  onChange={(e) =>
                    setFormData({ ...formData, identifier: e.target.value })
                  }
                  className="input"
                  placeholder={getPlaceholderText()}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-3">
                  <Lock className="w-4 h-4" />
                  <span>Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="input pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-primary-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-primary-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="notification-error flex items-center gap-2 text-sm text-error-600 mt-1"
                >
                  <div className="w-5 h-5 bg-error-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <span>{error}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In to ERP'
                )}
              </button>

              {/* OR */}
              <div className="text-center text-neutral-400 text-sm my-4">OR</div>

              {/* OTP Login */}
              <button
                type="button"
                onClick={handleOtpLogin}
                className="w-full flex items-center justify-center gap-2 border border-primary-300 text-primary-700 hover:bg-primary-50 rounded-lg px-4 py-2 transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Login via OTP</span>
              </button>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 border border-red-300 text-red-700 hover:bg-red-50 rounded-lg px-4 py-2 transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign in with Google</span>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-neutral-600">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-4 h-4 text-primary-500" />
            <p>
              Powered by{' '}
              <strong className="text-gradient">Lifebox NextGen Pvt Ltd</strong>
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
            <span className="text-neutral-400">•</span>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Terms
            </a>
            <span className="text-neutral-400">•</span>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
