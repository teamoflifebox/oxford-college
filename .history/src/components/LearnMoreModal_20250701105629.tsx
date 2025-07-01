// components/LearnMoreModal.tsx

import React from 'react';
import { X } from 'lucide-react';

export type Course = {
  name: string;
  duration: string;
  seats: number;
  icon: string;
};

interface LearnMoreModalProps {
  onClose: () => void;
  course: Course;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ onClose, course }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        {/* Icon */}
        <div className="text-4xl mb-4">{course.icon}</div>
        {/* Course name */}
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        {/* Duration and seats */}
        <p className="text-gray-600 mb-4">
          Duration: {course.duration}<br />
          Seats: {course.seats}
        </p>
        {/* Description */}
        <p className="text-gray-600 mb-6">
          This program offers an in-depth curriculum focusing on core concepts and hands-on projects in {course.name}. Join to gain industry-relevant skills and certifications.
        </p>
        {/* Close action */}
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
