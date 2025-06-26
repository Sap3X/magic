import { motion } from "framer-motion";
import { useState } from "react";
import im1 from "./assets/anu.jpg"

const features = [
  {
    icon: "💡",
    text: "Self-sustained and used in staff room, science or ATL lab ",
    detail: "Complete ecosystem for independent learning",
  },
  {
    icon: "🛠",
    text: "5 hands-on activities per class per year",
    detail: "Practical learning through real projects",
  },
  {
    icon: "🎓",
    text: "Guided tutorials for easy learning",
    detail: "Step-by-step instruction methodology",
  },
  {
    icon: "🤖",
    text: "Age-appropriate kits focused on Tech & Engineering",
    detail: "Curriculum-aligned STEM education",
  },
];

const levelData = [
  {
    class: "8th",
    name: "ENDURE",
    level: 1,
    color: "from-cyan-500 to-teal-500",
    bgColor: "from-cyan-50 to-teal-50",
    textColor: "text-cyan-700",
  },
  {
    class: "9th",
    name: "EVOLVE",
    level: 2,
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-50 to-green-50",
    textColor: "text-emerald-700",
  },
  {
    class: "10th",
    name: "EXECUTE",
    level: 3,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    textColor: "text-purple-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AnubhavSection() {
  const [showMore] = useState(false);

  return (
    <section className="max-w-6xl mx-auto  relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden mt-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="absolute bottom-4 -right-0 w-96 h-96 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full blur-2xl opacity-10 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-30"
              style={{
                left,
                top,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Main Content Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* Glass Morphism Container */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="relative p-4 sm:p-8 lg:p-12">
              {/* Header Section */}
              <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent mb-4">
                    ANUBHAV
                  </h2>
                  <motion.div
                    className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 128 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                  Revolutionizing STEM education through hands-on learning experiences
                </p>
                <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                  For Students, stored in the PSL Trolley
                </p>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1   gap-8 lg:gap-12 ">
                {/* Left Column - Product Image */}
                <motion.div variants={itemVariants} className="flex flex-col items-center ">
                  <div className="relative group w-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-orange-200/50 flex flex-col items-center">
                      <div className="relative rounded-xl overflow-hidden w-full">
                        <img
                          src={im1}
                          alt="Anubhav Kit"
                          className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <motion.div
                          className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="mt-4 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-bold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full max-w-xs">
                        Learn More
                      </button>
                  </div>
                </motion.div>

                {/* Center Column - Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                <motion.div variants={itemVariants} className="flex flex-col justify-center md:pr-3">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
                      Key Features
                    </h3>
                    {features.map((feat, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-white/40 hover:bg-white/80 transition-all duration-300 group cursor-pointer flex items-center gap-4"
                      >
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 border border-orange-300"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <span className="text-lg">{feat.icon}</span>
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium text-sm sm:text-base">
                            {feat.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                

                {/* Right Column - Class Levels */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col md:justify-between justify-center"
                >
                  <div className="space-y-4 flex flex-col h-full md:justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
                      Class Levels
                    </h3>
                    <div className="flex flex-col gap-4 md:justify-between h-full">
                      {levelData.map((level, i) => (
                        <motion.div
                          key={i}
                          className={`relative bg-gradient-to-br ${level.bgColor} rounded-xl p-4 sm:p-5 shadow-lg border border-white/60 group transition-all duration-300 flex items-center gap-4`}
                        >
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white font-bold text-lg">
                              {level.level}
                            </span>
                          </motion.div>
                          <div className="flex-1">
                            <div className="text-base sm:text-lg font-semibold text-gray-800">
                              {level.class} Class
                            </div>
                            <div
                              className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}
                            >
                              {level.name}
                            </div>
                            <div
                              className={`text-xs sm:text-sm ${level.textColor} font-medium`}
                            >
                              Level-{level.level}
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                </div>
              </div>

              {/* Additional Content (Expandable) */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: showMore ? 1 : 0,
                  height: showMore ? "auto" : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-12 pt-8 border-t border-white/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        🔬 Laboratory Setup
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Seamlessly integrates with existing laboratory
                        infrastructure, requiring minimal setup time and maximum
                        learning impact.
                      </p>
                    </motion.div>
                    <motion.div
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        📚 Curriculum Aligned
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Perfectly aligned with national curriculum standards,
                        ensuring comprehensive coverage of essential STEM
                        concepts.
                      </p>
                    </motion.div>
                    <motion.div
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        🎯 Assessment Ready
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Built-in assessment tools and progress tracking to
                        monitor student learning and skill development
                        effectively.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-300/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-300/20 to-transparent rounded-tr-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
