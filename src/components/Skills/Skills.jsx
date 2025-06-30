import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiNodedotjs,
  SiReactrouter,
  SiNodemon,
  SiJavascript,
} from "react-icons/si";

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  React: <FaReact className="text-sky-500" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  MUI: <SiMui className="text-blue-400" />,
  Redux: <SiRedux className="text-purple-600" />,
  "Context API": <FaReact className="text-gray-500" />,
  "React Router": <SiReactrouter className="text-red-500" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  "Express.js": <SiExpress className="text-zinc-700 dark:text-white" />,
  "Socket.io": <SiSocketdotio className="text-gray-400" />,
  JWT: <SiJsonwebtokens className="text-black dark:text-white" />,
  Nodemon: <SiNodemon className="text-lime-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-700" />,
  Prisma: <SiPrisma className="text-indigo-500" />,
  Supabase: <SiSupabase className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
};

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "MUI",
  ],
  "State Management": ["Redux", "Context API", "React Router"],
  "Backend & Auth": ["Node.js", "Express.js", "Socket.io", "JWT", "Nodemon"],
  "Database & Tools": [
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "Firebase",
  ],
};

// Simple Swiper implementation without external library
const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = Object.keys(skills);
  const totalSlides = categories.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section
      id="skills"
      className="py-16 min-h-10 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold mb-4 dark:text-white transform hover:scale-105 transition-transform duration-300">
              Technical{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent ">
                Skills
              </span>
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {categories.map((category, categoryIndex) => (
                <div key={category} className="w-full flex-shrink-0 px-8 py-12">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <div className="w-3 h-8 bg-gradient-to-b from-violet-400 to-purple-500 rounded-full"></div>
                      <h3 className="text-4xl font-bold text-white">
                        {category}
                      </h3>
                      <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-500 mx-auto rounded-full opacity-60"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
                    {skills[category].map((tech, techIndex) => (
                      <div
                        key={tech}
                        className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/50 shadow-xl hover:shadow-2xl hover:shadow-violet-500/25 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                        style={{
                          animationDelay: `${techIndex * 100}ms`,
                        }}
                        onMouseEnter={() => setHoveredSkill(tech)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                        {/* Icon */}
                        <div className="relative z-10 text-5xl transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                          {skillIcons[tech]}
                        </div>

                        {/* Skill Name */}
                        <span className="relative z-10 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                          {tech}
                        </span>

                        {/* Animated Dots */}
                        {hoveredSkill === tech && (
                          <>
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-violet-400 rounded-full animate-ping"></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75"></div>
                            <div className="absolute top-1/2 -left-3 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
                          </>
                        )}

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-2xl overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-violet-400 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-violet-400 to-purple-500 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Category Labels */}
          <div className="flex justify-center mt-6 gap-8 flex-wrap">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
