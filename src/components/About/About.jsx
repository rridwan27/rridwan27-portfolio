import { BookOpen, Code, Cpu, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About <span className="dark:text-violet-600">Me</span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto text-center dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Fullstack Developer & EEE Student
          </h3>

          <p className="mb-6 text-lg leading-relaxed">
            I'm Ridwan — an undergraduate student pursuing my{" "}
            <span className="font-medium dark:text-violet-400">
              BSc in Electrical & Electronic Engineering (EEE)
            </span>{" "}
            at North South University. I'm passionate about crafting clean,
            modern, and performant web apps using the{" "}
            <span className="font-medium dark:text-violet-400">MERN stack</span>
            , with a special interest in creating smooth UI interactions using{" "}
            <span className="font-medium dark:text-violet-400">GSAP</span>.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            {[
              {
                icon: <Code className="w-5 h-5 mt-1 dark:text-violet-400" />,
                title: "Web Development",
                desc: "MERN Stack, GSAP, Tailwind CSS",
              },
              {
                icon: <Cpu className="w-5 h-5 mt-1 dark:text-violet-400" />,
                title: "Side Interests",
                desc: "GSAP Animations, UI/UX, REST APIs",
              },
              {
                icon: (
                  <GraduationCap className="w-5 h-5 mt-1 dark:text-violet-400" />
                ),
                title: "Education",
                desc: "BSc in EEE, North South University",
              },
              {
                icon: (
                  <BookOpen className="w-5 h-5 mt-1 dark:text-violet-400" />
                ),
                title: "Beyond Tech",
                desc: "Movie 🎬, Music 🎧",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={idx + 2}
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-base leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={6}
          >
            I enjoy solving problems across the stack — from designing UI to
            building scalable backend services. I’m always exploring new
            technologies and tools to improve my craft and stay ahead in the
            game.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
