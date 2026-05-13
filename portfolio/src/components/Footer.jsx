function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        {/* GitHub */}
        <a href="https://github.com/Umair-khan-dev" target="_blank" rel="noreferrer">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            alt="GitHub" 
            style={styles.icon}
          />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/umair-khan-0741a7296/" target="_blank" rel="noreferrer">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="LinkedIn" 
            style={styles.icon}
          />
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
            alt="Twitter" 
            style={styles.icon}
          />
        </a>
      </div>

      <p style={styles.text}>
        © {new Date().getFullYear()} Umair Khan — Full Stack Developer
      </p>

      {/* Animation */}
      <style>
        {`
          @keyframes pop {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#020617",
    padding: "40px 20px",
    textAlign: "center",
    borderTop: "1px solid #1e293b",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "20px",
    animation: "pop 0.8s ease forwards",
  },
  icon: {
    width: "32px",
    height: "32px",
    transition: "0.3s ease",
    filter: "brightness(0) invert(1)",
  },
  text: {
    color: "#9ca3af",
    fontSize: "14px",
  },
};

export default Footer;
