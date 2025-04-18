import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/vision', label: 'About Us' },
    { path: '/events', label: 'Events' },
    { path: '/archives', label: 'Archives' },
    { path: '/team', label: 'Our Team' },
    { path: '/spectrum', label: 'Spectrum' },
    { path: '/waveplay', label: 'WavePlay' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/sps_bmsit?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==',
      hoverColor: 'hover:bg-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ieeespsbmsitm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://chat.whatsapp.com/JImyalLUCR8DVpg86jOdYM',
      hoverColor: 'hover:bg-green-600',
    },
  ];

  const contactInfo = {
    emails: ['ieee@bmsit.in', 'ieeespsbmsit@gmail.com'],
    phones: ['73892 96975 -Smriti (Vice Chair) ', '86189 78745 -Chinmay Bhat (Treasurer)'],
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://i.imgur.com/kXd5V5O.png" 
                alt="SPS Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">IEEE SPS BMSIT&M</span>
            </motion.div>
            <p className="text-gray-400">
              Advancing signal processing research and applications worldwide.
            </p>
            <motion.div 
              className="flex items-start space-x-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
              <span className="text-gray-400">BMS Institute Of Technology & Management, Bengaluru</span>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.emails.map((email, index) => (
                <motion.div 
                  key={email}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {email}
                  </a>
                </motion.div>
              ))}
              
              {contactInfo.phones.map((phone, index) => (
                <motion.div 
                  key={phone}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ x: 5, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links and Join Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-gray-800 ${social.hoverColor} transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Join Us</h3>
              <motion.a
                href="https://bmsit-ieee.github.io/sps/Membership_Drive/front.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Member
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} IEEE Signal Processing Society BMS Institute of Technology & Management. All rights reserved.Use of this website signifies your agreement to the IEEE Terms and Conditions.IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
        </motion.div>
      </div>

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
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
    </footer>
  );
};

export default Footer;