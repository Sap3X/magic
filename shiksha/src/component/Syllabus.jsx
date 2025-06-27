import React from "react";
import "./Syllabus.css"; // This is custom CSS for animations
import front_section from "../assest/front.webp";

const leftTopics = [
  {
    title: "Everyday Conversations",
    desc: "Practice speaking in real-life scenarios like shopping, commuting, and daily tasks.",
  },
  {
    title: "Basic Greetings",
    desc: "Master simple greetings, polite expressions, and respectful social phrases.",
  },
  {
    title: "Introducing Oneself",
    desc: "Learn to talk about your name, interests, background, and personal goals.",
  },
  {
    title: "Common Vocabulary",
    desc: "Expand your knowledge of essential words for family, colors, numbers, and objects.",
  },
  {
    title: "Listening Practice",
    desc: "Train your ears with native audio clips and improve comprehension accuracy.",
  },
];

const rightTopics = [
  {
    title: "Role Play Dialogues",
    desc: "Practice realistic dialogues in interviews, restaurants, and real-life English settings.",
  },
  {
    title: "Pronunciation Skills",
    desc: "Learn correct pronunciation with emphasis on sounds, syllables, and stress patterns.",
  },
  {
    title: "Forming Sentences",
    desc: "Construct clear and grammatically correct sentences in both formal and casual contexts.",
  },
  {
    title: "Asking Questions",
    desc: "Learn to ask open-ended and yes/no questions naturally in conversation.",
  },
  {
    title: "Describing People & Places",
    desc: "Use descriptive language to talk about appearance, personality, and environment.",
  },
];

const TopicBox = ({ title, desc, left }) => (
  <div className="relative group hover:z-50 hover:scale-[1.05] hover:shadow-xl transition duration-300">
    <div
      className="cursor-pointer px-4 py-2 rounded-lg shadow-md text-white text-sm font-semibold text-center 
      bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 
      group-hover:ring-4 group-hover:ring-blue-200 group-hover:shadow-2xl transition-all duration-300"
    >
      {title}
    </div>
    <div
      className={`absolute z-50 left-1/2 -translate-x-1/2 top-full mt-3 w-64 p-4 
      ${
        left
          ? "hover-animated-gradient"
          : "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"
      } 
      text-white text-sm italic 
      rounded-3xl rounded-tr-[1.5rem] rounded-bl-[2rem] shadow-2xl ring-2 ring-white/20 
      opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 
      transition-all duration-500 text-center`}
    >
      {desc}
    </div>
  </div>
);

const Syllabus = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-6 w-284 pt-16 pb-16 max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          SYLLABUS AND LEARNING
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10 overflow-visible">
          {/* Left Topics */}
          <div className="space-y-4 relative z-10">
            {leftTopics.map((topic, index) => (
              <TopicBox
                key={index}
                title={topic.title}
                desc={topic.desc}
                left
              />
            ))}
          </div>

          {/* Center Robot */}
          <div
            id="robot-img"
            class="flex justify-center items-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={front_section}
              alt="Shiksha Robot"
              class="w-64 h-auto max-h-80 object-contain animate-[dance_5s_infinite]"
            />
          </div>

          {/* Right Topics */}
          <div className="space-y-4 relative z-10">
            {rightTopics.map((topic, index) => (
              <TopicBox key={index} title={topic.title} desc={topic.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
