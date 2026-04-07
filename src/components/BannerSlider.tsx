"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: '/banners/banner1.png',
    title: 'Your Future, Our Mission',
    subtitle: 'Unlock world-class education with top scholarships.',
  },
  {
    id: 2,
    image: '/banners/banner2.png',
    title: 'Expert Counseling for Students',
    subtitle: 'Guiding you through the admission process of premier institutions.',
  },
  {
    id: 3,
    image: '/banners/banner3.png',
    title: 'Achieve Graduation Excellence',
    subtitle: 'Join thousands of successful students globally.',
  },
  {
    id: 4,
    image: '/banners/banner4.png',
    title: 'Digital Learning Revolution',
    subtitle: 'Master new skills with advanced technology and expert mentors.',
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Banner Image */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banners[currentIndex].image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 sm:p-12">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg max-w-4xl"
              >
                {banners[currentIndex].title}
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-2xl text-gray-100 max-w-2xl drop-shadow-md"
              >
                {banners[currentIndex].subtitle}
              </motion.p>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-xl transform hover:-translate-y-1">
                  Explore More
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors hidden md:block opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors hidden md:block opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary-600 w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
