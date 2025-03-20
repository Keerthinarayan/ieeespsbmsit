<div className="relative" ref={containerRef}>
  {/* Hero Section with Interactive Background */}
  <div className="relative h-screen flex items-center justify-center overflow-hidden">
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        scale: springScale,
        opacity: springOpacity,
      }}
    >
      <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-[2px]" />
      </div>
    </motion.div>

    {/* SVG Animation */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5 flex items-center justify-center">
      <svg
        className="w-[200vw] md:w-[250vw] h-full absolute"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Mobile wave pattern */}
        <path
          d=""
          className="animate-flow thread-primary md:hidden"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d=""
          className="animate-flow thread-secondary md:hidden"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.4"
          fill="none"
        />

        {/* Desktop wave pattern */}
        <path
          d="M -100,50 C -80,20 -70,80 -60,40 C -50,60 -40,10 -30,50 C -20,30 -10,70 0,45 C 10,80 20,20 30,50 C 40,20 50,80 60,40 C 70,60 80,10 90,50 C 100,30 110,70 120,45 C 130,80 140,20 150,50 C 160,20 170,80 180,40 C 190,60 200,10 210,50"
          className="animate-flow thread-primary hidden md:block"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M -100,40 C -80,70 -70,20 -60,60 C -50,30 -40,80 -30,40 C -20,60 -10,20 0,50 C 10,30 20,70 30,45 C 40,70 50,20 60,60 C 70,30 80,80 90,40 C 100,60 110,20 120,50 C 130,30 140,70 150,45 C 160,70 170,20 180,60 C 190,30 200,80 210,40"
          className="animate-flow thread-secondary hidden md:block"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.15"
          fill="none"
        />
      </svg>
    </div>

    {/* Main Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-2 mt-4"
      >
        <div className="relative w-40 h-40 mx-auto">
          <img 
            src="https://i.imgur.com/DV2taB1.png" 
            alt="SPS Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* SVG Animation */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* First SVG Animation */}
        <svg
          className="w-full h-[120px]"
          viewBox="-250 0 2000 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 71.313 "
            className="animate-draw"
            stroke="white"
            strokeWidth="4"
            fill="none"
            transform="scale(1.2)"
          />
        </svg>

        {/* Second SVG Animation */}
        <svg
          className="w-full h-[80px]"
          viewBox="140 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 87.69 36.08 L 100.73 2.88 L "
            className="animate-draw"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg md:text-2xl mb-12 md:mb-12 text-blue-200"
      >
        Advancing technology for humanity
      </motion.p>

      <motion.a
        href="https://bmsit-ieee.github.io/sps/Membership_Drive/front.html"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold inline-block relative overflow-hidden group"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 flex items-center text-sm md:text-base">
          Join Us Today
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </motion.a>
    </div>
  </div>

  {/* Features Section */}
  <div ref={ref} className="py-12 md:py-20 bg-white dark:bg-dark-bg transition-colors duration-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why Join IEEE SPS?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Be part of a global community advancing the future of signal processing
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            icon: <Signal className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />,
            title: 'Innovation',
            description:
              'Access cutting-edge research and stay ahead in signal processing technology',
          },
          {
            icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />,
            title: 'Community',
            description:
              'Connect with leading experts and peers in the signal processing field',
          },
          {
            icon: <Target className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />,
            title: 'Growth',
            description:
              'Develop your skills through workshops, conferences, and publications',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-xl shadow-lg transform transition-all duration-300 dark:shadow-blue-900/5"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>
