import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import { Button, fade, stagger } from "./ui";

export default function Hero() {
  const { name, title, stack, headline, description, heroImage, resume } =
    portfolioData.personal;
  const [imgOk, setImgOk] = useState(true);
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-grid absolute inset-0" aria-hidden />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-iris/20 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-mint/10 blur-[110px]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p variants={fade} className="text-lg text-slate-400">
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={fade}
            className="mt-1 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-white via-white to-mint bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>
          <motion.p
            variants={fade}
            className="mt-4 text-xl font-medium text-mint sm:text-2xl"
          >
            {title}
          </motion.p>
          <motion.p variants={fade} className="mt-2 text-sm text-slate-500">
            {stack}
          </motion.p>
          <motion.h2
            variants={fade}
            className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 max-w-xl leading-relaxed text-slate-400"
          >
            {description}
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" arrow>
              View My Work
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
            <Button href={resume} variant="ghost" download>
              <FiDownload aria-hidden /> Download Resume
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative order-1 mx-auto w-full max-w-[17rem] sm:max-w-sm lg:order-2 lg:max-w-md"
        >
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-mint/30 to-iris/30 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[4%] rounded-full border border-dashed border-mint/30"
          />
          <div
            aria-hidden
            className="absolute inset-[14%] rounded-full border border-iris/30"
          />
          <motion.div
            animate={{ y: [0, 0, 0] }}
            transition={{ duration: 0, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square"
          >
            {imgOk ? (
              <img
                src={heroImage}
                alt={`${name}, ${title}`}
                width="600"
                height="600"
                fetchPriority="high"
                onError={() => setImgOk(false)}
                className="h-full w-full object-contain object-bottom drop-shadow-2xl"
              />
            ) : (
              <div className="grid h-full place-items-center text-7xl font-bold text-white/20">
                SS
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}