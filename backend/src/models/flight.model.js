import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    flightNumber: { type: String, required: true, unique: true }, // Unique flight identifier
    airline: { type: String, required: true }, // Airline name
    departure: {
      airport: { type: String, required: true }, // Departure airport code/name
      city: { type: String, required: true }, // Departure city
      country: { type: String, required: true }, // Departure country
      dateTime: { type: Date, required: true }, // Departure date and time
    },
    arrival: {
      airport: { type: String, required: true }, // Arrival airport code/name
      city: { type: String, required: true }, // Arrival city
      country: { type: String, required: true }, // Arrival country
      dateTime: { type: Date, required: true }, // Arrival date and time
    },
    duration: { type: Number, required: true }, // Duration in minutes
    price: {
      economy: { type: Number, required: true }, // Price for economy class
      business: { type: Number }, // Price for business class
      firstClass: { type: Number }, // Price for first class
      currency: { type: String, default: "USD" },
    },
    seats: {
      economy: { type: Number, required: true }, // Available seats in economy
      business: { type: Number, default: 0 }, // Available seats in business
      firstClass: { type: Number, default: 0 }, // Available seats in first class
    },
    aircraft: {
      model: { type: String, required: true }, // Aircraft model
      manufacturer: { type: String }, // Manufacturer name
    },
    stops: [
      {
        airport: { type: String, required: true }, // Stopover airport
        city: { type: String, required: true }, // Stopover city
        country: { type: String, required: true }, // Stopover country
        duration: { type: Number, required: true }, // Stop duration in minutes
      },
    ],
    status: {
      type: String,
      enum: ["scheduled", "delayed", "cancelled", "completed"],
      default: "scheduled",
    },
    baggagePolicy: {
      personalBag: { 
        weight: { type: Number, required: true },
        count: { type: Number, required: true }
       },  
      cabinBag: { 
        weight: { type: Number, required: true },
        count: { type: Number, required: true }
       }, // Weight limit for cabin bags in kg
      checkInBag: { 
        weight: { type: Number, required: true },
        count: { type: Number, required: true }
       }, // Weight limit for check-in bags in kg
    },
    amenities: [
      { type: String }, // E.g., WiFi, in-flight entertainment, meals
    ],
    tripType: {
      type: String,
      enum: ["single", "round"],
      required: true,
    }, // Specifies if the trip is single or round
    returnFlight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
    }, // Reference to the return flight for round trips
    bookings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        seatClass: {
          type: String,
          enum: ["economy", "business", "first"],
          required: true,
        },
        numberOfSeats: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        bookingDate: { type: Date, default: Date.now },
        status: {
          type: String,
          enum: ["booked", "cancelled", "completed"],
          default: "booked",
        },
      },
    ],
    featured: { type: Boolean, default: false }, // Whether the flight is featured
    host: {
      hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }, // Optional host for charter/private flights
      name: { type: String },
      contact: { type: String },
    },
    paymentMethod: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    cancellationPolicy: {
      type: String,
      enum: ["flexible", "strict"],
      default: "flexible",
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Flight = mongoose.model("Flight", flightSchema);
