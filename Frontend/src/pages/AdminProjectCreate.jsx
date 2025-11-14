import { useState } from "react";
import { createProject } from "../api/projectApi";

export default function AdminProjectCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tech, setTech] = useState("");
  const [link, setLink] = useState("");
  const [year, setYear] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      await createProject({
        title,
        description,
        imageUrl,
        tech: tech.split(",").map(t => t.trim()),
        link,
        year
      });

      setMsg("Project created!");

      setTitle("");
      setDescription("");
      setImageUrl("");
      setTech("");
      setLink("");
      setYear("");

    } catch (err) {
      console.error(err);
      setMsg("Failed to create");
    }
  };

  return (
    <div style={{ width: "450px", margin: "20px auto" }}>
      <h2>Add Project</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", height: "120px" }}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Tech stack (comma-separated)"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button style={{ width: "100%", padding: "10px" }}>
          Add Project
        </button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
