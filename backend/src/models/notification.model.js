import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Notification recipient
    stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
    type: {
      type: String,
      enum: ["payment", "booking", "review", "message", "cancellation"],
      required: true,
    }, 
    message: { type: String, required: true }, // Notification content
    isRead: { type: Boolean, default: false }, // Read/unread status
    // relatedEntity: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   refPath: "entityType", // Dynamically reference another collection
    // }, // Reference to related booking, review, etc.
    // entityType: {
    //   type: String,
    //   enum: ["Stay", "Flight", "Booking"], // Specify which collection the relatedEntity belongs to
    // },
    createdAt: { type: Date, default: Date.now }, // Notification creation timestamp
  },
  {
    timestamps: true,
  }
);

export const Notification = mongoose.model("Notification", notificationSchema);
