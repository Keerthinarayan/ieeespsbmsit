import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  title: string;
  date: string;
  description: string;
}

const EventPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentEvent] = useState<Event>({
    title: "Decode X 2025",
    date: 'September  20 - 21, 2025',
    description: "IEEE SPS flagship event of 2025"
  });

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.3 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-white dark:bg-dark-card rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Notification Bell Animation */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -30, 30, -30, 30, 0] }}
            transition={{ 
              duration: 1,
              repeat: 2,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute -top-6 -left-6 bg-blue-500 rounded-full p-8"
          >
            <Bell className="w-6 h-6 text-white" />
          </motion.div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.button>

          {/* Content */}
          <div className="p-6 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center mb-4"
            >
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-blue-500">{currentEvent.date}</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-bold text-gray-900 dark:text-white mb-2"
            >
              {currentEvent.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-600 dark:text-gray-300 mb-4"
            >
              {currentEvent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-end"
            >
              <Link
                to="/events"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium text-sm"
              >
                <span>View Details</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Animated Border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;
