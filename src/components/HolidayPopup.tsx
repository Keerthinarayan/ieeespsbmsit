import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Calendar, MapPin, Users, Cpu, Brain, Satellite, Code, Sparkles } from 'lucide-react';

const EventPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const eventSlides = [
    {
      title: "Decode X 2025",
      description: "IEEE SPS flagship event of 2025. Students collaborating to find solutions to real-world challenges.",
      icon: <Cpu className="w-16 h-16 text-white" />,
      stats: "250+ Attendees",
      extraIcon: <Users className="w-6 h-6 ml-2" />,
      bgElements: "digital"
    },
    {
      title: "Network & Innovate",
      description: "Connect with like-minded innovators at APJ Lab, BMSIT, Bengaluru. A premier gathering of signal processing enthusiasts.",
      icon: <MapPin className="w-16 h-16 text-white" />,
      stats: "September 20-21, 2025",
      extraIcon: <Calendar className="w-6 h-6 ml-2" />,
      bgElements: "network"
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
    const startDate = new Date(2025, 7, 1); // September 1, 2025
    const endDate = new Date(2025, 8, 30); // September 30, 2025

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
            {/* Main Content with Tech-Themed Border */}
            <motion.div
              className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-transparent"
              style={{
                backgroundImage: 'linear-gradient(#0f172a, #0f172a), linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
              }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 20px rgba(59, 130, 246, 0.2)",
                  "0 0 0 40px rgba(59, 130, 246, 0)"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95" />
                  
                  {/* Background Animation - Different for each slide */}
                  <div className="absolute inset-0 overflow-hidden">
                    {eventSlides[slideIndex].bgElements === "digital" && (
                      <>
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-400/40 rounded-sm"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.2, 0.8, 0.2],
                              y: [0, -20, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </>
                    )}
                    
                    {eventSlides[slideIndex].bgElements === "immersive" && (
                      <>
                        {/* Floating neural network nodes */}
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-purple-500 rounded-full"
                            style={{
                              left: `${10 + (i * 6)}%`,
                              top: `${20 + (Math.sin(i) * 30)}%`,
                            }}
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                              duration: 2 + Math.random(),
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                        
                        {/* Connecting lines */}
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30"
                            style={{
                              left: `${15 + (i * 3)}%`,
                              top: `${40 + (Math.cos(i) * 20)}%`,
                              width: `${20 + (i * 4)}%`,
                              transform: `rotate(${i * 10}deg)`,
                            }}
                            animate={{
                              opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                        
                        {/* Floating code snippets */}
                        {['<>', '{}', '()', '[]'].map((symbol, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-blue-300/40 font-mono text-xl"
                            style={{
                              left: `${15 + (i * 20)}%`,
                              top: `${70 + (Math.sin(i) * 10)}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 4 + i,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {symbol}
                          </motion.div>
                        ))}
                      </>
                    )}
                    
                    {eventSlides[slideIndex].bgElements === "network" && (
                      <>
                        {[...Array(25)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-green-400/50 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.2, 0.7, 0.2],
                              y: [0, -15, 0],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </>
                    )}
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
                        className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
                      >
                        {eventSlides[slideIndex].icon}
                      </motion.div>
                    </div>

                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {eventSlides[slideIndex].title}
                    </motion.h2>
                    
                    {/* Stats badge */}
                    <motion.div 
                      className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-900/50 text-blue-100 text-lg font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      {eventSlides[slideIndex].stats}
                      {eventSlides[slideIndex].extraIcon}
                    </motion.div>
                    
                    <motion.p
                      className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {eventSlides[slideIndex].description}
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row justify-center gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <a
                        href="https://www.decodex.one/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 rounded-full text-blue-600 font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      >
                        <span>Register Now</span>
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
                      </a>
                      
                      <button
                        onClick={() => setIsVisible(false)}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 hover:text-white hover:bg-blue-700/20 rounded-full font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      >
                        <span>Maybe Later</span>
                      </button>
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

export default EventPopup;
