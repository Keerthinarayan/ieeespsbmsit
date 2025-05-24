import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, ArrowRight, Users } from 'lucide-react';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      title: 'Decode X 2025',
      date: 'June  12 - 14, 2025',
      location: 'APJ Lab, BMSIT, Bengaluru',
      description: 'IEEE SPS flagship event of 2025 , Students collaborating on innovative signal processing solutions',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      attendees: 250,
      topics: ['AI & ML', 'Signal Theory', 'Applications'],
      registrationLink: 'https://www.decodex.one/', 
    },
    {
      title: 'Workshop on AI in Signal Processing',
      date: 'July 8, 2025',
      location: 'Virtual Event',
      description: 'Learn about the latest applications of AI in signal processing from industry experts.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      attendees: 300,
      topics: ['Deep Learning', 'Neural Networks', 'Real-time Processing'],
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAho4NgQ-H0zXE1E02aO4vcgEtHURxQMcsuR9YUIXn41H_nQ/viewform?usp=dialog', 
    },
  ];

  const previousActivities = [
    {
      title: 'Capture The Signal 2024',
      date: 'June 2024',
      location: 'BMSIT Academic block, Bengaluru',
      description: 'IEEE SPS flagship event of 2024 ,Join us for the annual symposium featuring keynote speakers, workshops, and networking opportunities.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      attendees: 400,
      topics: ['Innovation', 'Student Projects', 'Competition'],
      detailsLink: 'https://bmsit-ieee.github.io/sps/cts/', // Details link for the first event
    },
    {
      title: 'Grid Wars',
      date: '31st December 2024',
      location: 'BMSIT LAB block, Bengaluru',
      description: 'Reach the finish line to get the SPS glory',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      attendees: 250,
      topics: ['Research', 'Industry Trends', 'Networking'],
      detailsLink: 'https://ieeesps.netlify.app/', // Details link for the second event
    },
  ];

  const EventCard = ({ event, index, isUpcoming = false }) => {
    const isSelected = selectedEvent === event.title;

    const handleRegisterClick = () => {
      window.location.href = event.registrationLink; // Use the event's registration link
    };

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-blue-500/5 overflow-hidden transform-gpu border border-transparent dark:border-blue-500/10 hover:dark:border-blue-500/20 transition-all"
        onClick={() => setSelectedEvent(isSelected ? null : event.title)}
      >
        <motion.div
          className="relative h-48 sm:h-56 overflow-hidden cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent dark:from-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
              isUpcoming ? 'bg-blue-500 dark:bg-blue-600' : 'bg-gray-500 dark:bg-gray-600'
            }`}>
              {isUpcoming ? 'Upcoming' : 'Past Event'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white/90">{event.title}</h3>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="p-4 sm:p-6"
            initial={{ height: "auto" }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <div className="space-y-3">
              <motion.div
                className="flex items-center text-gray-600 dark:text-gray-400 space-x-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{event.attendees} attendees</span>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-600 dark:text-gray-400 text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {event.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {event.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400"
                  >
                    {topic}
                  </span>
                ))}
              </motion.div>

              {isUpcoming && (
                <motion.button
                  className="mt-4 w-full sm:w-auto flex items-center justify-center space-x-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRegisterClick}
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              )}

              {!isUpcoming && (
                <motion.a
                  href={event.detailsLink} // Use the event's details link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <span>View Event Details</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="pt-16 dark:bg-black/40">
      {/* Hero Section with Animated Gradient */}
      <motion.div
        className="relative py-12 sm:py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90 dark:from-green-900/90 dark:to-blue-900/90"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white/90"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Events
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto dark:text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join us for exciting events and stay connected with the signal processing community
          </motion.p>
        </motion.div>

        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/80 dark:bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div ref={ref} className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-20"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center dark:text-white/90"
              whileInView={{
                opacity: [0, 1],
                y: [20, 0]
              }}
            >
              Upcoming Events
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <AnimatePresence>
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.title} event={event} index={index} isUpcoming={true} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Previous Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center dark:text-white/90"
              whileInView={{
                opacity: [0, 1],
                y: [20, 0]
              }}
            >
              Previous Activities
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <AnimatePresence>
                {previousActivities.map((event, index) => (
                  <EventCard key={event.title} event={event} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
