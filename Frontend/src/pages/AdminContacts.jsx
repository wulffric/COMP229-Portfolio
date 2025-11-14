import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/contactApi";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  const remove = async (id) => {
    await deleteContact(id);
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Messages</h2>

      {contacts.map((c) => (
        <div key={c._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <p><strong>Name:</strong> {c.firstName} {c.lastName}</p>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Message:</strong> {c.message}</p>

          <button onClick={() => remove(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
