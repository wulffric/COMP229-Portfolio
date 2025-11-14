import PageWrapper from "../components/PageWrapper";

export default function Services() {
  const servicesList = [
    { title: "Web Development", description: "Building responsive websites using React, HTML, CSS, JS." },
    { title: "Mobile App Development", description: "Creating cross-platform mobile apps with React Native." },
    { title: "UI/UX Design", description: "Designing clean, user-friendly interfaces for web and mobile." }
  ];

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <h1>Services</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          {servicesList.map((s, index) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center"
            }}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
