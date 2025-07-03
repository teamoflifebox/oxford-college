import { motion } from 'framer-motion';
import {
  Megaphone,
  CalendarCheck,
  Briefcase,
  Activity,
  Award
} from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      icon: <Megaphone className="w-4 h-4 text-primary-700" />,
      message: '🎓 Admissions open for 2025 - Apply now!',
    },
    {
      icon: <CalendarCheck className="w-4 h-4 text-primary-700" />,
      message: '📢 Oxford TechFest 2025 registrations now live.',
    },
    {
      icon: <Briefcase className="w-4 h-4 text-primary-700" />,
      message: '💼 Top recruiters: Google, Microsoft, Tesla visiting this season.',
    },
    {
      icon: <Activity className="w-4 h-4 text-primary-700" />,
      message: '🧠 New course launched: AI in Healthcare',
    },
    {
      icon: <Award className="w-4 h-4 text-primary-700" />,
      message: '🏆 NAAC A++ Accreditation renewed for 2025',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-100 py-3 border-y border-primary-200 overflow-hidden">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: 'linear'
        }}
      >
        {announcements.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white shadow-sm rounded-full px-4 py-1 text-sm text-primary-800 space-x-2 hover:scale-105 transition-transform duration-300"
          >
            {item.icon}
            <span>{item.message}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Announcements;
