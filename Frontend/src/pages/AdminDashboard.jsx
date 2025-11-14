import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const card = {
    width: "120px",
    height: "80px",
    padding: "8px",
    background: "white",
    borderRadius: "6px",
    boxShadow: "0px 1px 4px rgba(0,0,0,0.15)",
    textAlign: "center",
    textDecoration: "none",
    color: "#333",
    fontSize: "13px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gridAutoRows: "90px",
        gap: "10px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          gridColumn: "1 / -1",
          textAlign: "center",
          margin: "0",
          marginBottom: "5px",
          fontSize: "18px",
        }}
      >
        Admin Dashboard
      </h1>

      <Link to="/admin/contacts" style={card}>Contacts</Link>
      <Link to="/admin/qualifications" style={card}>Qualifications</Link>
      <Link to="/admin/qualifications/create" style={card}>Add Qual.</Link>
      <Link to="/admin/projects" style={card}>Projects</Link>
      <Link to="/admin/projects/create" style={card}>Add Project</Link>
    </div>
  );
}
