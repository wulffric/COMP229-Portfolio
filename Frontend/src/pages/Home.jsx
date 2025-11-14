import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px"
        }}
      >
        <h1>Welcome to Abass Ajibola's Portfolio</h1>
        <h2>Software Engineering Technician at Centennial College</h2>
        <p style={{ maxWidth: "600px" }}>
          Mission: To create clean, modern, and responsive web applications.
        </p>
      </div>
    </PageWrapper>
  );
}
