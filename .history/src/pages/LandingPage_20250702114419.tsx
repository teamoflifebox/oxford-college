import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LearnMoreModal from '../components/LearnMoreModal';
import NavBar from '../components/NavBar';
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
  Menu,
  X,
  TrendingUp,
  Download,
  LogIn,
  Code,
  Brain,
  Database
} from 'lucide-react';
import Announcements from './Announcements';
import DownloadButton from '../components/DownloadButton';
type Course = {
  name: string;
  duration: string;
  seats: number;
  icon: string;
  fileLink:string
};

const LandingPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [modalOpen,setModalOpen] = useState(false);
  const [selectedCourse,setSelectedCourse] = useState<Course | null>(null)
const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const courses = [
    { name: 'Computer Science Engineering with AI', duration: '4 Years', seats: 120, icon: '🤖',fileLink:'/files/Computer_Science_Engineering_with_AI.pdf' },
    { name: 'Artificial Intelligence & Machine Learning', duration: '4 Years', seats: 100, icon: '🧠',fileLink:'/files/AI_ML_curriculam.pdf' },
    { name: 'Computer Science Engineering', duration: '4 Years', seats: 150, icon: '💻',fileLink:'/files/CSE_curriculam.pdf' },
    { name: 'Machine Learning Engineering', duration: '4 Years', seats: 80, icon: '⚙️', fileLink:'/files/ML_engineering.pdf' },
    { name: 'AI & Data Science', duration: '4 Years', seats: 90, icon: '📊',fileLink:'/files/AI_ML_curriculam.pdf'},
    { name: 'Data Science & Analytics', duration: '4 Years', seats: 70, icon: '📈',fileLink:'/files/DatascienceandAnalytics.pdf' }
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
      <NavBar/>
      
      {/* Mobile Menu */}
      
      {/* Hero Section */}
        <section className="pt-16 relative overflow-hidden min-h-screen">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 hero-grid-pattern opacity-30"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
            
            {/* Left Content - 5 columns */}
            <div className="lg:col-span-5 space-y-8 animate-slideInLeft">
              {/* Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg animate-scaleIn">
                <Zap className="w-5 h-5 animate-bounce" />
                <span className="font-semibold">Leading Tech Education Since 1985</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="block animate-fadeInUp">Shape the</span>
                  <span className="block gradient-text animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    Future of Tech
                  </span>
                  <span className="block text-4xl lg:text-5xl text-gray-700 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    at Oxford College
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                  Where innovation meets education. Join our cutting-edge AI and Computer Science programs 
                  designed for tomorrow's technology leaders.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-glow font-semibold">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <DownloadButton
                  fileLink="/files/Oxford_Brochure_Placeholder.pdf"
                  label="Download Prospectus"
                  countdown={3}
                  className="inline-flex items-center space-x-3 glass-effect text-gray-700 px-8 py-4 rounded-2xl hover:bg-white/95 transition-all duration-300 font-semibold shadow-lg"
                  forceDownload={true}
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 animate-fadeInUp" style={{animationDelay: '1s'}}>
                {[
                  { icon: Shield, label: 'NAAC A+ Accredited', value: '2024', color: 'text-green-600' },
                  { icon: Globe, label: 'Global Recognition', value: '50+', color: 'text-blue-600' },
                  { icon: TrendingUp, label: 'Placement Rate', value: '95%', color: 'text-purple-600' },
                  { icon: Award, label: 'Years Legacy', value: '35+', color: 'text-orange-600' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 glass-effect rounded-xl hover:bg-white/95 transition-all duration-300">
                    <div className={`p-2 rounded-lg bg-gray-100 ${feature.color}`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{feature.value}</span>
                      <p className="text-sm text-gray-600">{feature.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content - 7 columns */}
            <div className="lg:col-span-7 relative animate-slideInRight">
              
              {/* Main Image Grid */}
              <div className="grid grid-cols-12 gap-4 h-[600px]">
                
                {/* Large Main Image */}
                <div className="col-span-8 row-span-2 relative">
                  <div className="hero-image-main h-full w-full rounded-3xl overflow-hidden shadow-glow">
                    <img
                      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Students working with AI technology"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">AI Innovation Hub</h3>
                      <p className="text-blue-100">Where future tech leaders are born</p>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white/30 hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Top Right Image */}
                <div className="col-span-4 relative">
                  <div className="image-container h-full w-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Modern computer lab"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="image-overlay absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Code className="w-8 h-8 mx-auto mb-2" />
                        <span className="font-semibold">Tech Labs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div className="col-span-4 relative">
                  <div className="image-container h-full w-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Students collaborating"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="image-overlay absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Users className="w-8 h-8 mx-auto mb-2" />
                        <span className="font-semibold">Collaboration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="floating-card absolute -top-6 -left-6 glass-effect p-6 rounded-2xl shadow-glow border border-white/20" style={{'--delay': '0s'} as any}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">10K+ Alumni</p>
                    <p className="text-sm text-gray-600">Success Stories</p>
                  </div>
                </div>
              </div>

              <div className="floating-card absolute -bottom-6 -right-6 glass-effect p-6 rounded-2xl shadow-glow border border-white/20" style={{'--delay': '1s'} as any}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">AI Research</p>
                    <p className="text-sm text-gray-600">Innovation Center</p>
                  </div>
                </div>
              </div>

              <div className="floating-card absolute top-1/2 -left-8 glass-effect p-4 rounded-xl shadow-glow border border-white/20" style={{'--delay': '2s'} as any}>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">95%</p>
                    <p className="text-xs text-gray-600">Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Banner */}
          <div className="mt-20 glass-effect rounded-3xl p-8 shadow-glow border border-white/20 animate-fadeInUp">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '35+', label: 'Years of Excellence', icon: BookOpen, color: 'text-blue-600' },
                { number: '10K+', label: 'Successful Graduates', icon: Users, color: 'text-purple-600' },
                { number: '95%', label: 'Placement Success', icon: TrendingUp, color: 'text-green-600' },
                { number: '200+', label: 'Industry Partners', icon: Building, color: 'text-orange-600' }
              ].map((stat, idx) => (
                <div key={idx} className="stat-card p-6 rounded-2xl text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 ${stat.color} mb-3`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>

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
                <button className="w-full py-2 text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors"
                onClick={() => handleLearnMore(course)}>
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
                <a href="/privacy-policy" className="text-sage-400 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-sage-600">|</span>
                <a href="/terms-and-conditions" className="text-sage-400 hover:text-white transition-colors">Terms</a>
                <span className="text-sage-600">|</span>
                <a href="/contact" className="text-sage-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
     {/* Modal */}
     {
      modalOpen && selectedCourse && (
        <LearnMoreModal 
          onClose={()=>setModalOpen(false)}
          course={selectedCourse}
        />
      )
     }
    </div>
  );
};

export default LandingPage;





