import { Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center" id="home">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold leading-none sm:text-6xl"
            >
              Hi, I'm{" "}
              <span className="dark:text-violet-600">
                <Typewriter
                  words={["Mohammad Ridwanur Rahman"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 mb-8 text-lg sm:mb-12 dark:text-gray-300"
            >
              Fullstack Developer passionate about building modern web
              applications with clean, efficient code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            >
              <Link
                to="https://drive.google.com/file/d/1ozRjj0oRxLmOl1HluJxyLoKZCnyvvEHo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg cursor-pointer flex items-center font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-700 transition-colors"
              >
                Download CV <Download className="w-6 h-6 ml-2" />
              </Link>
              <a
                href="#projects"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center lg:justify-start mt-8 space-x-4"
            >
              <Link
                to="https://github.com/rridwan27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                to="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            <img
              src="/me.png"
              alt="Mohammad Ridwanur Rahman"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full border-4 dark:border-violet-600"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
