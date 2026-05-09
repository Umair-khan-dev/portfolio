function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <h2 style={styles.logo}>Umair Khan</h2>

      {/* Navigation Links */}
      <ul style={styles.links}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#experience" style={styles.link}>Experience</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>

      {/* Download CV Button */}
      <a href="/cv.pdf" download style={styles.cvBtn}>
        Download CV
      </a>

      {/* Animation CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          a {
            text-decoration: none;
            transition: all 0.3s ease;
          }

          a:hover {
            color: #38bdf8;
          }

          /* Fade Down Animation for Navbar */
          @keyframes fadeDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hover animation for CV Button */
          a[download]:hover {
            transform: scale(1.05);
            background: #0ea5e9;
            color: #fff;
          }

          /* Hover underline animation for nav links */
          ul li a::after {
            content: '';
            display: block;
            height: 2px;
            width: 0%;
            background: #38bdf8;
            transition: width 0.3s;
          }

          ul li a:hover::after {
            width: 100%;
          }
        `}
      </style>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(2,6,23,0.95)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    animation: "fadeDown 0.8s ease forwards",
  },

  logo: {
    color: "#38bdf8",
    fontWeight: "bold",
    fontSize: "22px",
  },

  links: {
    display: "flex",
    gap: "30px",
    listStyle: "none",
  },

  link: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "16px",
    position: "relative",
  },

  cvBtn: {
    background: "#38bdf8",
    color: "#020617",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
};

export default Navbar;
