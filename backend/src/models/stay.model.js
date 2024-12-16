import mongoose from "mongoose";

const staySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true },
    },
    availability: {
      startDate: { type: Date },
      endDate: { type: Date },
    },
    images: [{ type: String }],
    propertyType: { type: String },
    locationType: { type: String },
    pricePerNight: { type: Number, required: true },
    maxGuests: { type: Number, required: true },
    amenities: [{ type: String }],
    rules: [{ type: String }],
    tags: [{ type: String }],
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    paymentMethod: {
      type: String,
      enum: ["pay at property", "pay online", "cash"],
      default: "pay at property",
    },
    cancellationPolicy: { type: Boolean, default: false },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      reviews: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Review",
        },
      ],
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],
    views: { type: Number, default: 0 },
    currency: { type: String, default: "INR" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    // isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

staySchema.index({ location: "2dsphere" });

export const Stay = mongoose.model("Stay", staySchema);
