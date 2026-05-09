function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.title}>About Me</h2>

      <p style={styles.text}>
        I am Umair Khan, a passionate MERN Stack Developer and Computer Science student.
        I specialize in building modern, responsive, and scalable web and mobile applications
        using React, Node.js, MongoDB, PHP, and React Native.
      </p>

      <p style={styles.text}>
        My goal is to work in a professional environment and create high-quality industry-level applications.
      </p>
    </section>
  );
}

const styles = {
  about: {
    padding: "100px 20px",
    background: "#020617",
    color: "#fff",
    textAlign: "center",
  },

  title: {
    fontSize: "36px",
    color: "#38bdf8",
    marginBottom: "20px",
  },

  text: {
    maxWidth: "700px",
    margin: "10px auto",
    fontSize: "18px",
    color: "#cbd5f5",
  },
};

export default About;
