import { useState } from "react";
import { createQualification } from "../api/qualificationApi";

export default function AdminQualificationCreate() {
  const [title, setTitle] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      await createQualification({ title, institution, year });
      setMsg("Qualification added!");

      setTitle("");
      setInstitution("");
      setYear("");
    } catch (err) {
      console.error(err);
      setMsg("Failed to add");
    }
  };

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>Add Qualification</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Institution"
          value={institution}
          required
          onChange={(e) => setInstitution(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          required
          onChange={(e) => setYear(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button style={{ width: "100%", padding: "10px" }}>
          Add Qualification
        </button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
