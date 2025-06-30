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

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
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

// ... skillIcons and skills unchanged

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-16 min-h-screen bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Animated Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4 dark:text-white transform hover:scale-105 transition-transform duration-300">
            Technical{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent ">
              Skills
            </span>
          </h2>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, techs], categoryIndex) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div
                ref={ref}
                key={category}
                className={`transform transition-all duration-700 ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6 group">
                  <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full mr-4 transform group-hover:scale-y-110 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-semibold dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent dark:from-violet-800 ml-4 group-hover:from-violet-400 transition-colors duration-300"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {techs.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className={`group relative flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 ${
                        inView ? "opacity-100 animate-fade-in-up" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${techIndex * 50}ms`,
                        animationFillMode: "forwards",
                      }}
                      onMouseEnter={() => setHoveredSkill(tech)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                      {/* Icon */}
                      <div className="relative z-10 text-3xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        {skillIcons[tech]}
                      </div>

                      {/* Skill Name */}
                      <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 text-center">
                        {tech}
                      </span>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                      {hoveredSkill === tech && (
                        <>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-400 rounded-full animate-ping opacity-60"></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
