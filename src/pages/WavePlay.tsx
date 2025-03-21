import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gamepad2, AudioWaveform as Waveform, BrainCircuit as Circuit, ExternalLink } from 'lucide-react';

const WavePlay = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const games = [
    {
      title: 'Vibe Check',
      description: 'Explore the fascinating world of Fourier transforms through an interactive gaming experience.',
      icon: <Waveform className="w-12 h-12" />,
      link: 'https://fouriersignal.netlify.app/',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'ScreamSync',
      description: 'Test your signal processing skills by matching various waveform patterns.',
      icon: <Waveform className="w-12 h-12" />,
      link: 'https://waveformed.netlify.app/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Circuit Cracked',
      description: 'Challenge yourself with interactive circuit puzzles and simulations.',
      icon: <Circuit className="w-12 h-12" />,
      link: 'https://circuitss.netlify.app/',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Hear Me Out',
      description: 'Dive into an auditory adventure and test your hearing and signal processing skills.',
      icon: <Waveform className="w-12 h-12" />,
      link: 'https://bmsit-ieee.github.io/sps/HearMeOut/index.html',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Animated background waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(${i * 45}deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WavePlay Games
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Experience signal processing concepts through interactive games
            </p>
          </motion.div>
        </div>
      </div>

      {/* Games Grid */}
      <div ref={ref} className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {/* Game Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 h-full border border-gray-800 hover:border-blue-500/50 transition-colors">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${game.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="mb-6 text-white"
                    >
                      {game.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {game.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {game.description}
                    </p>

                    <motion.a
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Play Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Floating particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      initial={{
                        x: Math.random() * 200,
                        y: Math.random() * 200,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WavePlay;
