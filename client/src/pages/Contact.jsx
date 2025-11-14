import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent! Redirecting to Home page...");
    window.location.href = "/";
  };

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <h1>Contact Me</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <p>Email: abass@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Location: Toronto, Canada</p>
        </div>

        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          maxWidth: "400px",
          width: "100%"
        }}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", boxSizing: "border-box" }} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", boxSizing: "border-box" }} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", boxSizing: "border-box" }} />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} 
            style={{ width: "100%", padding: "12px", boxSizing: "border-box" }} />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", boxSizing: "border-box", minHeight: "120px" }} />
          <button type="submit" style={{ padding: "12px 30px" }}>Send Message</button>
        </form>
      </div>
    </PageWrapper>
  );
}