import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Spectrum = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = textRef.current.querySelectorAll('.line');
      const masks = [];

      lines.forEach((line) => {
        const mask = document.createElement("span");
        mask.className = "mask";
        line.appendChild(mask);
        masks.push(mask);

        gsap.to(mask, {
          scaleX: 0,
          transformOrigin: "right center",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top center",
            end: "bottom center",
            scrub: 2
          }
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        masks.forEach(mask => mask.remove());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-[200vh] bg-black">
      {/* First Section with Stars and Scroll Indicator */}
      <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center">
        {/* Stars Background */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Welcome Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-2xl md:text-4xl font-light mb-12 text-center px-4"
        >
          Welcome to the future of signal processing
        </motion.h2>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-white/80" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div ref={textRef} className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <div className="line relative overflow-hidden py-2">
              <span className="text-5xl md:text-7xl font-bold text-white block">Unleash the magic</span>
            </div>
            <div className="line relative overflow-hidden py-2">
              <span className="text-5xl md:text-7xl font-bold text-white block">of sound waves</span>
            </div>
            <div className="line relative overflow-hidden py-2">
              <span className="text-5xl md:text-7xl font-bold text-white block">where every frequency</span>
            </div>
            <div className="line relative overflow-hidden py-2">
              <span className="text-5xl md:text-7xl font-bold text-red-500 block">tells a story</span>
            </div>
            <div className="line relative overflow-hidden py-2">
              <span className="text-5xl md:text-7xl font-bold text-white block">waiting to be heard.</span>
            </div>
          </div>
        </div>

        {/* Animated Waveform */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 Q300,300 600,100 T1200,100"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="animate-wave"
            />
            <path
              d="M0,150 Q300,50 600,150 T1200,150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="animate-wave-delayed"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Final Section with Floating Particles */}
      <div className="h-screen relative overflow-hidden flex items-center justify-center">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 3}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Welcome to SPS Spectrum
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            Your gateway to advanced audio processing
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, 10px) rotate(90deg);
          }
          50% {
            transform: translate(0, 20px) rotate(180deg);
          }
          75% {
            transform: translate(-10px, 10px) rotate(270deg);
          }
        }

        .animate-wave {
          animation: wave 15s infinite ease-in-out;
        }

        .animate-wave-delayed {
          animation: wave 15s infinite ease-in-out;
          animation-delay: -7.5s;
        }

        @keyframes wave {
          0% {
            transform: translateX(0%);
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(-50%);
            opacity: 0.2;
          }
        }

        .mask {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: black;
          transform-origin: right center;
        }
      `}</style>
    </div>
  );
};

export default Spectrum;