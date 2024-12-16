import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../../modules/navigation/NavBar";
import AdminNavigation from "../admin-navigation/AdminNavigation";
import { useAuthContext } from "../../../context/AuthContextProvider";


const AdminDashBoard = () => {
  const location = useLocation();

  const { authUser, logout } = useAuthContext(); 

  //* Define routes where BookingNavigation should be hidden
  const hideBookingNavigationRoutes = ["/admin/signin", "/admin/signup"];

  const isBookingNavigationHidden = hideBookingNavigationRoutes.some((route) =>
    location.pathname.match(new RegExp(route.replace(":id", "\\d+")))
  );

  return (
    <div>
      <main className="flex-grow">
        <NavBar userType="admin" authUser={authUser} logout={logout} />
        {!isBookingNavigationHidden && <AdminNavigation />}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashBoard;
