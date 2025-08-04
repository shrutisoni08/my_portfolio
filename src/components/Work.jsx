/* eslint-disable no-unused-vars */
// src/components/Work.jsx
import React from "react";
import { work } from "./Data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20" id="work">
      <h2 className="text-xl font-bold text-left mb-2 text-orange-700 font-heading tracking-wider">
        Work
      </h2>
      <p className="text-left text-gray-600 mb-12 font-para">
        A brief to look at some of the projects I’ve worked on
      </p>

      <div className="space-y-24 overflow-hidden">
        {work.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`work-container flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-orange-700 text-xl font-semibold mb-2">
                {work.title}
              </h3>
              <p className="font-para">
                <strong className="text-orange-800">Role:</strong> {work.role}
              </p>
              <p className="text-gray-700 mb-6 font-para">{work.description}</p>
              <p className="text-gray-600 mb-4 font-para">
                <strong className="text-orange-800">Tech Stack:</strong>{" "}
                {work.techStack}
              </p>
              <div className="flex gap-4">
                <a
                  href={work.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#EA8F0F] hover:bg-orange-500 text-white px-5 py-2 rounded-full transition duration-300"
                >
                  <FaExternalLinkAlt /> Live Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
