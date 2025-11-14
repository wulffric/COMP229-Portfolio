import { useEffect, useState } from "react";
import { getQualifications } from "../api/qualificationApi";

export default function Education() {
  const [items, setItems] = useState([]);

  const load = async () => {
    const res = await getQualifications();
    setItems(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      <h2>Education & Qualifications</h2>

      {items.map((q) => (
        <div
          key={q._id}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid #ccc",
            marginBottom: "10px"
          }}
        >
          <h3>{q.title}</h3>
          <p>{q.institution}</p>
          <p>{q.year}</p>
        </div>
      ))}
    </div>
  );
}
