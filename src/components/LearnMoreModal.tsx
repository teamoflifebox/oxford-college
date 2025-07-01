// // components/LearnMoreModal.tsx

// import React from 'react';
// import { X } from 'lucide-react';
// import DownloadButton from './DownloadButton';

// export type Course = {
//   name: string;
//   duration: string;
//   seats: number;
//   icon: string;
//   fileLink:string;
// };

// interface LearnMoreModalProps {
//   onClose: () => void;
//   course: Course;
// }

// const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ onClose, course }) => {
//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl relative">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <X className="w-5 h-5" />
//         </button>
//         {/* Icon */}
//         <div className="text-4xl mb-4">{course.icon}</div>
//         {/* Course name */}
//         <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
//         {/* Duration and seats */}
//         <p className="text-gray-600 mb-4">
//           Duration: {course.duration}<br />
//           Seats: {course.seats}
//         </p>
//         {/* Description */}
//         <p className="text-gray-600 mb-6">
//           This program offers an in-depth curriculum focusing on core concepts and hands-on projects in {course.name}. Join to gain industry-relevant skills and certifications.
//         </p>
//         <DownloadButton fileLink={course.fileLink} label="Download curriculam" countdown={3} forceDownload={true} className='w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:scale-105 transition-transform font-semibold mb-4'/>
//         <button
//           className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:scale-105 transition-transform font-semibold"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LearnMoreModal;

import React from "react";
import { X } from "lucide-react";

type Course = {
  name: string;
  duration: string;
  seats: number;
  icon: string;
};

interface LearnMoreModalProps {
  course: Course;
  onClose: () => void;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="text-4xl mb-4">{course.icon}</div>
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>

        {/* Valuable Content */}
        <p className="text-gray-600 mb-4">
          This program offers a comprehensive curriculum designed to equip you with the latest skills in {course.name}. You will work on real-world projects and gain hands-on experience in modern technologies.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-primary-700">Key Highlights:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Industry-oriented syllabus and certifications</li>
          <li>Access to dedicated AI & Data Science labs</li>
          <li>Career support and mentorship from experts</li>
          <li>Project-based learning and hackathons</li>
        </ul>

        {/* Buttons Row */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = `/files/${course.name.replace(/\s+/g, "_")}_Curriculum.pdf`;
              link.download = `${course.name}_Curriculum.pdf`;
              link.click();
            }}
            className="px-3 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-md text-sm font-medium hover:scale-105 transition-transform"
          >
            Download Curriculum
          </button>
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;

