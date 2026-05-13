function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "React based personal portfolio website",
      link: " http://localhost:5173/",
    },
    {
      title: "Country Finder App",
      desc: "Search country by name and region with full details",
      link: " https://country-finder-world.netlify.app/",
    },
    {
      title: "BMI Calculator",
      desc: "Calculate BMI in Metric and Imperial units",
      link: "https://bmi-calculator-project-5.netlify.app/",
    },
    {
      title: "CHATBOOT",
      desc: "AI-powered chatbot for customer support",
      link: "https://chats-apps-react.netlify.app/",
    },
    {
      title: "Restaurant Website",
      desc: "Fully responsive restaurant website UI",
      link: "https://resturent-ui.netlify.app/",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              animation: `fadeUp 0.8s ease ${index * 0.2}s forwards`,
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Check Live Site →
            </a>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
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
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "50px",
    color: "#38bdf8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    padding: "25px",
    borderRadius: "15px",
    opacity: 0,
    transition: "all 0.4s ease",
  },
};

export default Projects;