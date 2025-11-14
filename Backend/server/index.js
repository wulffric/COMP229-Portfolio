// server/index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import qualificationRoutes from "./routes/qualificationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// --- Load env from server/.env regardless of where node is started ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// --- App setup ---
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));
app.use(express.json());

// Root + health check
app.get("/", (_req, res) => res.status(200).send("Portfolio API is running"));
app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);

// --- Start server after DB connection ---
const PORT = process.env.PORT || 5000;
console.log("MONGODB_URI present?", !!process.env.MONGODB_URI);

connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✓ Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB:", err.message);
    process.exit(1);
  });
