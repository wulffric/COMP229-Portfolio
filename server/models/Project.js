import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageUrl:    { type: String, trim: true },
    tech:        [{ type: String, trim: true }],
    link:        { type: String, trim: true },
    year:        { type: Number }
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
