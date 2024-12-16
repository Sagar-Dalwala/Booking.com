import NavBar from "../../modules/navigation/NavBar";
import BookingNavigation from "../../modules/booking-navigation/BookingNavigation";
import Footer from "../../modules/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const location = useLocation();

  const { user } = useUser();

  console.log(user);

  //! so for passaword i will not store in DB i will use token for that CLERK
  /* 
    user.fullName
    user.emailAddresses[0].emailAddress
    user.primaryEmailAddress?.emailAddress
    user.imageUrl


  */

  //* Define routes where BookingNavigation should be hidden
  const hideBookingNavigationRoutes = [
    "/stays-booking/:id",
    "/flights-booking/:id",
    "/my-account",
    "/my-account/*",
  ];
  const isBookingNavigationHidden = hideBookingNavigationRoutes.some((route) =>
    location.pathname.match(new RegExp(route.replace(":id", "\\d+")))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <NavBar userType="user" />
        {!isBookingNavigationHidden && <BookingNavigation />}
        {/* Outlet will render the child route content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
