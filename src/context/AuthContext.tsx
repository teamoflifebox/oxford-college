import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (identifier: string, password: string, role: string) => boolean;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Updated mock users data with specific students and faculty
const mockUsers: User[] = [
  // Students - login with roll numbers
  {
    id: '1',
    name: 'Sridhar',
    email: 'sridhar@oxford.edu',
    role: 'student',
    department: 'Computer Science Engineering with AI',
    avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543210',
    joinDate: '2023-09-01',
    rollNumber: 'CS2023001'
  },
  {
    id: '2',
    name: 'Sai',
    email: 'sai@oxford.edu',
    role: 'student',
    department: 'Artificial Intelligence & Machine Learning',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543211',
    joinDate: '2023-09-01',
    rollNumber: 'AI2023002'
  },
  {
    id: '3',
    name: 'Santhosh',
    email: 'santhosh@oxford.edu',
    role: 'student',
    department: 'Computer Science Engineering',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543212',
    joinDate: '2023-09-01',
    rollNumber: 'CS2023003'
  },
  {
    id: '4',
    name: 'Sandeep',
    email: 'sandeep@oxford.edu',
    role: 'student',
    department: 'Machine Learning Engineering',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543213',
    joinDate: '2023-09-01',
    rollNumber: 'ML2023004'
  },
  {
    id: '5',
    name: 'Rajkumar',
    email: 'rajkumar@oxford.edu',
    role: 'student',
    department: 'AI & Data Science',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543214',
    joinDate: '2023-09-01',
    rollNumber: 'DS2023005'
  },
  {
    id: '6',
    name: 'Pradeep',
    email: 'pradeep@oxford.edu',
    role: 'student',
    department: 'Data Science & Analytics',
    avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543215',
    joinDate: '2023-09-01',
    rollNumber: 'DA2023006'
  },
  {
    id: '7',
    name: 'Swamy',
    email: 'swamy@oxford.edu',
    role: 'student',
    department: 'Computer Science Engineering with AI',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543216',
    joinDate: '2023-09-01',
    rollNumber: 'CS2023007'
  },
  {
    id: '8',
    name: 'Ganasai',
    email: 'ganasai@oxford.edu',
    role: 'student',
    department: 'Artificial Intelligence & Machine Learning',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543217',
    joinDate: '2023-09-01',
    rollNumber: 'AI2023008'
  },
  {
    id: '9',
    name: 'Vasanth',
    email: 'vasanth@oxford.edu',
    role: 'student',
    department: 'Machine Learning Engineering',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543218',
    joinDate: '2023-09-01',
    rollNumber: 'ML2023009'
  },
  {
    id: '10',
    name: 'Harsha',
    email: 'harsha@oxford.edu',
    role: 'student',
    department: 'AI & Data Science',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543219',
    joinDate: '2023-09-01',
    rollNumber: 'DS2023010'
  },

  // Faculty - login with job IDs
  {
    id: '11',
    name: 'Ajay',
    email: 'ajay@oxford.edu',
    role: 'faculty',
    department: 'Computer Science',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543220',
    joinDate: '2020-08-15',
    jobId: 'FAC001'
  },
  {
    id: '12',
    name: 'Bhanu',
    email: 'bhanu@oxford.edu',
    role: 'faculty',
    department: 'Cybersecurity',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543221',
    joinDate: '2019-07-10',
    jobId: 'FAC002'
  },
  {
    id: '13',
    name: 'Chakresh',
    email: 'chakresh@oxford.edu',
    role: 'faculty',
    department: 'AIML',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543222',
    joinDate: '2021-01-20',
    jobId: 'FAC003'
  },
  {
    id: '14',
    name: 'Harika',
    email: 'harika@oxford.edu',
    role: 'faculty',
    department: 'Machine Learning',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543223',
    joinDate: '2020-03-15',
    jobId: 'FAC004'
  },
  {
    id: '15',
    name: 'Sony',
    email: 'sony@oxford.edu',
    role: 'faculty',
    department: 'Data Science',
    avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543224',
    joinDate: '2019-11-05',
    jobId: 'FAC005'
  },
  {
    id: '16',
    name: 'Bhanu Prasad',
    email: 'bhanuprasad@oxford.edu',
    role: 'faculty',
    department: 'AIDS',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543225',
    joinDate: '2018-09-12',
    jobId: 'FAC006'
  },

  // HOD
  {
    id: '17',
    name: 'Adbuth Singh',
    email: 'adbuth.singh@oxford.edu',
    role: 'hod',
    department: 'Computer Science',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543226',
    joinDate: '2018-01-10',
    jobId: 'HOD001'
  },

  // Principal
  {
    id: '18',
    name: 'Indhu',
    email: 'indhu@oxford.edu',
    role: 'principal',
    department: 'Administration',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    phone: '+91 9876543227',
    joinDate: '2015-07-01',
    jobId: 'PRI001'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('oxford-erp-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (identifier: string, password: string, role: string): boolean => {
    // For students, login with roll number
    // For faculty/staff, login with job ID
    let foundUser: User | undefined;

    if (role === 'student') {
      foundUser = mockUsers.find(u => u.rollNumber === identifier && u.role === role);
    } else {
      foundUser = mockUsers.find(u => u.jobId === identifier && u.role === role);
    }

    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('oxford-erp-user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('oxford-erp-user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('oxford-erp-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};