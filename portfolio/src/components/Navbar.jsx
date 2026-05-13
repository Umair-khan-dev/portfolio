function Navbar() {
  return (
    <nav className="navbar" style={styles.nav}>
      {/* Logo */}
      <h2 className="logo" style={styles.logo}>Umair <span style={{ color: "#fff" }}>Khan</span></h2>

      {/* Navigation Links */}
      <ul className="nav-links" style={styles.links}>
        <li><a href="#about" className="nav-link" style={styles.link}>About</a></li>
        <li><a href="#projects" className="nav-link" style={styles.link}>Projects</a></li>
        <li><a href="#experience" className="nav-link" style={styles.link}>Experience</a></li>
        <li><a href="#contact" className="nav-link" style={styles.link}>Contact</a></li>
      </ul>

      {/* Global CSS for Navbar */}
      <style>
        {`
          ul li a::after {
            content: '';
            display: block;
            height: 1px;
            width: 0%;
            background: #38bdf8;
            transition: width 0.3s;
          }

          ul li a:hover::after {
            width: 100%;
          }
          
          @keyframes slideIn {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .navbar {
              padding: 10px 20px !important;
              flex-direction: column !important;
              gap: 10px !important;
            }
            .nav-links {
              gap: 15px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }
            .logo {
              font-size: 20px !important;
            }
            .nav-link {
              font-size: 14px !important;
            }
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
    padding: "10px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(2, 6, 23, 0.7)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    zIndex: 1000,
    animation: "slideIn 0.5s ease-out",
  },
  logo: {
    color: "#38bdf8",
    fontWeight: "600",
    fontSize: "24px",
    letterSpacing: "-0.02em",
  },
  links: {
    display: "flex",
    gap: "40px",
    listStyle: "none",
  },
  link: {
    color: "#94a3b8",
    fontWeight: "500",
    fontSize: "15px",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
