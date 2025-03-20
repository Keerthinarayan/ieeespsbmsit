import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navbarBg = scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-dark-bg/90'
    : isHomePage
    ? 'bg-transparent'
    : 'bg-white shadow-lg dark:bg-dark-bg';

  const textColor = scrolled || !isHomePage ? 'text-gray-900 dark:text-gray-100' : 'text-white';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/vision', label: 'About Us' },
    { path: '/events', label: 'Events' },
    { path: '/archives', label: 'Archives' },
    { path: '/team', label: 'Our Team' },
    { path: '/spectrum', label: 'Spectrum' },
    { path: '/waveplay', label: 'WavePlay' },
  ];

  const glowVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 0.15, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      {/* Animated background glow effect */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Mouse follow effect */}
      <motion.div
        className="absolute bg-blue-400/5 rounded-full w-28 h-28 blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: "spring", damping: 10 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://i.imgur.com/DV2taB1.png" 
                alt="SPS Logo" 
                className="h-8 w-auto"
              />
            </motion.div>
            <motion.span className={`font-bold text-xl ${textColor}`}>
              IEEE SPS BMSIT&M
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.path}
                  className={`transition-colors duration-200 font-medium relative group ${
                    location.pathname === item.path
                      ? scrolled || !isHomePage
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-white font-semibold'
                      : scrolled || !isHomePage
                      ? 'text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Hover glow effect */}
                  <AnimatePresence>
                    {location.pathname === item.path && (
                      <motion.div
                        variants={glowVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute -inset-2 bg-blue-400 rounded-full blur-md -z-10"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={textColor}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", damping: 20 }}
                className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg dark:bg-dark-card"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        location.pathname === item.path
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;