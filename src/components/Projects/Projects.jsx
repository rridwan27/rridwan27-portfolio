import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Socially",
    description:
      "Socially is a modern full-stack social networking application built with Next.js 14, React 18, and Tailwind CSS. It allows users to create an account, post content, comment on others' posts, and follow/unfollow users to stay connected. The app delivers a seamless and responsive user experience with both light and dark mode support...",
    image: "/socially.png",
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Clerk",
      "TypeScript",
    ],
    github: "https://github.com/rridwan27/socially.git",
    live: "https://socially-umber.vercel.app/",
  },
  {
    id: 2,
    title: "Spice Spoon",
    description:
      "SpiceSpoon is a visually engaging recipe management platform that lets users explore, share, and manage their favorite dishes...",
    image: "/spice.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Firebase"],
    github: "https://github.com/rridwan27/Recipe-Book-Frontend.git",
    live: "https://r1-assignment-ten.netlify.app/",
  },
  {
    id: 3,
    title: "One Blog",
    description:
      "OneBlog is a full-stack blog application where users can register or sign in via email or Google, create and publish blog posts...",
    image: "/blog.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/rridwan27/one-blog.git",
    live: "https://one-blog-tr95.onrender.com/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section className="text-white py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.h2
          className="text-4xl font-bold dark:text-white text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-violet-600 dark:text-violet-400 inline-block hover:scale-110 transition-transform duration-300">
            My
          </span>{" "}
          <span className="inline-block hover:scale-110 transition-transform duration-300 delay-100">
            Projects
          </span>
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="grid md:grid-cols-2 gap-8 items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden p-4 md:p-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Left: Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Right: Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-violet-600">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 bg-white/10 border border-white/20 rounded-full text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 transition text-white rounded-full"
                >
                  <ExternalLink className="w-4 h-4" /> Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 transition text-white rounded-full"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
