/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@material-tailwind/react";

import { GoQuestion } from "react-icons/go";
import { MdNotificationsNone } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

import ActionTooltip from "../../components/tooltip/ActionTooltip";
import NotificationDropDown from "../../components/notification/NotificationDropDown";
import UserProfile from "../../components/userProfile/userProfile";

import CurrencyModal from "../../components/currency/CurrencyModal";
import LanguageModal from "../../components/language/LanguageModal";

import MenuDrawer from "../../components/menu/MenuDrawer";
import NotificationDrawer from "../../components/notification/NotificationDrawer";
import ProfileDrawer from "../../components/profile/ProfileDrawer";
import { Link, useNavigate } from "react-router-dom";


const NavBar = ({ logout, authUser }) => {

  const navigate = useNavigate();
  const userType = authUser?.data?.role;
  const loggedIn = authUser !== null;

  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  const routes = {
    logo: userType === "admin" ? "/admin" : "/",
    signup: userType === "admin" ? "/admin/signup" : "/signup",
    signin: userType === "admin" ? "/admin/signin" : "/signin",
    notifications:
      userType === "admin" ? "/admin/notifications" : "/notifications",
    profile: userType === "admin" ? "/admin/profile" : "/profile",
  };

  const handleLogout = () => {
    logout(); // Clear auth state
    navigate("/admin/signin"); // Redirect to sign-in page
  };

  return (
    <div className="flex justify-between items-center bg-[#003b94] text-white p-4 w-full lg:justify-around">
      {/* //* Logo */}
      <Link to={routes.logo}>
        <h1 className="text-2xl font-bold cursor-pointer">
          {userType === "admin" ? "Admin Panel" : "Booking.com"}
        </h1>
      </Link>

      {/* //* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-4">
        {/* Currency */}
        {userType !== "admin" && (
          <li className="cursor-pointer hover:underline">
            <ActionTooltip content="Select Your Currency" placement="bottom">
              <Button
                className="p-2 text-white bg-transparent hover:bg-blue-800"
                variant="text"
                onClick={() => setCurrencyModalOpen(true)}
              >
                INR
              </Button>
            </ActionTooltip>
          </li>
        )}

        {/* Language */}
        {userType !== "admin" && (
          <li className="cursor-pointer hover:underline">
            <ActionTooltip content="Select Your Language" placement="bottom">
              <Button
                className="p-2 text-white bg-transparent hover:bg-blue-800"
                variant="text"
                onClick={() => setLanguageModalOpen(true)}
              >
                EN
              </Button>
            </ActionTooltip>
          </li>
        )}

        {/* Customer Support */}
        {userType !== "admin" && (
          <li>
            <ActionTooltip
              content="Contact Customer Support"
              placement="bottom"
            >
              <Button
                className="p-2 text-white bg-transparent hover:bg-blue-800"
                variant="text"
                size="sm"
              >
                <GoQuestion className="w-6 h-6" />
              </Button>
            </ActionTooltip>
          </li>
        )}

        {/* Notifications */}
        {loggedIn && (
          <li className="relative">
            <ActionTooltip content="View Your Notifications" placement="bottom">
              <Button
                className="p-2 text-white bg-transparent hover:bg-blue-800"
                variant="text"
                size="sm"
                onClick={() =>
                  setNotificationDropdownOpen(!notificationDropdownOpen)
                }
              >
                <MdNotificationsNone className="w-6 h-6" />
              </Button>
            </ActionTooltip>

            {/* Notification Dropdown */}
            {notificationDropdownOpen && <NotificationDropDown />}
          </li>
        )}

        {/* Profile or Auth Links */}
        {loggedIn ? (
          <UserProfile authUser={authUser} handleLogout={handleLogout} />
        ) : (
          <>
            <li>
              <Link to={routes.signup}>
                <Button
                  className="p-2 text-blue-900 bg-white hover:bg-blue-900 hover:text-white"
                  variant="text"
                >
                  Register
                </Button>
              </Link>
            </li>
            <li>
              <Link to={routes.signin}>
                <Button
                  className="p-2 text-white bg-transparent hover:bg-blue-900"
                  variant="text"
                  size="sm"
                >
                  Login
                </Button>
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* //* Mobile Menu Icons */}
      <div className="flex flex-end lg:hidden gap-2">
        {/* Notifications */}
        <Button
          className="p-2 text-white bg-transparent hover:bg-blue-800"
          onClick={() => setNotificationDrawerOpen(true)}
        >
          <MdNotificationsNone className="w-6 h-6" />
        </Button>

        {/* Profile */}
        {loggedIn && (
          <Button
            className="p-2 text-white bg-transparent hover:bg-blue-800"
            onClick={() => setProfileDrawerOpen(true)}
          >
            <CgProfile className="w-6 h-6" />
          </Button>
        )}

        {/* Menu */}
        <Button
          className="p-2 text-white bg-transparent hover:bg-blue-800"
          onClick={() => setMenuDrawerOpen(true)}
        >
          <HiMenuAlt3 className="w-6 h-6" />
        </Button>
      </div>

      {/* Currency Modal */}
      <CurrencyModal
        currencyModalOpen={currencyModalOpen}
        setCurrencyModalOpen={setCurrencyModalOpen}
      />

      {/* Language Modal */}
      <LanguageModal
        languageModalOpen={languageModalOpen}
        setLanguageModalOpen={setLanguageModalOpen}
      />


      {/* Menu Drawer */}
      <MenuDrawer
        menuDrawerOpen={menuDrawerOpen}
        setMenuDrawerOpen={setMenuDrawerOpen}
        loggedIn={loggedIn}
        authUser={authUser}
      />

      {/* Notifications Drawer */}
      <NotificationDrawer
        notificationDrawerOpen={notificationDrawerOpen}
        setNotificationDrawerOpen={setNotificationDrawerOpen}
      />

      {/* Profile Drawer */}
      <ProfileDrawer
        profileDrawerOpen={profileDrawerOpen}
        setProfileDrawerOpen={setProfileDrawerOpen}
        authUser={authUser}
      />
    </div>
  );
};

export default NavBar;
