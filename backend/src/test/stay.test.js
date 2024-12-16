import request from "supertest";
import fs from "fs";
import path from "path";
import app from "../app.js"; // Your Express app

// Alternative to __dirname in ES modules
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("POST /api/v1/stays/create-stay", function () {
  it("should create a stay with images", function (done) {
    request(app)
      .post("/api/v1/stays/create-stay")
      .field("name", "taj palace")
      .field("description", "hotel taj palace at mumbai")
      .field("address[street]", "xyz")
      .field("address[city]", "mumbai")
      .field("address[state]", "mumbai")
      .field("address[country]", "india")
      .field("address[postalCode]", "4005001")
      .field("location[type]", "Point")
      .field("location[coordinates]", "[77.1025, 28.7041]")
      .field("propertyType", "hotel")
      .field("locationType", "city")
      .field("pricePerNight", "5000")
      .field("maxGuests", "3")
      .field("numberOfRooms", "7")
      .field("amenities[0][name]", "Free Wifi")
      .field("amenities[1][name]", "Pool")
      .field("amenities[2][name]", "Parking")
      .field("pricing[0][startDate]", "2024-11-12")
      .field("pricing[0][endDate]", "2024-12-12")
      .field("pricing[0][pricePerNight]", "5000")
      .field("availability[0][startDate]", "2024-11-12")
      .field("availability[0][endDate]", "2024-12-12")
      .field("rules[0]", "No Smoking")
      .field("rules[1]", "Pet Allowed")
      .field("tags[0]", "Luxury")
      .field("tags[1]", "BeachFront")
      .field("featured", "true")
      .field("status", "available")
      .field("paymentMethod", "pay-at-property")
      .field("cancellationPolicy", "false")
      .field("isVerified", "false")
      .field("admin", "6759226bfbb05bc268df51d2")
      .field("views", "0")
      .field("currency", "INR")
      .attach(
        "images[]",
        fs.readFileSync(path.join(__dirname, "375140.png")),
        "375140.png"
      )
      .attach(
        "images[]",
        fs.readFileSync(path.join(__dirname, "376521.png")),
        "376521.png"
      )
      .expect(201) // Expect a 201 status for successful creation
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
