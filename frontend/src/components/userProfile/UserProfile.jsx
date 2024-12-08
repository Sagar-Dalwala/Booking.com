import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const UserProfile = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="text"
          className="p-2 text-white bg-transparent hover:bg-blue-800"
        >
          <span className="font-bold">User Profile</span>
        </Button>
      </MenuHandler>
      <MenuList className="bg-white text-black">
        <MenuItem>My Account</MenuItem>
        <MenuItem>Bookings and Trips</MenuItem>
        <MenuItem>Reviews</MenuItem>
        <MenuItem>Saved</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;
