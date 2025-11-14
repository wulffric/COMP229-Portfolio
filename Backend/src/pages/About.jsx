import PageWrapper from "../components/PageWrapper";
import headshot from "../assets/headshot.jpg";
import resume from "../assets/resume.pdf";

export default function About() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <h1>About Me</h1>
        <img 
          src={headshot} 
          alt="Abass Ajibola" 
          style={{ width: "200px", borderRadius: "50%" }} 
        />
        <p style={{ maxWidth: "600px" }}>
          Hi, I'm Abass Ajibola, a Software Engineering Technician at Centennial College.
          I create clean, modern, and responsive web applications.
        </p>
        <a 
          href={resume} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ display: "inline-block" }}
        >
          Download My Resume
        </a>
      </div>
    </PageWrapper>
  );
}