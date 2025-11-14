
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      width: "100%",
      padding: "10px 20px",
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #ccc",
      boxSizing: "border-box"
    }}>
      <Link to="/"><img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} /></Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}