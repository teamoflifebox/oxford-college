// components/LearnMoreModal.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface LearnMoreModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ open, onClose, title, content }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-primary-600 mb-4">{title}</h2>

        {/* Content */}
        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default LearnMoreModal;
