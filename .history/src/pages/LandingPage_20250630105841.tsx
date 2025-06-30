import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  Star,
  TrendingUp,
  Download,
  LogIn,
  Code,
  Brain,
  Database
} from 'lucide-react';
import Announcements from './Announcements';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const courses = [
    { name: 'Computer Science Engineering with AI', duration: '4 Years', seats: 120, icon: '🤖' },
    { name: 'Artificial Intelligence & Machine Learning', duration: '4 Years', seats: 100, icon: '🧠' },
    { name: 'Computer Science Engineering', duration: '4 Years', seats: 150, icon: '💻' },
    { name: 'Machine Learning Engineering', duration: '4 Years', seats: 80, icon: '⚙️' },
    { name: 'AI & Data Science', duration: '4 Years', seats: 90, icon: '📊' },
    { name: 'Data Science & Analytics', duration: '4 Years', seats: 70, icon: '📈' }
  ];

  const facilities = [
    { icon: Code, title: 'AI Research Labs', desc: 'State-of-the-art AI and ML research facilities' },
    { icon: BookOpen, title: 'Digital Library', desc: 'Extensive tech resources and e-learning platforms' },
    { icon: Users, title: 'Industry Experts', desc: 'Faculty with real-world tech industry experience' },
    { icon: Database, title: 'Computing Labs', desc: 'Advanced labs with latest hardware and software' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'AI Engineer at Google',
      text: 'Oxford College\'s AI program gave me the perfect foundation for my career in machine learning.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Microsoft',
      text: 'The hands-on approach and industry connections helped me land my dream job in tech.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'ML Engineer at Tesla',
      text: 'The comprehensive curriculum prepared me to work on cutting-edge autonomous systems.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Tech Placement Rate', value: '95%', icon: TrendingUp },
    { label: 'Average Package', value: '$85K', icon: Award },
    { label: 'Industry Partners', value: '200+', icon: Building },
    { label: 'Alumni Network', value: '10K+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-nature">
      {/* Navigation */}
      {/* <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-forest p-2 rounded-xl shadow-nature">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">Oxford College</span>
                <p className="text-xs text-sage-600 -mt-1">Technology Excellence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sage-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#courses" className="text-sage-600 hover:text-primary-600 transition-colors">Courses</a>
              <a href="#facilities" className="text-sage-600 hover:text-primary-600 transition-colors">Facilities</a>
              <a href="#placements" className="text-sage-600 hover:text-primary-600 transition-colors">Placements</a>
              <a href="#contact" className="text-sage-600 hover:text-primary-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">
                <Download className="w-4 h-4" />
                <span>Prospectus</span>
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="btn-primary"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav> */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Title */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-forest p-2 rounded-xl shadow-nature">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">Oxford College</span>
                <p className="text-xs text-sage-600 -mt-1">Technology Excellence</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Programs dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sage-600 hover:text-primary-600 transition-colors">
                  Programs
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block z-50">
                  <a href="#ug" className="block px-4 py-2 hover:bg-gray-100">UG</a>
                  <a href="#pg" className="block px-4 py-2 hover:bg-gray-100">PG</a>
                  <a href="#certification" className="block px-4 py-2 hover:bg-gray-100">Certification</a>
                </div>
              </div>
              <a href="#lab" className="text-sage-600 hover:text-primary-600 transition-colors">Innovation Lab</a>
              <a href="#careers" className="text-sage-600 hover:text-primary-600 transition-colors">Careers</a>
              <a href="#gallery" className="text-sage-600 hover:text-primary-600 transition-colors">Campus Gallery</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">
                <Download className="w-4 h-4" />
                <span>Prospectus</span>
              </button>
              <button onClick={() => navigate('/login')} className="btn-primary">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <section className="pt-16 relative overflow-hidden">
        {/* <Announcements/> */}
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-forest-200/40 to-accent-200/40 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-primary-600 animate-float" />
                <span className="text-primary-600 font-medium">AI & Technology Education</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Shape Your Future at
                <span className="text-gradient block">Oxford College</span>
              </h1>
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                Leading the way in AI, Machine Learning, and Computer Science education. Join our tech-focused community and become an industry leader.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/login')}
                  className="btn-primary group"
                >
                  <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Access ERP Portal</span>
                </button>
                <button className="btn-secondary group">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download Prospectus</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Oxford College Tech Campus"
                  className="rounded-3xl shadow-forest"
                />
                <div className="absolute -bottom-6 -left-6 card-nature p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-forest p-3 rounded-xl">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">NAAC A+ Accredited</p>
                      <p className="text-sm text-sage-600">Top Tech Institution</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
           
          </div>
           {/* <Announcements/> */}
        </div>
        <Announcements/>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-primary-600" />
              <span className="text-primary-600 font-medium">About Oxford</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Education Pioneer</h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Since 1985, Oxford College has been at the forefront of technology education, 
              nurturing innovative minds and tech leaders for over three decades.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '35+', label: 'Years of Tech Excellence', icon: Code },
              { number: '10,000+', label: 'Tech Professionals Graduated', icon: Users },
              { number: '95%', label: 'Industry Placement Rate', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-card text-center"
              >
                <div className="bg-gradient-forest w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-nature">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-sage-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge Courses</h2>
            <p className="text-xl text-sage-600">Choose from our AI and technology-focused programs designed for the future</p>
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
                <button className="w-full py-2 text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <Announcements/> */}
      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building className="w-6 h-6 text-primary-600" />
              <span className="text-primary-600 font-medium">Tech Infrastructure</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-sage-600">Experience learning in our state-of-the-art tech campus</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl hover:from-primary-100 hover:to-secondary-100 transition-all duration-300 border border-primary-100"
              >
                <div className="bg-gradient-forest w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-nature">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-sage-600">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section id="placements" className="py-20 bg-gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Tech Career Excellence</h2>
            <p className="text-xl text-primary-100">Our graduates lead innovation at top tech companies worldwide</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-accent-500" />
              <span className="text-primary-600 font-medium">Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Tech Alumni Say</h2>
            <p className="text-xl text-sage-600">Voices from our technology success stories</p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="card-nature p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-sage-600 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sage-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-3 bg-white rounded-full shadow-nature hover:shadow-forest transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 text-sage-600" />
              </button>
              <button
                onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="p-3 bg-white rounded-full shadow-nature hover:shadow-forest transition-shadow"
              >
                <ChevronRight className="w-5 h-5 text-sage-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Brain className="w-12 h-12 text-white mx-auto mb-4 animate-float" />
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Innovate?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join Oxford College and become part of the technology revolution
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 rounded-2xl hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-nature font-semibold"
            >
              <LogIn className="w-5 h-5" />
              <span>Access ERP Portal</span>
            </button>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-sage-600">Visit our tech campus or contact us for more information</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Address', info: '123 Tech Valley, Oxford City, State 12345' },
              { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567' },
              { icon: Mail, title: 'Email', info: 'info@oxfordcollege.edu' }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100"
              >
                <div className="bg-gradient-forest w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-nature">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-sage-600">{contact.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-forest p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Oxford College</span>
            </div>
            <p className="text-sage-300 mb-6">Innovating minds, building futures since 1985</p>
            <div className="border-t border-sage-700 pt-6">
              <p className="text-sage-400 text-sm mb-2">
                Powered by <strong className="text-white">Lifebox NextGen Pvt Ltd</strong>
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <a href="#" className="text-sage-400 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-sage-600">|</span>
                <a href="#" className="text-sage-400 hover:text-white transition-colors">Terms</a>
                <span className="text-sage-600">|</span>
                <a href="#" className="text-sage-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;