import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SignInPage from "./pages/auth/signin/SignInPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import Stays from "./pages/stays/Stays";
import Flights from "./pages/flights/Flights";
import FlightsHotels from "./pages/flights-hotels/FlightsHotels";
import CarRentals from "./pages/car-rentals/CarRentals";
import Attractions from "./pages/attractions/Attractions";
import AirportTaxis from "./pages/airport-taxis/AirportTaxis";

import StaysBlog from "./pages/stays/blog-pages/StaysBlog";
import StaysFilterPage from "./pages/stays/filter-pages/StaysFilterPage";
import StaysDetails from "./pages/stays/details-pages/StaysDetails";
import StaysBooking from "./pages/stays/booking-pages/StaysBooking";
import FlightsFilterPage from "./pages/flights/filter-pages/FlightsFilterPage";
import FlightBookingPage from "./pages/flights/booking-pages/FlightBookingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Dashboard with nested routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Stays />} />
            <Route path="stays" element={<Stays />} />
            <Route path="flights" element={<Flights />} />
            <Route path="flights-hotels" element={<FlightsHotels />} />
            <Route path="car-rentals" element={<CarRentals />} />
            <Route path="attractions" element={<Attractions />} />
            <Route path="airport-taxis" element={<AirportTaxis />} />
            {/* Stays */}
            <Route path="/stays-filter/:id" element={<StaysFilterPage />} />
            <Route path="/stays-details/:id" element={<StaysDetails />} />
            <Route path="/stays-blog" element={<StaysBlog />} />
            <Route path="/stays-booking/:id" element={<StaysBooking />} />

            {/* Flights */}
            <Route path="/flights-filter/:id" element={<FlightsFilterPage />} />
            <Route path="/flights-details/:id" element={<StaysDetails />} />
            <Route path="/flights-booking/:id" element={<FlightBookingPage />} />

            {/* FlightsHotels */}
            <Route path="/flights-hotels-filter/:id" element={<StaysFilterPage />} />
            <Route path="/flights-hotels-details/:id" element={<StaysDetails />} />
            <Route path="/flights-hotels-booking/:id" element={<StaysBooking />} />

            {/* Car Rentals */}
            <Route path="/car-rentals-filter/:id" element={<StaysFilterPage />} />
            <Route path="/car-rentals-details/:id" element={<StaysDetails />} />
            <Route path="/car-rentals-booking/:id" element={<StaysBooking />} />

            {/* Attractions */}
            <Route path="/attractions-filter/:id" element={<StaysFilterPage />} />
            <Route path="/attractions-details/:id" element={<StaysDetails />} />
            <Route path="/attractions-booking/:id" element={<StaysBooking />} />

            {/* Airport Taxis */}
            <Route path="/airport-taxis-filter/:id" element={<StaysFilterPage />} />
            <Route path="/airport-taxis-details/:id" element={<StaysDetails />} />
            <Route path="/airport-taxis-booking/:id" element={<StaysBooking />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
