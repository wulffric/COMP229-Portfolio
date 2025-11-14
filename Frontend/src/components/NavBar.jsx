// NavBar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div style={{ width: "100%", background: "#fbfbfb", borderBottom: "1px solid #ddd" }}>
      <nav
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "10px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fbfbfb",
          position: "sticky",
          top: 0,
          zIndex: 99,
          flexWrap: "nowrap",
          minHeight: "50px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            fontSize: "16px",
            flexWrap: "nowrap",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "nowrap",
            fontSize: "15px",
            flexShrink: 0,
            marginLeft: "10px",
          }}
        >
          {user?.role === "admin" && (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowAdminMenu(!showAdminMenu)}
                style={{
                  background: "#333",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                Admin ▼
              </button>

              {showAdminMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: 0,
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    padding: "10px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    minWidth: "180px",
                    zIndex: 100,
                  }}
                >
                  <Link className="admin-item" to="/admin">Dashboard</Link>
                  <Link className="admin-item" to="/admin/contacts">Contacts</Link>
                  <Link className="admin-item" to="/admin/qualifications">Qualifications</Link>
                  <Link className="admin-item" to="/admin/qualifications/create">Add Qualification</Link>
                  <Link className="admin-item" to="/admin/projects">Projects</Link>
                  <Link className="admin-item" to="/admin/projects/create">Add Project</Link>
                </div>
              )}
            </div>
          )}

          {!user ? (
            <>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              <span style={{ fontSize: "15px", whiteSpace: "nowrap" }}>Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  background: "#d9534f",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}