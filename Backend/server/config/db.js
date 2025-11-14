// server/config/db.js
import mongoose from "mongoose";

export async function connectDB(uri) {
  if (!uri) throw new Error("MONGODB_URI missing");
  try {
    await mongoose.connect(uri, { dbName: "Portfolio" });
    console.log("✓ MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}
