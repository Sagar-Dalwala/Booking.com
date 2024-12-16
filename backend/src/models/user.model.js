import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { config } from "../../config/env.js";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, sparse: true },
    password: { type: String, required: true },
    phone: { type: String, unique: true, sparse: true },
    avatar: { type: String, default: "" },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String },
    },
    gender: { type: String },
    profilePicture: { type: String },
    role: {
      type: String,
      enum: ["user", "superAdmin", "admin"],
      default: "user",
    },
    preferences: {
      currency: { type: String, default: "INR" },
      language: { type: String, default: "en" },
    },
    savedStays: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stay" }],
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    history: [
      {
        stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],

    verified: { type: Boolean, default: false },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    // dateOfBirth: { type: Date },
    // otherTravellers: [
    //   {
    //     fullName: { type: String },
    //     dateOfBirth: { type: Date },
    //     gender: { type: String },
    //   },
    // ],
    // payments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Payment",
    //   },
    // ],
    // paymentCards: [
    //   {
    //     cardHolderName: { type: String },
    //     cardNumber: { type: String },
    //     expiryDate: { type: Date },
    //     cvv: { type: String },
    //   },
    // ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.error("Error hashing password: ", error);
    next(error);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      email: this.email,
      role: this.role,
    },
    config.auth.secret,
    {
      expiresIn: config.auth.expiry,
    }
  );
};

export const User = mongoose.model("User", userSchema);
