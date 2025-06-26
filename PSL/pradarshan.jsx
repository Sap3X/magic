import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFlask, FaProjectDiagram, FaChalkboardTeacher, FaRocket, FaUsers, FaLightbulb, FaMedal, FaChartLine } from 'react-icons/fa';
import im1 from "./assets/pradarshan.jpg"

export default function Pradarshan() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeStage, ] = useState(null);

  const features = [
    { text: "Hands-on Science Activities", icon: <FaFlask className="w-6 h-6 text-[#ffdd15] glow-icon" /> },
    { text: "Project-based Learning", icon: <FaProjectDiagram className="w-6 h-6 text-[#ffdd15] glow-icon" /> },
    { text: "Mentorship from Experts", icon: <FaChalkboardTeacher className="w-6 h-6 text-[#ffdd15] glow-icon" /> },
    { text: "Showcase Opportunities", icon: <FaRocket className="w-6 h-6 text-[#ffdd15] glow-icon" /> },
    { text: "Collaborative Environment", icon: <FaUsers className="w-6 h-6 text-[#ffdd15] glow-icon" /> },
  ];

  const progressionStages = [
    {
      label: "L1",
      title: "Idea to Project",
      icon: <FaLightbulb className="w-6 h-6 text-green-600 glow-icon" />,
      level:"1",
      subtitle: "Explore Curiosity",
      color: "green",
      details: ["Basic project conceptualization", "Introduction to scientific method", "School-level exhibitions"],
      bg: "bg-green-100",
      border: "border-green-300",
      text: "text-green-800"
    },
    {
      label: "L2",
      title: "Competition Ready",
      icon: <FaMedal className="w-6 h-6 text-[#ffdd15] glow-icon" />,
      level:"2",
      subtitle: "Sharpen Skills",
      color: "yellow",
      details: ["Advanced prototyping", "Regional competition preparation", "Technical documentation skills"],
      bg: "bg-[#fff8cc]",
      border: "border-[#ffdd15]",
      text: "text-yellow-800"
    },
    {
      label: "L3",
      title: "National Platform",
      icon: <FaChartLine className="w-6 h-6 text-red-600 glow-icon" />,
      level:"3",
      subtitle: "Lead & Inspire",
      color: "red",
      details: ["National-level competitions", "Research paper development", "Mentorship opportunities"],
      bg: "bg-red-100",
      border: "border-red-300",
      text: "text-red-800"
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 bg-[#fff8dc] m-9 rounded-3xl max-w-6xl mx-auto  relative">
      <style>{`.glow-icon { filter: drop-shadow(0 0 8px rgba(255, 221, 21, 0.7)); }`}</style>
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#ffdd15] mb-4">PRADARSHAN</h1>
        <p className="text-sm text-yellow-800 font-medium"> Self-sustained, portable tinkering lab</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#fff8cc] border border-[#ffdd15] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-800 text-center mb-6">Key Highlights</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 ${hoveredFeature === index ? 'bg-yellow-200 scale-105' : 'bg-[#fff8cc] hover:bg-yellow-200'}`}
              >
                <div className="mb-3">{feature.icon}</div>
                <p className="text-sm font-medium text-yellow-900 max-w-[140px]">{feature.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-[#fff8cc] border border-[#ffdd15] rounded-xl p-6 shadow-lg flex items-center ">
            <img className='rounded-xl h-96  w-full  items-center ' src={im1} alt=''></img>
          </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-yellow-800 font-bold text-2xl sm:text-3xl mb-10">Learning Journey by Class</h3>
        <div className="flex flex-wrap justify-center items-stretch gap-6">
          {progressionStages.map((stage, i) => (
            <motion.div
              key={i}
              className={`w-full sm:w-64 min-h-[16rem] p-4 ${stage.bg} border ${stage.border} rounded-2xl shadow-lg cursor-pointer`}
            >
              <div className="flex justify-center mb-4">{stage.icon}</div>
              <div className={`text-lg font-bold ${stage.text} mb-1`}>Level {stage.level}</div>
              <div className={`text-xs font-semibold ${stage.text} mb-2`}>{stage.label} - {stage.subtitle}</div>
              <p className="text-sm font-medium text-gray-700 mb-2">{stage.title}</p>

              <AnimatePresence>
                {activeStage === i && (
                  <motion.ul
                    className="text-left text-xs text-gray-600 space-y-1 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
