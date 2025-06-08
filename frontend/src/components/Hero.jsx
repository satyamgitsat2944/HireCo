import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

import appleImg from "./newimages/apple1.png";
import amazonImg from "./newimages/amazon2.png";
import mongodbImg from "./newimages/morgan1.png";
import expressImg from "./newimages/flipkartfinal.png";
import htmlImg from "./newimages/netfilx1.png";
import cssImg from "./newimages/oracle1.png";
import jsImg from "./newimages/microsoft1.png";
import githubImg from "./newimages/googlefinal.png";

// Animation for letter-by-letter reveal
const textVariant = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3 * i,
    },
  }),
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const paragraph = `Explore a vast array of job listings in diverse industries. Whether you're a seasoned professional or just starting out, find the perfect role to advance your career. Our platform makes job searching easy and efficient, bringing you closer to your next big opportunity.`;

  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
          Unlock Your Next Big Career Move
      </motion.h1>

      <motion.h4
  className="hero-subtitle vibrant-subtitle"
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.3, ease: "easeOut" }}
>
  Empowering You to Unlock Opportunities — Anytime, Anywhere, for Every Ambition.
</motion.h4>


      <motion.div
        className="hox"
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        {paragraph.split(" ").map((word, index) => (
          <motion.span key={index} variants={letterVariant} style={{ marginRight: "6px", display: "inline-block" }}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <div className="wrapper">
  <div className="marquee-track">
    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>
    {/* Duplicate items for seamless looping */}
    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>


    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>


    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>


    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>


    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>
    <div className="itemLeft"><img src={appleImg} alt="Apple" /></div>
    <div className="itemLeft"><img src={amazonImg} alt="Amazon" /></div>
    <div className="itemLeft"><img src={mongodbImg} alt="MongoDB" /></div>
    <div className="itemLeft"><img src={expressImg} alt="Express" /></div>
    <div className="itemLeft"><img src={htmlImg} alt="HTML5" /></div>
    <div className="itemLeft"><img src={cssImg} alt="CSS3" /></div>
    <div className="itemLeft"><img src={jsImg} alt="JavaScript" /></div>
    <div className="itemLeft"><img src={githubImg} alt="GitHub" /></div>
  </div>
</div>
    </section>
  );
};

export default Hero;
