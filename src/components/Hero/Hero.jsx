import { Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-7xl px-6 py-12" id="home">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Hi, I'm{" "}
              <span className="text-violet-600">
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

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 mb-8 text-lg text-gray-300"
            >
              Fullstack Developer passionate about building modern web
              applications with clean, efficient code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
            >
              <Link
                to="https://drive.google.com/file/d/1AlhEKASUwjsIkxgnTR4xTK8fgM1OOxZO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 transition-colors flex items-center justify-center"
              >
                Download Resume <Download className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="#projects"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-500 hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex mt-8 space-x-6"
            >
              <Link
                to="https://github.com/rridwan27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                to="https://linkedin.com/in/rridwan27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src="/me.png"
              alt="Mohammad Ridwanur Rahman"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-violet-600 object-contain"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
