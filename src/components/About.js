import React from "react";
import Resume from "../assets/Isha Resume SDE-1.pdf";
import ProfileImage from "../assets/formal professional photo.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useReducedMotion } from "framer-motion";
import "./about.css";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const [profile] = useTypewriter({
    words: [
      "Software Engineer",
      "Building Reliable APIs",
      "Shipping Production Features",
      "System Design Enthusiast",
    ],
    loop: 0,
    typeSpeed: 60,
    deleteSpeed: 30,
  });

  return (
    <div className="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="hero__eyebrow">Software Engineer</p>

          <h1>
            Hi, I&apos;m <span>Isha Khurana.</span>
          </h1>

          <p className="hero__typing" aria-label={profile}>
            {profile}
            <Cursor cursorStyle="|" />
          </p>

          <p className="hero__summary">
            I build dependable software with a focus on backend systems, APIs,
            observability, and solving practical engineering problems.
          </p>

          <div className="hero__actions">
            <a className="btn hero__primary-button" href="#projects">
              View Projects
            </a>

            <a
              className="btn hero__secondary-button"
              href={Resume}
              download="Isha_Khurana_Resume"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
        >
          <img
            className="hero__image"
            src={ProfileImage}
            alt="Isha Khurana"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;