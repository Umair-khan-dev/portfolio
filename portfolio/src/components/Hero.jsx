import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section style={styles.hero}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        {/* Profile Image */}
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.2 },
            opacity: { duration: 0.5, delay: 0.2 }
          }}
          whileHover={{ scale: 1.05 }}
          src="/u.jpg"
          alt="Umair Khan"
          style={styles.image}
        />

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={styles.title}
        >
          Hi, I'm <span style={styles.name}>Umair Khan</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={styles.subtitle}
        >
          Frontend & Backend Developer | PHP | Node.js | React | React Native
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={styles.btnContainer}
        >
            <a href="#projects" style={styles.primaryBtn}>View My Work</a>
            <a href="/Umair-cv.pdf" download style={styles.primaryBtn}>Download CV</a>
            <a href="#contact" style={styles.secondaryBtn}>Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at 50% 50%, #0f172a, #020617)",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    zIndex: 1,
  },
  image: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    border: "4px solid rgba(56, 189, 248, 0.5)",
    marginBottom: "30px",
    boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)",
  },
  title: {
    fontSize: "64px",
    fontWeight: "800",
    letterSpacing: "-0.02em",
    marginBottom: "10px",
  },
  name: {
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    marginTop: "15px",
    fontSize: "22px",
    color: "#94a3b8",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "0 auto",
  },
  btnContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px",
  },
  primaryBtn: {
    background: "#38bdf8",
    color: "#020617",
    padding: "14px 28px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 20px rgba(56, 189, 248, 0.2)",
  },
  secondaryBtn: {
    background: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease",
  },
};

export default Hero;
