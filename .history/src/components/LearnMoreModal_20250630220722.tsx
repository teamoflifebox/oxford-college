// // components/LearnMoreModal.tsx

// import React from 'react';
// import { motion } from 'framer-motion';
// import { X } from 'lucide-react';

// interface LearnMoreModalProps {
//   open: boolean;
//   onClose: () => void;
//   title: string;
//   content: React.ReactNode;
// }

// const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ open, onClose, title, content }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0 }}
//         className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-primary-600 mb-4">{title}</h2>

//         {/* Content */}
//         <div className="text-gray-700 text-sm leading-relaxed space-y-3">
//           {content}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LearnMoreModal;
// components/LearnMoreModal.tsx
import React from 'react';
import { X } from 'lucide-react';

type Course = {
  name: string;
  duration: string;
  seats: number;
  icon: string;
};

type Props = {
  course: Course;
  onClose: () => void;
};

const LearnMoreModal: React.FC<Props> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <div className="text-5xl mb-2">{course.icon}</div>
          <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
          <p className="text-sage-600 mb-1">Duration: {course.duration}</p>
          <p className="text-sage-600 mb-4">Seats Available: {course.seats}</p>
          <p className="text-gray-700">
            This program is designed for students passionate about {course.name.split(' ')[0]} and offers an in-depth curriculum, hands-on projects, and access to industry mentors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;
