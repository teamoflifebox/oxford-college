import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import StudentManagement from './pages/StudentManagement';
import FacultyManagement from './pages/FacultyManagement';
import AttendanceManagement from './pages/AttendanceManagement';
import MarksManagement from './pages/MarksManagement';
import FeeManagement from './pages/FeeManagement';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import DocumentsPage from './pages/DocumentsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import NotificationCenter from './components/WhatsApp/NotificationCenter';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Contact from './pages/Contact';
import InnovationLab from './pages/InnovationLab';
import CampusGallery from './pages/CampusGallery';
import CareersPage from './pages/Careers';
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/gallery" element={<CampusGallery />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/students" element={
        <ProtectedRoute>
          <StudentManagement />
        </ProtectedRoute>
      } />
      
      <Route path="/faculty" element={
        <ProtectedRoute>
          <FacultyManagement />
        </ProtectedRoute>
      } />
      
      <Route path="/attendance" element={
        <ProtectedRoute>
          <AttendanceManagement />
        </ProtectedRoute>
      } />
      
      <Route path="/marks" element={
        <ProtectedRoute>
          <MarksManagement />
        </ProtectedRoute>
      } />
      <Route path="/contact" element={<Contact />} />
      <Route path="/fees" element={
        <ProtectedRoute>
          <FeeManagement />
        </ProtectedRoute>
      } />
      
      <Route path="/notifications" element={
        <ProtectedRoute>
          <NotificationsPage />
        </ProtectedRoute>
      } />
      
      <Route path="/documents" element={
        <ProtectedRoute>
          <DocumentsPage />
        </ProtectedRoute>
      } />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/innovation-lab" element={<InnovationLab/>}/>
      <Route path="/analytics" element={
        <ProtectedRoute>
          <AnalyticsPage />
        </ProtectedRoute>
      } />

      <Route path="/whatsapp" element={
        <ProtectedRoute>
          <NotificationCenter />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop/>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;