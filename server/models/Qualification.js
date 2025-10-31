import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema(
  {
    degree:    { type: String, required: true, trim: true },
    school:    { type: String, required: true, trim: true },
    startYear: { type: Number },
    endYear:   { type: Number },
    details:   { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.models.Qualification || mongoose.model("Qualification", qualificationSchema);
