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

interface LearnMoreModalProps {
  course: {
    isOpen:boolean;
    name: string;
    duration: string;
    seats: number;
    icon: string;
    onClose:()=>void
  };
  onClose: () => void;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-4xl mb-4">{course.icon}</div>
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="text-sage-600 mb-4">
          Duration: {course.duration} <br />
          Seats: {course.seats}
        </p>
        <p className="text-sage-600 mb-6">
          This program offers an in-depth curriculum focusing on core concepts and hands-on projects in {course.name}. Join to gain industry-relevant skills and certifications.
        </p>
        <button
          className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:scale-105 transition-transform font-semibold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LearnMoreModal;
