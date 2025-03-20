import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image as ImageIcon, Award, X } from 'lucide-react';

const Archives = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [fullViewImage, setFullViewImage] = useState(null);

  const eventGallery = [
    {
      id: 1,
      title: 'Technical Workshop 2024',
      date: 'November 2024',
      coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
      ]
    },
    {
      id: 2,
      title: 'Annual Conference',
      date: 'September 2024',
      coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
      ]
    },
    {
      id: 3,
      title: 'Student Meetup',
      date: 'July 2024',
      coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
      ]
    },
  ];

  const hallOfFame = [
    {
      name: 'Aditya ',
      role: 'President (2023-24)',
      image: 'https://i.imgur.com/XYugBxz.jpeg',
    },
    {
      name: 'Shashank ',
      role: 'Vice President (2024-25)',
      image: 'https://bmsit-ieee.github.io/sps/wp-content/uploads/2024/03/PanthangiViceCHair.jpg',
    },
    {
      name: 'Spandan',
      role: 'Secretary (2024-25)',
      image: 'https://i.imgur.com/J5u6aq3.jpeg ',
    },
     {
      name: 'Vaibhav',
      role: 'Volcom Lead (2024-25)',
      image: 'https://i.imgur.com/bp1Ck3S.jpeg ',
    },
    {
      name: 'Suhas',
      role: 'Treasurer (2024-25)',
      image: 'https://i.imgur.com/MRRwzH3.jpeg ',
    },
    {
      name: 'Rakshit',
      role: 'Webmaster (2024-25)',
      image: 'https://i.imgur.com/KeBIscO.jpeg ',
    },
  ];

  return (
    <div className="pt-16 dark:bg-black/40">
      {/* Hero Section with Gradient and Particles */}
      <div className="relative py-12 sm:py-20 bg-gradient-to-r from-green-600/90 to-blue-600/90 dark:from-green-900/90 dark:to-blue-900/90 backdrop-blur-lg overflow-hidden">
        {/* Particle Effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/80 dark:bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 dark:text-white/90">Archives</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto dark:text-white/80">
            Explore our history and celebrate our past achievements
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div ref={ref} className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center dark:text-white/90">Event Gallery</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {eventGallery.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-blue-500/5 overflow-hidden group cursor-pointer border border-transparent dark:border-blue-500/10 hover:dark:border-blue-500/20 transition-all"
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  <div className="relative h-32 sm:h-40 lg:h-48">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ImageIcon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg dark:text-white/90">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base">{event.date}</p>
                  </div>
                  
                  {/* Expanded Gallery */}
                  {selectedEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 sm:p-4 border-t dark:border-blue-500/10"
                    >
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                        {event.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${event.title} ${index + 1}`}
                            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFullViewImage(image);
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Full View Image Modal */}
          <AnimatePresence>
            {fullViewImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 dark:bg-black/95 flex items-center justify-center p-4"
                onClick={() => setFullViewImage(null)}
              >
                <motion.button
                  className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.button>
                <motion.img
                  src={fullViewImage}
                  alt="Full view"
                  className="max-w-full max-h-[90vh] object-contain"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hall of Fame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white/90">SPS Legacy</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Honoring our leadership team
              </p>
            </div>
            
            {/* First Row - 4 Members */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {hallOfFame.slice(0, 4).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative w-full aspect-square mb-2 sm:mb-3 lg:mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 dark:from-green-500/10 dark:to-blue-500/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg dark:shadow-blue-500/10"
                    />
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-yellow-400 dark:text-yellow-500 drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm lg:text-lg font-bold mb-0.5 sm:mb-1 dark:text-white/90">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm lg:text-base">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 Members (Centered) */}
            <div className="flex justify-center gap-3 sm:gap-6 lg:gap-8">
              {hallOfFame.slice(4, 6).map((member, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (index + 4) * 0.1 }}
                  className="relative group w-[calc(50%-0.75rem)] sm:w-[calc(25%-1.5rem)] lg:w-[calc(20%-2rem)]"
                >
                  <div className="relative w-full aspect-square mb-2 sm:mb-3 lg:mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 dark:from-green-500/10 dark:to-blue-500/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg dark:shadow-blue-500/10"
                    />
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-yellow-400 dark:text-yellow-500 drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm lg:text-lg font-bold mb-0.5 sm:mb-1 dark:text-white/90">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm lg:text-base">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Archives;