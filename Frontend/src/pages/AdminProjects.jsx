import { useEffect, useState } from "react";
import {
  getProjects,
  deleteProject,
  updateProject
} from "../api/projectApi";

export default function AdminProjects() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tech: "",
    link: "",
    year: ""
  });

  const load = async () => {
    const res = await getProjects();
    setItems(res.data);
  };

  const startEdit = (p) => {
    setEditing(p._id);
    setForm({
      title: p.title,
      description: p.description,
      imageUrl: p.imageUrl,
      tech: p.tech?.join(", "),
      link: p.link,
      year: p.year
    });
  };

  const saveEdit = async (id) => {
    await updateProject(id, {
      ...form,
      tech: form.tech.split(",").map(t => t.trim())
    });

    setEditing(null);
    load();
  };

  const remove = async (id) => {
    await deleteProject(id);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ width: "700px", margin: "20px auto" }}>
      <h2>Manage Projects</h2>

      {items.map((p) => (
        <div
          key={p._id}
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "20px",
            marginBottom: "20px"
          }}
        >
          {editing === p._id ? (
            <>
              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px", height: "100px" }}
              />

              <input
                type="text"
                value={form.imageUrl}
                onChange={(e) =>
                  setForm({ ...form, imageUrl: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <input
                type="text"
                value={form.tech}
                onChange={(e) =>
                  setForm({ ...form, tech: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <input
                type="text"
                value={form.link}
                onChange={(e) =>
                  setForm({ ...form, link: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <input
                type="number"
                value={form.year}
                onChange={(e) =>
                  setForm({ ...form, year: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <button onClick={() => saveEdit(p._id)}>Save</button>
            </>
          ) : (
            <>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.imageUrl && (
                <img
                  src={p.imageUrl}
                  alt=""
                  style={{ width: "300px", marginTop: "10px" }}
                />
              )}
              <p><b>Tech:</b> {p.tech?.join(", ")}</p>
              <p><b>Link:</b> {p.link}</p>
              <p><b>Year:</b> {p.year}</p>

              <button onClick={() => startEdit(p)}>Edit</button>
              <button onClick={() => remove(p._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
