import Project from "../models/Project.js";

export async function getAll(_req, res) {
  const items = await Project.find().sort({ createdAt: -1 }).lean();
  res.json(items);
}

export async function getById(req, res) {
  const item = await Project.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function create(req, res) {
  const created = await Project.create(req.body);
  res.status(201).json(created);
}

export async function update(req, res) {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
}

export async function remove(req, res) {
  const deleted = await Project.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
}

export async function removeAll(_req, res) {
  await Project.deleteMany({});
  res.json({ message: "All projects removed" });
}
