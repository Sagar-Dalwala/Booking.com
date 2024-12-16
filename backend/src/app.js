import cors from "cors";

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import stayRoutes from "./routes/stay.routes.js";
import roomRoutes from "./routes/room.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/stays", stayRoutes);

app.use("/api/v1/stays/room", roomRoutes);
// app.use("/api/v1/flights", require("./routes/flight.routes.js"));
// app.use("/api/v1/attractions", require("./routes/attraction.routes.js"));
// app.use("/api/v1/airport-taxis", require("./routes/airportTaxi.routes.js"));
// app.use("/api/v1/car-rentals", require("./routes/carRental.routes.js"));
// app.use("/api/v1/flights-hotels", require("./routes/flightHotel.routes.js"));

export default app;
