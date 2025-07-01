// pages/LandingPage.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LearnMoreModal from '../components/LearnMoreModal';
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  TrendingUp,
  Download,
  LogIn,
  Code,
  Brain,
  Database,
} from 'lucide-react';
import Announcements from './Announcements';
import DownloadButton from '../components/DownloadButton';

// ────────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────────

type Course = {
  name: string;
  duration: string;
  seats: number;
  icon: string;
};

// ────────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────────

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  /** Testimonial carousel */
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  /** Learn‑More modal */
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // ──────────────────────────────────────────────────────────────────────────────
  // Static data
  // ──────────────────────────────────────────────────────────────────────────────

  const courses: Course[] = [
    {
      name: 'Computer Science Engineering with AI',
      duration: '4 Years',
      seats: 120,
      icon: '🤖',
    },
    {
      name: 'Artificial Intelligence & Machine Learning',
      duration: '4 Years',
      seats: 100,
      icon: '🧠',
    },
    {
      name: 'Computer Science Engineering',
      duration: '4 Years',
      seats: 150,
      icon: '💻',
    },
    {
      name: 'Machine Learning Engineering',
      duration: '4 Years',
      seats: 80,
      icon: '⚙️',
    },
    {
      name: 'AI & Data Science',
      duration: '4 Years',
      seats: 90,
      icon: '📊',
    },
    {
      name: 'Data Science & Analytics',
      duration: '4 Years',
      seats: 70,
      icon: '📈',
    },
  ];

  const facilities = [
    { icon: Code, title: 'AI Research Labs', desc: 'State‑of‑the‑art AI and ML research facilities' },
    { icon: BookOpen, title: 'Digital Library', desc: 'Extensive tech resources and e‑learning platforms' },
    { icon: Users, title: 'Industry Experts', desc: 'Faculty with real‑world tech industry experience' },
    { icon: Database, title: 'Computing Labs', desc: 'Advanced labs with latest hardware and software' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'AI Engineer at Google',
      text: "Oxford College's AI program gave me the perfect foundation for my career in machine learning.",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Microsoft',
      text: 'The hands‑on approach and industry connections helped me land my dream job in tech.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'ML Engineer at Tesla',
      text: 'The comprehensive curriculum prepared me to work on cutting‑edge autonomous systems.',
      rating: 5,
    },
  ];

  const stats = [
    { label: 'Tech Placement Rate', value: '95%', icon: TrendingUp },
    { label: 'Average Package', value: '$85K', icon: Award },
    { label: 'Industry Partners', value: '200+', icon: Building },
    { label: 'Alumni Network', value: '10K+', icon: Users },
  ];

  // ──────────────────────────────────────────────────────────────────────────────
  // Helpers
  // ──────────────────────────────────────────────────────────────────────────────

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  // ──────────────────────────────────────────────────────────────────────────────
  // JSX
  // ──────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-nature">
      {/* … Navigation, Hero, About sections remain unchanged … */}

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-primary-600" />
              <span className="text-primary-600 font-medium">Tech Curriculum</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting‑Edge Courses</h2>
            <p className="text-xl text-sage-600">Choose from our AI and technology‑focused programs designed for the future</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-nature p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {course.name}
                </h3>
                <div className="flex justify-between text-sm text-sage-600 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span>Seats: {course.seats}</span>
                </div>
                <button
                  onClick={() => handleLearnMore(course)}
                  className="w-full py-2 text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* … Remaining sections (Facilities, Placements, Testimonials, CTA, Contact, Footer) remain unchanged … */}

      {/* Learn‑More Modal */}
      {selectedCourse && (
        <LearnMoreModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedCourse.name}
          content={
            <>
              <p>
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>
              <p>
                <strong>Seats:</strong> {selectedCourse.seats}
              </p>
              <p className="mt-4">
                The {selectedCourse.name} program blends foundational theory with hands‑on labs, capstone projects, and
                industry mentorship. Graduates are prepared for roles in AI, data science, and cutting‑edge software
                engineering.
              </p>
            </>
          }
        />
      )}
    </div>
  );
};

export default LandingPage;
