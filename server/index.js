import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import qualificationRoutes from "./routes/qualificationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));
app.use(express.json());

app.get("/", (_req, res) => res.status(200).send("Portfolio API is running"));
app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 10000;

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✓ MongoDB connected");
    app.listen(PORT, () => console.log(`✓ Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("Mongo connection error:", err.message);
    process.exit(1);
  }
}

start();
