import { useState } from "react";
import { createContact } from "../api/contactApi";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    try {
      await createContact({ firstName, lastName, email, message });
      setSuccess("Message submitted successfully!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.error(err);
      setSuccess("Failed to submit");
    }
  };

  return (
    <div style={{ width: "400px", marginTop: "40px" }}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "100%", height: "120px", marginBottom: "10px" }}
        />

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Submit
        </button>
      </form>

      {success && <p style={{ marginTop: "10px" }}>{success}</p>}
    </div>
  );
}
