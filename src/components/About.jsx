import React from "react";
import {
  FaGithub,
  FaMailBulk,
  FaLinkedin,
  // FaDribbble,
} from "react-icons/fa";
import { motion } from "framer-motion";
import resume from "../assets/Shruti_Soni_FrontEnd_Developer_Resume.pdf";
import shape from "../assets/shape.png";

const About = () => {
  return (
    <section
      className="w-full min-h-screen bg-[#212322] text-[#EEE6D6] flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-16 gap-12"
      id="about"
    >
      {/* Left Section */}
      <motion.div
        className="relative w-full md:w-1/2 flex flex-col justify-start items-start space-y-10"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Stripes Image */}
        <div className="absolute top-0 left-[-80px] w-[50%] h-[300px] z-0 opacity-20 pointer-events-none">
          <img
            src={shape}
            alt="Stripes background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-xl uppercase text-orange-500 mb-2 font-heading">
            About
          </p>
          <h2 className="abt-head text-4xl md:text-[5.2rem] font-bold leading-tight mb-8">
            Passionate <br /> Frontend Developer
          </h2>

          {/* Resume Button */}
          <a
            href={resume}
            target="_blank"
            download
            className="inline-block text-lg md:text-xl border border-[#EEE6D6] px-8 py-4 rounded hover:bg-orange-500 hover:text-[#EEE6D6] transition mb-8"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex space-x-5 text-xl">
            <a
              href="https://www.linkedin.com/in/shruti-soni-12d081209/"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shrutisoni08"
              className="hover:text-orange-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:shruti08soni@gmail.com"
              className="hover:text-orange-400 transition"
            >
              <FaMailBulk />
            </a>
            {/* <a href="#" className="hover:text-orange-400 transition">
              <FaDribbble />
            </a> */}
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="para-div w-full md:w-1/2 flex flex-col justify-start text-base md:text-[1.5em] leading-relaxed gap-15 pr-2 md:pl-10"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="para line-height-[1.5]">
          I’m a passionate Frontend Developer with over 2 years of experience in
          building interactive, responsive, and performance-driven web
          applications. I specialize in crafting intuitive user experiences
          using HTML5, CSS3, Tailwind CSS, JavaScript, and ReactJS. With a keen
          eye for detail and design, I transform UI/UX ideas into clean,
          efficient, and scalable code.
        </p>

        <p className="para line-height-[1.5]">
          I’ve worked on impactful projects like <strong>Medibot</strong>, an
          AI-powered healthcare assistant, and{" "}
          <strong>MediLife Healthcare</strong>, a patient-focused hospital
          management solution. My role involved implementing pixel-perfect
          interfaces from Figma, integrating APIs and payment gateways, managing
          state with React Context API, and optimizing performance using modern
          React workflows.
        </p>

        <p className="para line-height-[1.5]">
          Currently, I’m exploring opportunities that challenge me to grow as a
          developer while contributing to meaningful projects. I thrive in
          collaborative environments, enjoy learning new tools and frameworks,
          and am always curious about the latest trends in frontend development
          and design systems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
