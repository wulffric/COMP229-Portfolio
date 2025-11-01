import PageWrapper from "../components/PageWrapper";

export default function Education() {
  const educationList = [
    { degree: "Software Engineering Technician", school: "Centennial College", years: "2024 – Present" },
    { degree: "High School Diploma", school: "Example High School", years: "2018 – 2022" },
    { degree: "Certification", school: "Example Institution", years: "2023" }
  ];

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <h1>Education</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          {educationList.map((edu, index) => (
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
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>{edu.years}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}