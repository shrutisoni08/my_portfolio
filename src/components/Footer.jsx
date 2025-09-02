import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#212622] text-white px-6 py-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Shruti</h2>
          <p className="text-sm text-gray-400 mt-2">
            Building digital experiences with modern web technologies.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-400">
            Important Links
          </h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="#hero" className="hover:text-orange-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-400">
            Connect with me
          </h3>
          <div className="flex gap-4 mt-2">
            {/* GitHub */}
            <a
              href="https://github.com/shrutisoni08"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub
                size={22}
                className="hover:text-orange-400 transition"
              />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shruti-soni-12d081209/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin
                size={22}
                className="hover:text-orange-400 transition"
              />
            </a>
            {/* Gmail */}
            <a href="mailto:youremail@example.com" target="_blank" rel="noreferrer" title="Email">
              <FaEnvelope
                size={22}
                className="hover:text-orange-400 transition"
              />
            </a>
            {/* CodePen */}
            <a
              href="https://codepen.io/Shruti-Soni"
              target="_blank"
              rel="noreferrer"
              title="CodePen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 138 138"
                fill="currentColor"
                className="hover:text-orange-400 transition"
              >
                <path d="M69 0C30.9 0 0 30.9 0 69s30.9 69 69 69 69-30.9 69-69S107.1 0 69 0zm40.3 80.3c0 .6-.3 1.2-.8 1.5l-38.4 25.6c-.3.2-.6.3-1 .3-.3 0-.7-.1-1-.3L29.7 81.8c-.5-.3-.8-.9-.8-1.5V58.2c0-.6.3-1.2.8-1.5l38.4-25.6c.3-.2.6-.3 1-.3.3 0 .7.1 1 .3l38.4 25.6c.5.3.8.9.8 1.5v22.1zm-41.3 2.4V96l-27.5-18.3v-6.7l27.5 11.7zm2 0l27.5-11.7v6.7L70 96v-13.3zm29.5-16.1l-13.9 6-15.6-6.6v-14.4l15.6-10.4 13.9 9v16.4zm-31.5-24.5v14.4l-15.6 6.6-13.9-6.1v-16.3l13.9-9 15.6 10.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Shruti. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
