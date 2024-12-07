import NavBar from "../../modules/navigation/NavBar";
import BookingNavigation from "../../modules/booking-navigation/BookingNavigation";
import Footer from "../../modules/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  //* Define routes where BookingNavigation should be hidden
  const hideBookingNavigationRoutes = ["/stays-booking/:id"];
  const isBookingNavigationHidden = hideBookingNavigationRoutes.some((route) =>
    location.pathname.match(new RegExp(route.replace(":id", "\\d+")))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <NavBar />
        {!isBookingNavigationHidden && <BookingNavigation />}
        {/* Outlet will render the child route content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
