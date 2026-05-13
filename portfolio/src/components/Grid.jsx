import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail, ExternalLink } from "lucide-react";
import { gridItems } from "../data";

const Grid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.gridContainer}
      >
        {gridItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              ...styles.gridItem,
              ...(item.id === 1 ? styles.largeItem : {}),
              ...(item.id === 5 ? styles.mediumItem : {}),
              ...(item.id === 6 ? styles.contactItem : {}),
              background: item.id === 6 
                ? `url(/footer-grid.png)` 
                : item.id === 1 ? "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.4))"
                : item.id === 2 ? "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(126, 34, 206, 0.3))"
                : item.id === 3 ? "linear-gradient(to top left, rgba(15, 23, 42, 0.8), rgba(16, 185, 129, 0.2))"
                : item.id === 4 ? "linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(236, 72, 153, 0.2))"
                : item.id === 5 ? "linear-gradient(to top right, rgba(15, 23, 42, 0.8), rgba(245, 158, 11, 0.2))"
                : "rgba(15, 23, 42, 0.6)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: item.id === 6 ? "normal" : "overlay",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Background Gradient for items */}
            <div style={styles.gradientOverlay}></div>

            <div style={styles.content}>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                style={styles.description}
              >
                {item.description}
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                style={styles.title}
              >
                {item.title}
              </motion.h3>

              {item.techStack && (
                <div style={styles.techStack}>
                  {item.techStack.map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.5 }}
                      style={styles.techTag}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}

              {item.link && !item.email && (
                <div style={styles.copyContainer}>
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...styles.copyButton,
                      textDecoration: "none",
                      display: "inline-flex",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div style={styles.buttonContent}>
                      <ExternalLink size={18} />
                      <span>Check Live Site</span>
                    </div>
                  </motion.a>
                </div>
              )}

              {item.email && (
                <div style={styles.copyContainer}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(item.email)}
                    style={styles.copyButton}
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          style={styles.buttonContent}
                        >
                          <Check size={18} color="#10b981" />
                          <span style={{ color: "#10b981" }}>Email Copied!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          style={styles.buttonContent}
                        >
                          <Copy size={18} />
                          <span>Copy my email</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              )}
            </div>

            {/* Decorative background text for tech stack or similar */}
            {item.id === 3 && (
                <div style={styles.bgDecoration}>
                    {item.techStack?.slice(0, 4).join(" ")}
                </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    padding: "100px 20px",
    background: "#020617",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
  gridItem: {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "280px",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.3s ease",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at top right, rgba(56, 189, 248, 0.05), transparent)",
    pointerEvents: "none",
  },
  largeItem: {
    gridColumn: "span 2",
    gridRow: "span 2",
    justifyContent: "flex-end",
  },
  mediumItem: {
    gridColumn: "span 2",
  },
  contactItem: {
    gridColumn: "span 2",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    alignItems: "center",
  },
  content: {
    zIndex: 2,
    position: "relative",
  },
  description: {
    fontSize: "14px",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#f8fafc",
    lineHeight: "1.2",
    maxWidth: "500px",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "24px",
  },
  techTag: {
    background: "rgba(56, 189, 248, 0.1)",
    color: "#38bdf8",
    padding: "6px 16px",
    borderRadius: "12px",
    fontSize: "13px",
    fontWeight: "600",
    border: "1px solid rgba(56, 189, 248, 0.2)",
  },
  copyContainer: {
    marginTop: "32px",
  },
  copyButton: {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    minWidth: "200px",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  bgDecoration: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    fontSize: "80px",
    fontWeight: "900",
    color: "rgba(255,255,255,0.03)",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    zIndex: 0,
  }
};

export default Grid;
