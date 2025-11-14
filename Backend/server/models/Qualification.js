import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    email:     { type: String, required: true, trim: true, lowercase: true },
    completion:{ type: Date,   required: true },
    description:{type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.models.Qualification
  || mongoose.model("Qualification", qualificationSchema);
