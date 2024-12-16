/* eslint-disable react/prop-types */
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ authUser, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuHandler>
        <img
          src={authUser?.data?.avatar}
          className="object-cover h-10 w-10 rounded-full cursor-pointer border border-gray-900"
          alt="User Avatar"
        />
      </MenuHandler>
      <MenuList className="bg-white text-black">
        {authUser?.data?.role === "user" && (
          <>
            <MenuItem onClick={() => navigate("/my-account")}>
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/my-account/trips-and-bookings")}
            >
              Bookings and Trips
            </MenuItem>
            <MenuItem onClick={() => navigate("/my-account/reviews")}>
              Reviews
            </MenuItem>
            <MenuItem onClick={() => navigate("/my-account/saved")}>
              Saved
            </MenuItem>
          </>
        )}
        <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;
