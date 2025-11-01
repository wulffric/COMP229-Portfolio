import PageWrapper from "../components/PageWrapper";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

export default function Projects() {
  const projects = [
    { image: project1, title: "Project One", description: "React app demonstrating routing and components." },
    { image: project2, title: "Project Two", description: "Responsive web design project with HTML/CSS." },
    { image: project3, title: "Project Three", description: "JavaScript game using DOM manipulation." }
  ];

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <h1>My Projects</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          {projects.map((p, index) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center"
            }}>
              <img src={p.image} alt={p.title} style={{ width: "100%", borderRadius: "8px" }} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}