import User from "../models/User.js";

export const getAll = async (_req, res) => {
  try {
    const items = await User.find({});
    res.status(200).json(items);
  } catch {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const getById = async (req, res) => {
  try {
    const item = await User.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.status(200).json(item);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

export const create = async (req, res) => {
  try {
    const item = await User.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: "Validation error", details: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const item = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: "Not found" });
    res.status(200).json(item);
  } catch {
    res.status(400).json({ message: "Invalid ID or data" });
  }
};

export const remove = async (req, res) => {
  try {
    const item = await User.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.sendStatus(204);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

export const removeAll = async (_req, res) => {
  try {
    await User.deleteMany({});
    res.sendStatus(204);
  } catch {
    res.status(500).json({ message: "Failed to delete all" });
  }
};
