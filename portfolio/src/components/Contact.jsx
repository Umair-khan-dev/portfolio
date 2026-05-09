function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>

      <div style={styles.card}>
        <p style={styles.text}>
          I’m always open to discussing new projects, opportunities, or ideas.
        </p>

        <div style={styles.info}>
          <p>
            📧 Email:
            <a href="mailto:umairkhanuk0345@gmail.com" style={styles.link}>
              umairkhanuk0345@gmail.com
            </a>
          </p>

          <p>
            📞 Phone:
            <a href="tel:03452653248" style={styles.link}>
              0345-2653248
            </a>
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#020617",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "40px",
    color: "#38bdf8",
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "18px",
    border: "1px solid #1e293b",
    animation: "fadeIn 1s ease forwards",
  },
  text: {
    marginBottom: "25px",
    color: "#cbd5f5",
  },
  info: {
    fontSize: "16px",
    lineHeight: "2",
  },
  link: {
    marginLeft: "8px",
    color: "#38bdf8",
    fontWeight: "bold",
  },
};

export default Contact;
