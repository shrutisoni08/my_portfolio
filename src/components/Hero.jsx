/* eslint-disable no-unused-vars */
// src/components/Hero.jsx
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg"; // Assuming you have a profile image

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-[#212322] text-[#EA8F10]"
      id="hero"
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full mb-6">
          <div className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 animate-pulse rounded" />
          <h2 className="pl-8 text-xl font-semibold tracking-wide text-[#EEE6D6] capitalize">
            Hello there, I'm Shruti
          </h2>
        </div>

        <h1 className="text-4xl md:text-[4.5em] font-bold leading-tight mb-6 text-[#EEE6D6] font-['Playfair_Display']">
          I design and develop beautiful, responsive,{" "}
          <br className="hidden md:block" />
          modern websites that make an impact.
        </h1>

        <motion.div
          className="text-lg md:text-xl font-medium mt-2"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-[#EEE6D6]">I am a </span>
          <span className="inline-block">
            <TypeAnimation
              className="text-orange-500"
              sequence={[
                "Frontend Developer",
                2000,
                "Designer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex-1 mt-10 md:mt-0 flex justify-center">
          {/* Decorative lines – Top Left */}
          <div className="decorative-l absolute top-10 left-10 space-y-2 hidden md:block">
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
          </div>

          {/* Decorative lines – Bottom Right */}
          <div className="decorative-r absolute bottom-10 right-10 space-y-2 hidden md:block">
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
            <div className="w-20 h-[1px] bg-orange-500 opacity-70 animate-pulse"></div>
          </div>

          {/* Image */}
          <img
            // src="https://themewagon.github.io/monica/images/intro-bg@2x.jpg"
            src={Profile}
            alt="Developer"
            className="w-full max-w-md h-[590px] rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
