import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: {
      adults: { type: Number, required: true },
      children: { type: Number, default: 0 },
    },
    totalPrice: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    paymentDetails: {
      method: {
        type: String,
        enum: ["card", "bank transfer", "paypal"],
        required: true,
      },
      transactionId: { type: String },
      date: { type: Date },
    },
    status: {
      type: String,
      enum: ["booked", "cancelled", "completed"],
      default: "booked",
    },
    createdAt: { type: Date, default: Date.now },
  },
  {}
);

export const Booking = mongoose.model("Booking", bookingSchema);
