import Contact from "../models/Contact.js";

export async function getAll(_req, res) {
  const items = await Contact.find().sort({ createdAt: -1 }).lean();
  res.json(items);
}

export async function getById(req, res) {
  const item = await Contact.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function create(req, res) {
  const { firstName, lastName, email, message } = req.body;
  if (!firstName || !lastName || !email || !message)
    return res.status(400).json({ message: "All fields are required" });

  const created = await Contact.create({ firstName, lastName, email, message });
  res.status(201).json(created);
}

export async function update(req, res) {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
}

export async function remove(req, res) {
  const deleted = await Contact.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
}

export async function removeAll(_req, res) {
  await Contact.deleteMany({});
  res.json({ message: "All contacts removed" });
}
