import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Shield, Flag, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

const HolidayPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const eventSlides = [
    {
      title: "Saluting Our Heroes",
      description: "We express our heartfelt gratitude to the brave soldiers of the Indian Armed Forces who protect our nation day and night. Your valor and sacrifice inspire us all.",
      icon: <Shield className="w-16 h-16 text-white" />,
    },
    {
      title: "Jai Hind 🇮🇳",
      description: "Our Armed Forces stand as pillars of strength, courage, and dedication. Their unwavering commitment to our nation's security fills us with pride.",
      icon: <Flag className="w-16 h-16 text-white" />,
    },
    {
      title: "Forever Grateful",
      description: "Their selfless service and unwavering courage echo through generations. We honor the legacy of our heroes who stand guard at our borders, ensuring peace and prosperity for millions.",
      icon: <Medal className="w-16 h-16 text-white" />,
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
    const startDate = new Date(2025, 4, 24); // May 24, 2025
    const endDate = new Date(2025, 5, 9); // June 9, 2025

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
            {/* Main Content with Tricolor Border */}
            <motion.div
              className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-transparent"
              style={{
                backgroundImage: 'linear-gradient(#1e293b, #1e293b), linear-gradient(90deg, #ea580c, #ffffff, #16a34a)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
              }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(234, 88, 12, 0)",
                  "0 0 0 20px rgba(234, 88, 12, 0.2)",
                  "0 0 0 40px rgba(234, 88, 12, 0)"
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
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors z-10 backdrop-blur-sm"
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
                  className="relative p-12 min-h-[400px] flex items-center justify-center"
                >
                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
                  
                  {/* Background Animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-orange-400/40 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.6, 0.2],
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
                        className="p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-sm"
                      >
                        {eventSlides[slideIndex].icon}
                      </motion.div>
                    </div>

                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl"
                      style={{
                        textShadow: '0 0 20px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)',
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {eventSlides[slideIndex].title}
                    </motion.h2>
                    
                    <motion.p
                      className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
                      style={{
                        textShadow: '0 0 15px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)',
                      }}
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
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-orange-50 rounded-full text-orange-600 font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        onClick={() => setIsVisible(false)}
                      >
                        <span>Learn More About Us</span>
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
                          className="absolute inset-0 rounded-full bg-white blur-xl opacity-20"
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
