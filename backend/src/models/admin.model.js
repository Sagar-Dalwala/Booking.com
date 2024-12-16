import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    businessName: { type: String },
    businessEmail: { type: String },
    businessContact: { type: String },
    businessAddress: { type: String },
    verificationStatus: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Admin = mongoose.model("Admin", adminSchema);
