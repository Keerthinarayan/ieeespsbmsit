import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Globe, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HolidayPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const eventSlides = [
    {
      title: "Welcome to IEEE Open Day 2025!",
      description: "Join us in celebrating innovation and excellence in signal processing. Explore our society's achievements and future vision with industry leaders and innovators.",
      icon: <Globe className="w-16 h-16 text-white" />,
    },
    {
      title: "IEEE Conference 2025",
      description: "Experience the future of signal processing technology. Connect with experts, discover cutting-edge research, and be part of this grand celebration.",
      icon: <Users className="w-16 h-16 text-white" />,
    },
    {
      title: "Celebrating Excellence",
      description: "Honoring the brightest minds in signal processing. Join us in recognizing groundbreaking contributions and innovations.",
      icon: <Award className="w-16 h-16 text-white" />,
    }
  ];

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Change slides every 5 seconds
    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % eventSlides.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideTimer);
    };
  }, []);

  const isEventPeriod = () => {
    const today = new Date();
    const startDate = new Date(2025, 2, 20); // March 20, 2025 (month is 0-indexed)
    const endDate = new Date(2025, 2, 23); // March 23, 2025

    // Check if today is between startDate and endDate (inclusive)
    return today >= startDate && today <= endDate;
  };

  if (!isEventPeriod()) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 overflow-hidden"
          >
            {/* Main Content with Blue Gradient */}
            <motion.div
              className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(37, 99, 235, 0)",
                  "0 0 0 20px rgba(37, 99, 235, 0.2)",
                  "0 0 0 40px rgba(37, 99, 235, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Slides Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-12 min-h-[400px] flex items-center justify-center"
                >
                  {/* Celebration Background Animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                          y: [0, -20, 0],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  <motion.div
                    className="relative z-10 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-8">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {eventSlides[slideIndex].icon}
                      </motion.div>
                    </div>

                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {eventSlides[slideIndex].title}
                    </motion.h2>
                    
                    <motion.p
                      className="text-xl md:text-2xl text-blue-100 mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {eventSlides[slideIndex].description}
                    </motion.p>

                    <motion.div
                      className="flex justify-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        to="/vision"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 rounded-full text-blue-600 font-medium text-lg transition-colors"
                        onClick={() => setIsVisible(false)}
                      >
                        <span>Explore Our Vision</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                        
                        {/* Button glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white blur-xl"
                          animate={{
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HolidayPopup;
