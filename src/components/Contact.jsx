import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#1A1F1C] text-[#FEF6E6] py-20 px-4 sm:px-10 text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 font-heading leading-tight">
        Let's Build Something
        <br /> Great Together.
      </h2>
      <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#fef6e6c4] mb-10 font-para">
        I specialize in building fast, responsive, and visually striking
        websites. Whether you're a startup, freelancer, or business owner —
        let’s work together to craft a site that reflects your brand and
        elevates your presence online.
      </p>
      <a
        href="mailto:your@email.com"
        className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
      >
        Let's Work Together
      </a>
    </motion.section>
  );
};

export default Contact;
