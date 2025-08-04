import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = ["About", "Work", "Projects", "Skills"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        background: "linear-gradient(90deg, #212322 0%, #2a2c29 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="logo-heading text-[#EEE6D6] font-bold tracking-wider font-playfair cursor-pointer"
          >
            Shruti.
          </motion.h1>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <HashLink
                  smooth
                  to={`#${link.toLowerCase()}`}
                  className="nav-links text-[#839585] hover:text-[#FEF6E6] text-sm transition duration-300"
                >
                  {link}
                </HashLink>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="cnt-btn px-6 py-4 rounded bg-[#EA8F10] text-white hover:bg-orange-400 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#839585]"
            >
              {isOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 pb-4 pt-2 space-y-4 bg-[#212322]"
        >
          {navLinks.map((link) => (
            <HashLink
              key={link}
              smooth
              to={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-[#839585] hover:text-[#FEF6E6] text-sm transition duration-300"
            >
              {link}
            </HashLink>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 bg-[#EA8F10] text-white rounded hover:bg-orange-400 transition"
          >
            Contact Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
