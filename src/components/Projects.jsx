import React from "react";
import { projects } from "./Data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const techColors = {
  React: "text-blue-400",
  JavaScript: "text-yellow-400",
  Tailwind: "text-cyan-400",
  HTML: "text-orange-500",
  CSS: "text-blue-600",
  Bootstrap: "text-purple-400",
  WordPress: "text-indigo-400",
  Elementor: "text-pink-400",
  FramerMotion: "text-yellow-400",
};

const Projects = () => {
  return (
    <div id="projects" className="bg-[#212622] py-16 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#FEF6E6] text-lg mb-2 font-heading tracking-wider"
        >
          Projects
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-300 mb-8 font-para"
        >
          A few projects I’ve built recently
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projects?.map((proj, index) => (
            <motion.div
              key={proj.id || index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 + index * 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[450px]"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-orange-700 text-xl font-semibold mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm font-semibold ${techColors[tech] || "text-gray-400"}`}
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-700 text-white px-3 py-1 rounded border border-amber-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 text-sm flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent text-orange-700 border border-orange-700 px-3 py-1 rounded hover:bg-orange-700 hover:text-white hover:border-amber-50 text-sm flex items-center gap-1"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;