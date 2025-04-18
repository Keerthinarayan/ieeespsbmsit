import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Target, Compass } from 'lucide-react';

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="pt-16 dark:bg-black/40" ref={containerRef}>
      {/* Hero Section with Gradient and Particles */}
      <div className="relative py-20 bg-gradient-to-r from-green-600/90 to-blue-600/90 dark:from-green-900/90 dark:to-blue-900/90 backdrop-blur-lg overflow-hidden">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white/90">
            About Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto dark:text-white/80">
            Shaping the future of signal processing through innovation, education, and collaboration
          </p>
        </motion.div>
      </div>

      {/* SVG Threads Container */}
      <div className="fixed inset-0 pointer-events-none">
        <svg
          className="w-full h-full dark:opacity-40"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          style={{ opacity: 0.6 }}
        >
          {/* Left Threads (Green) */}
          <motion.path
            d="M 0,50 C 400,50 800,250 960,250"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
            className="dark:stroke-green-500/40"
          />
          <motion.path
            d="M 0,250 C 500,250 800,450 960,450"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
            className="dark:stroke-green-500/40"
          />
          <motion.path
            d="M 0,450 C 600,450 800,650 960,650"
            stroke="rgba(34, 197, 94, 0.8)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
            className="dark:stroke-green-500/40"
          />

          {/* Right Threads (Blue) */}
          <motion.path
            d="M 1920,50 C 1520,50 1120,250 960,250"
            stroke="rgba(99, 102, 241, 0.8)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
            className="dark:stroke-blue-500/40"
          />
          <motion.path
            d="M 1920,250 C 1420,250 1120,450 960,450"
            stroke="rgba(99, 102, 241, 0.8)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
            className="dark:stroke-blue-500/40"
          />
          <motion.path
            d="M 1920,450 C 1320,450 1120,650 960,650"
            stroke="rgba(99, 102, 241, 0.8)"
            strokeWidth="4"
            fill="none"
            style={{ pathLength }}
            className="dark:stroke-blue-500/40"
          />
        </svg>
      </div>

      {/* Vision & Mission Content */}
      <div ref={ref} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center justify-center mb-8">
              <Lightbulb className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white/90">Our Vision</h2>
            <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-blue-500/5 p-8 border border-transparent dark:border-blue-500/10">
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto">
                To be the premier global technical society in signal processing, serving the needs of the world through technological innovation and fostering a diverse, inclusive community of experts and practitioners.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center justify-center mb-8">
              <Target className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white/90">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Advance Technology',
                  description: 'Drive innovation in signal processing theory and applications',
                },
                {
                  title: 'Foster Community',
                  description: 'Build a global network of researchers, practitioners, and students',
                },
                {
                  title: 'Promote Education',
                  description: 'Provide resources and opportunities for continuous learning',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg dark:shadow-blue-500/5 border border-transparent dark:border-blue-500/10 hover:dark:border-blue-500/20 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90 mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Compass className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white/90">Strategic Goals</h2>
            <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-blue-500/5 p-8 border border-transparent dark:border-blue-500/10">
              <ul className="space-y-6 max-w-4xl mx-auto">
                {[
                  'Lead technological innovation in signal processing and its applications',
                  'Enhance global collaboration and knowledge sharing among members',
                  'Support professional development and educational initiatives',
                  'Promote diversity and inclusion in the signal processing community',
                ].map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{index + 1}</span>
                    </div>
                    <p className="ml-4 text-gray-700 dark:text-gray-300">{goal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;