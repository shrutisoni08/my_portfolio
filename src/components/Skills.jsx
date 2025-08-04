import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Skill Icons
import HTML from "../assets/Skills/HTML_Logo.png";
import CSS from "../assets/Skills/CSS.png";
import JavaScript from "../assets/Skills/javaScript.png";
import ReactIcon from "../assets/Skills/react.png";
import NodeJS from "../assets/Skills/node.png";
import WordPress from "../assets/Skills/wordpress.png";
import GitHub from "../assets/Skills/github.png";
import Bootstrap from "../assets/Skills/bootstrap.png";
import TailwindCSS from "../assets/Skills/tailwind.png";
import Git from "../assets/Skills/git.png";
import Figma from "../assets/Skills/figma.png";
import Canva from "../assets/Skills/canva.png";
import MaterialUI from "../assets/Skills/material-ui.png";
import GPT from "../assets/Skills/GPT-4.png";
import Shopify from "../assets/Skills/shopify.png";
import Lovable from "../assets/Skills/lovable.png";
import Graphy from "../assets/Skills/graphy.png";
import GithubCopilot from "../assets/Skills/github-copilot.png";
import GoogleAds from "../assets/Skills/google-ads.png";
import V0 from "../assets/Skills/v0.png";

const skills = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeJS },
  { name: "WordPress", icon: WordPress },
  { name: "Shopify", icon: Shopify },
  { name: "Graphy", icon: Graphy },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "Material-UI", icon: MaterialUI },
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "GitHub Copilot", icon: GithubCopilot },
  { name: "Figma", icon: Figma },
  { name: "Canva", icon: Canva },
  { name: "GPT-4", icon: GPT },
  { name: "Lovable", icon: Lovable },
  { name: "Google Ads", icon: GoogleAds },
  { name: "V0", icon: V0 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen px-6 py-16 bg-[#FFF6E6] flex flex-col gap-12"
    >
      {/* Heading & Intro */}
      <div className="text-left md:text-left ml-9">
        <p className="text-xl font-heading md:text-1xl uppercase font-semibold text-orange-500 mb-4 tracking-wider">
          Expertise
        </p>
        <p className="text-gray-700 text-lg font-para">
          Technologies and tools I've worked with throughout my journey.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-10 shadow-md overflow-hidden animate-gradient custom-gradient"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="skills-container flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-md font-skill text-orange-700 text-center">
                {skill.name}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <style jsx>{`
 .custom-gradient {
  background-image: linear-gradient(
    270deg,
    #fff6e6,
    #ffeacc,
    #ffd8a8,
    #ffae6d,
    #ffeacc,
    #fff6e6
  );
  background-size: 400% 400%;
  animation: gradientMove 8s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
}
      `}</style>
    </motion.section>
  );
};

export default Skills;
