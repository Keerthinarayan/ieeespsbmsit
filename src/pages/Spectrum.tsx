import React, { useState } from 'react';
import { ChevronDown, Users, Clock, ExternalLink, Calendar, Lightbulb, Sparkles, X, Mail, Phone, Building, BookOpen, Target, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Spectrum = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Signal Processing Lab",
      status: "Ongoing",
      teamSize: "8 members",
      head: "Dr. Saneesh",
      description: "Advanced research in digital signal processing algorithms",
      lastDate: "15/05/2025",
      detailedInfo: {
        overview: "A cutting-edge research initiative focused on developing and implementing advanced digital signal processing algorithms. This project aims to push the boundaries of signal processing technology.",
        objectives: [
          "Develop novel DSP algorithms for real-time applications",
          "Implement efficient signal processing techniques",
          "Create innovative solutions for industry challenges"
        ],
        requirements: [
          "Strong background in signal processing",
          "Programming skills (Python/MATLAB)",
          "Understanding of DSP concepts",
          "Commitment of 10 hours/week"
        ],
        benefits: [
          "Hands-on research experience",
          "Industry exposure",
          "Publication opportunities",
          "Certificate of completion"
        ],
        timeline: "6 months (May 2025 - October 2025)",
        location: "BMSIT Signal Processing Lab",
        contact: {
          email: "saneesh@bmsit.in",
          phone: "+91 98765 43210",
          office: "DSP Lab, 3rd Floor, ECE Block"
        }
      }
    },
    {
      title: "Image Recognition AI",
      status: "Ongoing",
      teamSize: "10 members",
      head: "Sourabh",
      description: "AI-powered image recognition using signal processing",
      lastDate: "20/8/2025",
      detailedInfo: {
        overview: "An innovative project combining signal processing with artificial intelligence to create advanced image recognition systems. This project explores the intersection of traditional DSP and modern AI techniques.",
        objectives: [
          "Develop AI models for image processing",
          "Implement real-time recognition systems",
          "Create efficient image analysis algorithms"
        ],
        requirements: [
          "Knowledge of machine learning",
          "Python programming skills",
          "Basic understanding of computer vision",
          "Commitment of 12 hours/week"
        ],
        benefits: [
          "AI/ML project experience",
          "Research paper opportunities",
          "Industry networking",
          "Performance-based stipend"
        ],
        timeline: "8 months (August 2025 - March 2026)",
        location: "AI Lab, BMSIT",
        contact: {
          email: "sourabh@bmsit.in",
          phone: "+91 98765 43211",
          office: "AI Lab, 2nd Floor, CSE Block"
        }
      }
    },
    {
      title: "Audio Processing System",
      status: "Completed",
      teamSize: "6 members",
      head: "Vikas",
      description: "Development of real-time audio processing systems",
      lastDate: "1 BCE",
      detailedInfo: {
        overview: "A comprehensive project focused on developing real-time audio processing systems. This project successfully implemented various audio processing algorithms and techniques.",
        objectives: [
          "Implement real-time audio processing",
          "Develop audio enhancement algorithms",
          "Create audio analysis tools"
        ],
        requirements: [
          "Audio processing knowledge",
          "Programming experience",
          "Signal processing basics",
          "10 hours/week commitment"
        ],
        benefits: [
          "Practical DSP experience",
          "Industry connections",
          "Project certification",
          "Skill development"
        ],
        timeline: "Completed (January 2025 - March 2025)",
        location: "Audio Lab, BMSIT",
        contact: {
          email: "vikas@bmsit.in",
          phone: "+91 98765 43212",
          office: "Audio Lab, 1st Floor, ECE Block"
        }
      }
    }
  ];

  const suggestionFormLink = "https://forms.gle/YourSuggestionFormLink";

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* First Section with Stars and Title */}
      <div className="h-screen relative flex flex-col items-center justify-center px-4">
        {/* Stars Background */}
        {[...Array(30)].map((_, i) => (
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

        {/* Title */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 text-center"
          >
            SPS Spectrum
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base sm:text-xl text-blue-200 mb-8 text-center max-w-2xl px-2"
          >
            Explore our innovative signal processing projects
          </motion.p>
        </div>

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
          <span className="text-white/80 text-xs sm:text-sm mb-2">Scroll to explore projects</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="relative py-12 sm:py-20 px-4 overflow-hidden">
        {/* Space-themed background */}
        <div className="absolute inset-0 bg-black">
          {/* Stars in the background */}
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
          
          {/* Distant nebula effects */}
          <div 
            className="absolute blur-2xl sm:blur-3xl opacity-20"
            style={{
              top: '20%',
              right: '10%',
              width: '60%',
              height: '30%',
              background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(0, 0, 0, 0) 70%)',
              animation: 'pulse 15s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute blur-2xl sm:blur-3xl opacity-10"
            style={{
              bottom: '10%',
              left: '5%',
              width: '40%',
              height: '30%',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(79, 70, 229, 0.2) 40%, rgba(0, 0, 0, 0) 70%)',
              animation: 'pulse 20s ease-in-out infinite reverse'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(79, 70, 229, 0.4)",
                  borderColor: "rgba(79, 70, 229, 0.6)",
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-blue-500/20 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-2 sm:mb-4">
                  <h3 className="text-base sm:text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                    project.status === "Ongoing" 
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-xs sm:text-base text-gray-400 mb-2 sm:mb-4">{project.description}</p>

                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-6">
                  <div className="flex items-center text-gray-300">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span className="text-xs sm:text-sm">{project.teamSize}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span className="text-xs sm:text-sm">Head: {project.head}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span className="text-xs sm:text-sm">Last Date: {project.lastDate}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>More Info</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 overflow-y-auto pt-16 sm:pt-0"
                onClick={() => setSelectedProject(null)}
              >
                {/* Close button - fixed position and improved visibility */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="fixed top-4 right-4 text-gray-400 hover:text-white p-2 z-50 bg-gray-800/80 rounded-full shadow-lg"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900 rounded-xl p-4 sm:p-6 w-full max-w-2xl my-4 sm:my-12 mx-2 sm:mx-4 max-h-[85vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  {/* Project title and status */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0">{selectedProject.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                      selectedProject.status === "Ongoing"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>

                  {/* Project overview */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      Overview
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">{selectedProject.detailedInfo.overview}</p>
                  </div>

                  {/* Project objectives */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      Objectives
                    </h3>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                      {selectedProject.detailedInfo.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      Requirements
                    </h3>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                      {selectedProject.detailedInfo.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      Benefits
                    </h3>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                      {selectedProject.detailedInfo.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline and Location */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      <span className="text-white font-semibold text-sm sm:text-base">Timeline:</span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">{selectedProject.detailedInfo.timeline}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                      <span className="text-white font-semibold text-sm sm:text-base">Location:</span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">{selectedProject.detailedInfo.location}</span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-blue-900/20 rounded-lg p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Contact Information</h3>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-400" />
                        <a href={`mailto:${selectedProject.detailedInfo.contact.email}`} className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm break-all">
                          {selectedProject.detailedInfo.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-gray-300 text-xs sm:text-sm">{selectedProject.detailedInfo.contact.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-gray-300 text-xs sm:text-sm">{selectedProject.detailedInfo.contact.office}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Suggestion Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all relative overflow-hidden"
          >
            <Sparkles className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 text-purple-400/20" />
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-3 sm:mb-6 md:mb-0">
                <div className="bg-purple-600/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Lightbulb className="w-5 h-5 sm:w-8 sm:h-8 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Got an Idea?</h3>
                  <p className="text-xs sm:text-base text-purple-200">
                    Suggest a new project for our team to consider
                  </p>
                </div>
              </div>
              
              <motion.a
                href={suggestionFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all group text-xs sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-medium">Submit Your Suggestion</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(30px, -30px) scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: translate(-30px, 30px) scale(1);
            opacity: 0.2;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Spectrum;
