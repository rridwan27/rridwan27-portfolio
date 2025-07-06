import { GraduationCap, BookOpen, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("education");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="education"
      className="py-16 overflow-hidden relative bg-black text-gray-200"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold">
            <span className="text-violet-600 inline-block hover:scale-110 transition-transform duration-300">
              Academic
            </span>{" "}
            <span className="inline-block hover:scale-110 transition-transform duration-300 delay-100">
              Journey
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gray-700 transform -translate-x-1/2">
            <div
              className={`w-full bg-gradient-to-b from-violet-600 to-purple-600 transition-all duration-2000 ease-out ${
                isVisible ? "h-full" : "h-0"
              }`}
            />
          </div>

          {/* Timeline Item */}
          <div
            className={`relative pl-12 md:pl-0 md:flex justify-center mb-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10 md:translate-x-0 md:translate-y-10"
            }`}
          >
            {/* Left Content */}
            <div className="md:w-5/12 md:pr-8 md:text-right">
              <h3 className="text-xl font-bold group">
                <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                  North South University
                </span>
              </h3>
              <p className="animate-pulse">Spring 2024 – Present</p>
            </div>

            {/* Dot on Timeline */}
            <div
              className={`absolute left-2 md:left-1/2 top-1 w-4 h-4 rounded-full bg-violet-600 border-4 border-gray-900 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-violet-600 animate-ping opacity-75"></div>
            </div>

            {/* Right Content */}
            <div
              className={`md:w-5/12 mt-4 md:mt-0 pl-0 md:pl-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10 md:-translate-x-0 md:translate-y-10"
              }`}
            >
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 group relative">
                <h4 className="font-semibold text-lg flex items-center gap-2 text-white">
                  <GraduationCap className="w-5 h-5 text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:text-violet-400 transition-colors duration-300">
                    BSc in Electrical & Electronic Engineering
                  </span>
                </h4>

                <div className="mt-4 space-y-4">
                  {/* Key Focus */}
                  <div className="flex items-start gap-3 group/item hover:bg-violet-900/20 p-2 -m-2 rounded-lg transition-all duration-300">
                    <BookOpen className="w-5 h-5 mt-1 text-violet-400 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <h5 className="font-medium text-gray-200 group-hover/item:text-violet-300 transition-colors duration-300">
                        Key Focus Areas
                      </h5>
                      <p className="text-gray-400 text-sm">
                        Embedded Systems, Circuit Design, Signal Processing
                      </p>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="flex items-start gap-3 group/item hover:bg-violet-900/20 p-2 -m-2 rounded-lg transition-all duration-300">
                    <Users className="w-5 h-5 mt-1 text-violet-400 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <h5 className="font-medium text-gray-200 group-hover/item:text-violet-300 transition-colors duration-300">
                        Activities
                      </h5>
                      <p className="text-gray-400 text-sm">
                        Active Member of IEEE NSU Student Branch
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div
          className={`text-center mt-6 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-gray-400 italic relative">
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-violet-600 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-700 rounded-full animate-pulse opacity-60 delay-500"></div>
          </p>
        </div>

        {/* Floating Background Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-violet-900/20 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-900/20 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Education;
