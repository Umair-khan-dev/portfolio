function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        {/* Profile Image */}
        {/* Profile image placed in public folder as /profile.png */}
        <img
          src="/u.jpg"
          alt="Umair Khan"
          style={styles.image}
        />

        <h1 style={styles.title}>
          Hi, I'm <span style={styles.name}>Umair Khan</span>
        </h1>

        <p style={styles.subtitle}>
          Frontend & Backend Developer | PHP | Node.js | React | React Native
        </p>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    animation: "fadeInUp 1s ease forwards",
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #38bdf8",
    marginBottom: "20px",
    animation: "float 4s ease-in-out infinite",
  },
  title: {
    fontSize: "48px",
  },
  name: {
    color: "#38bdf8",
  },
  subtitle: {
    marginTop: "15px",
    fontSize: "20px",
    color: "#cbd5f5",
  },
};

export default Hero;
