import { useEffect, useState } from "react";
import { getProjects } from "../api/projectApi";

export default function Projects() {
  const [items, setItems] = useState([]);

  const load = async () => {
    const res = await getProjects();
    setItems(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ width: "700px", margin: "20px auto" }}>
      <h2>Projects</h2>

      {items.map((p) => (
        <div
          key={p._id}
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "20px",
            marginBottom: "20px"
          }}
        >
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

          {p.link && (
            <p>
              <a href={p.link} target="_blank">Project Link</a>
            </p>
          )}

          <p><b>Year:</b> {p.year}</p>
        </div>
      ))}
    </div>
  );
}
