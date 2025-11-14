import { useEffect, useState } from "react";
import {
  getQualifications,
  deleteQualification,
  updateQualification
} from "../api/qualificationApi";

export default function AdminQualifications() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", institution: "", year: "" });

  const load = async () => {
    const res = await getQualifications();
    setItems(res.data);
  };

  const startEdit = (item) => {
    setEditing(item._id);
    setForm({
      title: item.title,
      institution: item.institution,
      year: item.year
    });
  };

  const saveEdit = async (id) => {
    await updateQualification(id, form);
    setEditing(null);
    load();
  };

  const remove = async (id) => {
    await deleteQualification(id);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      <h2>Manage Qualifications</h2>

      {items.map((q) => (
        <div
          key={q._id}
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px"
          }}
        >
          {editing === q._id ? (
            <>
              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />

              <input
                type="text"
                value={form.institution}
                onChange={(e) =>
                  setForm({ ...form, institution: e.target.value })
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

              <button onClick={() => saveEdit(q._id)}>Save</button>
            </>
          ) : (
            <>
              <h3>{q.title}</h3>
              <p>{q.institution}</p>
              <p>{q.year}</p>

              <button onClick={() => startEdit(q)}>Edit</button>
              <button onClick={() => remove(q._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
