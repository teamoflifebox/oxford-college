import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type CarouselItem = {
  image: string;
  title?: string;
  subtitle?: string;
};

type Props = {
  items: CarouselItem[];
  interval?: number; // default 5000ms
  height?: string;   // default 'h-[360px]'
  rounded?: string;  // default 'rounded-3xl'
};

const ImageCarousel: React.FC<Props> = ({
  items,
  interval = 5000,
  height = 'h-[360px]',
  rounded = 'rounded-3xl',
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className={`relative w-full ${height} ${rounded} overflow-hidden shadow-forest`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'z-10' : 'z-0 pointer-events-none'
          }`}
        >
          <img
            src={item.image}
            alt={item.title || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {(item.title || item.subtitle) && (
            <div className="absolute bottom-0 left-0 bg-black/50 w-full p-4 text-white">
              {item.title && <h3 className="text-lg font-semibold">{item.title}</h3>}
              {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCarousel;
