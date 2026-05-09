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
      <h2 style={styles.heading}>Experience</h2>

      <div style={styles.container}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              animation: `fadeUp 0.8s ease ${index * 0.3}s forwards`,
            }}
          >
            <img src={exp.icon} alt="" style={styles.icon} />
            <h3 style={styles.role}>{exp.role}</h3>
            <h4 style={styles.company}>{exp.company}</h4>
            <p style={styles.desc}>{exp.desc}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(56,189,248,0.2); }
            50% { box-shadow: 0 0 25px rgba(56,189,248,0.5); }
            100% { box-shadow: 0 0 10px rgba(56,189,248,0.2); }
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
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "60px",
    color: "#38bdf8",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: "30px 25px",
    borderRadius: "18px",
    textAlign: "center",
    opacity: 0,
    animationFillMode: "forwards",
    transition: "0.4s ease",
  },
  icon: {
    width: "50px",
    marginBottom: "15px",
    animation: "glow 3s ease-in-out infinite",
  },
  role: {
    color: "#38bdf8",
    marginBottom: "5px",
  },
  company: {
    color: "#cbd5f5",
    fontSize: "15px",
    marginBottom: "12px",
  },
  desc: {
    fontSize: "14px",
    color: "#9ca3af",
    lineHeight: "1.6",
  },
};

export default Experience;
