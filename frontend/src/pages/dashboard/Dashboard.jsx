import NavBar from "../../modules/navigation/NavBar";
import BookingNavigation from "../../modules/booking-navigation/BookingNavigation";
import Footer from "../../modules/footer/Footer";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <NavBar />
        <BookingNavigation />
        {/* Outlet will render the child route content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
