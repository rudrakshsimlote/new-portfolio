import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiPython, SiC, SiPostgresql } from 'react-icons/si';
import codingGif from '../../assets/coding.gif'; // Update with the correct path to your GIF

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Computer Science Student.", "Data Science Student.", "Aspiring Software/AI Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const fadeInLeft = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const imgAnimation = {
    whileHover: {
      scale: 1.05,
      rotate: 3,
      transition: { yoyo: Infinity },
    },
    whileTap: { scale: 0.9 },
  };

  return (
    <section id="home" className="w-full pt-10 py-20 flex items-center border-b-[1px] font-titleFont border-b-black">
      <motion.div className="w-1/2 flex flex-col gap-20" {...fadeInLeft}>
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-bold text-white">ABOUT ME</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-sky-500 capitalize">Rudraksh Simlote</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
          </h2>
          <p className="text-base font-semibold leading-6 tracking-wide">
          Hi, I’m Rudraksh Simlote. A computer science and data science student at Rutgers University with a real passion for building software that makes a difference. Over the past few years, I’ve worked as a developer intern, research assistant, and team lead, tackling everything from AI-powered resume tools to web apps that help people learn and stay organized. I love working with technologies like Python, JavaScript, React, and Next.js, and I’m always eager to pick up something new. Whether I’m collaborating with others, mentoring students, or diving into a challenging project, I enjoy finding creative solutions and making technology work for people. I’m excited to keep learning, growing, and contributing wherever I can.
          </p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col items-center">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me on
            </h2>
            <div className="flex gap-4">
              <a href="https://github.com/rudrakshsimlote" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/rudrakshsimlote/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/rudrakshsimlote/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Best skill on
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiPython />
              </span>
              <span className="bannerIcon">
                <SiC />
              </span>
              <span className="bannerIcon">
                <SiPostgresql />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-1/2 flex items-center justify-center" {...fadeInRight} {...imgAnimation}>
        <motion.img 
          src={codingGif} 
          alt="Coding GIF" 
          className="w-full max-w-md h-auto border-4 border-gray-600 rounded-lg shadow-lg transition-transform"
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
