import "./App.css";

import SignInPage from "./pages/auth/signin/SignInPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

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

import AdminDashBoard from "./pages/admin/admin-dashboard/AdminDashBoard";
import AdminStays from "./pages/admin/admin-stays/AdminStays";

import MyAccount from "./pages/my-account/MyAccount";
import PersonalDetails from "./pages/my-account/PersonalDetails";
import SecuritySettings from "./pages/my-account/SecuritySettings";
import AddTraveller from "./pages/my-account/AddTraveller";
import TripsAndBookings from "./pages/my-account/TripsAndBookings";
import SavedLists from "./pages/my-account/SavedLists";
import Reviews from "./pages/my-account/Reviews";

import ResetPasswordPage from "./pages/auth/reset-password/ResetPassword";
import AdminLoginPage from "./modules/admin/admin-login/AdminLoginPage";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Dashboard with nested routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Stays />} />

            {/* My-Account Routes */}
            <Route path="/my-account" element={<MyAccount />} />
            <Route
              path="/my-account/personal-details"
              element={<PersonalDetails />}
            />
            <Route
              path="/my-account/security-settings"
              element={<SecuritySettings />}
            />
            <Route
              path="/my-account/other-travellers"
              element={<AddTraveller />}
            />
            <Route
              path="/my-account/trips-and-bookings"
              element={<TripsAndBookings />}
            />
            <Route path="/my-account/saved-lists" element={<SavedLists />} />
            <Route path="/my-account/reviews" element={<Reviews />} />

            {/* Booking Navigation Routes */}
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
            <Route path="/flights-booking/:id" element={<StaysBooking />} />

            {/* FlightsHotels */}
            <Route
              path="/flights-hotels-filter/:id"
              element={<StaysFilterPage />}
            />
            <Route
              path="/flights-hotels-details/:id"
              element={<StaysDetails />}
            />
            <Route
              path="/flights-hotels-booking/:id"
              element={<StaysBooking />}
            />

            {/* Car Rentals */}
            <Route
              path="/car-rentals-filter/:id"
              element={<StaysFilterPage />}
            />
            <Route path="/car-rentals-details/:id" element={<StaysDetails />} />
            <Route path="/car-rentals-booking/:id" element={<StaysBooking />} />

            {/* Attractions */}
            <Route
              path="/attractions-filter/:id"
              element={<StaysFilterPage />}
            />
            <Route path="/attractions-details/:id" element={<StaysDetails />} />
            <Route path="/attractions-booking/:id" element={<StaysBooking />} />

            {/* Airport Taxis */}
            <Route
              path="/airport-taxis-filter/:id"
              element={<StaysFilterPage />}
            />
            <Route
              path="/airport-taxis-details/:id"
              element={<StaysDetails />}
            />
            <Route
              path="/airport-taxis-booking/:id"
              element={<StaysBooking />}
            />
          </Route>

          {/* Admin Dashboard with nested routes */}
          <Route path="/admin" element={<AdminDashBoard />}>
            <Route index element={<AdminStays />} />

            <Route path="/admin/signin" element={<AdminLoginPage />} />
            <Route path="/admin/signup" element={<SignUpPage />} />

            <Route path="/admin/stays" element={<AdminStays />} />
            <Route path="/admin/flights" element={<div>Admin Flights</div>} />
            <Route
              path="/admin/flights-hotels"
              element={<div>Admin FlightsHotels</div>}
            />
            <Route
              path="/admin/attractions"
              element={<div>Admin Attractions</div>}
            />
            <Route
              path="/admin/airport-taxis"
              element={<div>Admin AirportTaxis</div>}
            />
            <Route
              path="/admin/car-rentals"
              element={<div>Admin Car Rentals</div>}
            />
            <Route path="/admin/users" element={<div>Admin Users</div>} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
