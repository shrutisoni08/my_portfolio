import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
            <a
              href="https://github.com/shrutisoni08"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={22}
                className="hover:text-orange-400 transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-soni-12d081209/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={22}
                className="hover:text-orange-400 transition"
              />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope
                size={22}
                className="hover:text-orange-400 transition"
              />
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
