import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "MERN Stack Engineer",
      company: "Tech Company",
      desc: "Built scalable MERN applications using MongoDB, Express, React, and Node.js.",
      icon: "/laptop.png",
    },
    {
      role: "Junior MERN Stack Developer",
      company: "Software House",
      desc: "Worked on frontend in React and backend APIs with Node.js & Express.",
      icon: "/light.png",
    },
    {
      role: "MERN Stack Intern",
      company: "Internship Program",
      desc: "Learned MERN fundamentals, CRUD operations, and real-world workflows.",
      icon: "/laptop.png",
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={styles.heading}
      >
        Work Experience
      </motion.h2>

      <div style={styles.container}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={styles.card}
          >
            {/* Background Pattern */}
            <div style={styles.cardBg}></div>

            <div style={styles.cardContent}>
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src={exp.icon} 
                  alt="" 
                  style={styles.icon} 
                />
                <h3 style={styles.role}>{exp.role}</h3>
                <h4 style={styles.company}>{exp.company}</h4>
                <p style={styles.desc}>{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "#020617",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "70px",
    color: "#f8fafc",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "rgba(15, 23, 42, 0.4)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "40px 30px",
    borderRadius: "24px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s ease",
  },
  cardBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(/footer-grid.png)`,
    backgroundSize: "cover",
    opacity: 0.05,
    pointerEvents: "none",
  },
  cardContent: {
    position: "relative",
    zIndex: 1,
  },
  icon: {
    width: "60px",
    marginBottom: "20px",
    filter: "drop-shadow(0 0 10px rgba(56, 189, 248, 0.3))",
  },
  role: {
    color: "#38bdf8",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  company: {
    color: "#94a3b8",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  desc: {
    fontSize: "15px",
    color: "#cbd5f5",
    lineHeight: "1.7",
  },
};

export default Experience;
