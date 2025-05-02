import React from 'react';
import { ChevronDown, Users, Clock, ExternalLink, Calendar, Lightbulb, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Spectrum = () => {
  const projects = [
    {
      title: "Signal Processing Lab",
      status: "Ongoing",
      teamSize: "8 members",
      head: "Dr. Saneesh",
      description: "Advanced research in digital signal processing algorithms",
      formLink: "https://forms.gle/YourFormLink1",
      lastDate: "15/05/2025"
    },
    {
      title: "Image Recognition AI",
      status: "Ongoing",
      teamSize: "10 members",
      head: "Sourabh",
      description: "AI-powered image recognition using signal processing",
      formLink: "https://forms.gle/YourFormLink3",
      lastDate: "20/8/2025"
    },
    {
      title: "Audio Processing System",
      status: "Completed",
      teamSize: "6 members",
      head: "Vikas",
      description: "Development of real-time audio processing systems",
      formLink: "https://forms.gle/YourFormLink2",
      lastDate: "1 BCE"
    }
    
  ];

  const suggestionFormLink = "https://forms.gle/YourSuggestionFormLink";

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* First Section with Stars and Title */}
      <div className="h-screen relative flex flex-col items-center justify-center px-4">
        {/* Stars Background - Reduced number on mobile */}
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

      {/* Projects Section - With space theme */}
      <div className="relative py-12 sm:py-20 px-4 overflow-hidden">
        {/* Space-themed background */}
        <div className="absolute inset-0 bg-black">
          {/* Stars in the background - Reduced number on mobile */}
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
          
          {/* Distant nebula effect - Smaller on mobile */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                    project.status === "Ongoing" 
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{project.description}</p>

                <div className="space-y-2 mb-4 sm:mb-6">
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

                <motion.a
                  href={project.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
                    project.status === "Over" 
                      ? "bg-gray-600 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
                  }`}
                  whileHover={{ scale: project.status === "Over" ? 1 : 1.05 }}
                  whileTap={{ scale: project.status === "Over" ? 1 : 0.95 }}
                >
                  <span>{project.status === "Over" ? "Closed" : "Apply Now"}</span>
                  {project.status !== "Over" && <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />}
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Horizontal Suggestion Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all relative overflow-hidden"
          >
            {/* Sparkle decoration - Smaller on mobile */}
            <Sparkles className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 text-purple-400/20" />
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-6 md:mb-0">
                <div className="bg-purple-600/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Got an Idea?</h3>
                  <p className="text-xs sm:text-base text-purple-200">
                    Suggest a new project for our team to consider
                  </p>
                </div>
              </div>
              
              <motion.a
                href={suggestionFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all group text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-medium">Submit Your Suggestion</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
