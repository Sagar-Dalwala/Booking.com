import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    noOfGuests: { type: Number, required: true },
    price: { type: Number, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    numberOfRooms: { type: Number, required: true },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Room = mongoose.model("Room", roomSchema);
