import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react'; // Using Sparkles for a fun yet professional touch
import { Link } from 'react-router-dom';

const HolidayPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const eventSlides = [
    {
      title: "Happy Women's Day!",
      description: "Celebrate with us and join our community of inspiring women in tech! 💫",
      icon: <Sparkles className="w-16 h-16 text-yellow-300 drop-shadow-glow" />, // Fun sparkles icon
    },
    {
      title: "Celebrating Women in Tech",
      description: "Honoring the brilliant women shaping the future of technology. Let's connect and grow together! 🌟",
      icon: <Sparkles className="w-16 h-16 text-yellow-300 drop-shadow-glow" />, // Consistent sparkles icon
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
    const month = today.getMonth(); // March is month 2 (0-indexed)
    const day = today.getDate(); // Day of the month

    // Check if the date is March 7th or March 8th
    return month === 2 && (day === 7 || day === 8);
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
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop with gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-b from-purple-500/40 to-pink-500/40 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 overflow-hidden"
          >
            {/* Main Content */}
            <motion.div
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 0 20px rgba(168, 85, 247, 0.2)",
                  "0 0 0 40px rgba(168, 85, 247, 0)"
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
                  {/* Floating Sparkles Background */}
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        rotate: Math.random() * 360,
                        scale: Math.random() * 0.5 + 0.5
                      }}
                      animate={{
                        y: -100,
                        rotate: Math.random() * 360,
                        scale: [0.5, 1, 0.5],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-300" />
                    </motion.div>
                  ))}

                  <motion.div
                    className="relative z-10 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-8">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                          y: [0, -10, 0]
                        }}
                        transition={{
                          duration: 2,
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
                      className="text-xl md:text-2xl text-pink-100 mb-8"
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
                        to="/events"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-pink-100 rounded-full text-purple-600 font-medium text-lg transition-colors"
                        onClick={() => setIsVisible(false)}
                      >
                        <span>Join Our Community</span>
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
                          className="absolute inset-0 rounded-full bg-purple-400 blur-xl"
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

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
                {eventSlides.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === slideIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    animate={index === slideIndex ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HolidayPopup;
