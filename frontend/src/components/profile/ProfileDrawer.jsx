import { Drawer } from "@material-tailwind/react";

const ProfileDrawer = ({ profileDrawerOpen, setProfileDrawerOpen }) => {
  return (
    <Drawer
      placement="bottom"
      open={profileDrawerOpen}
      onClose={() => setProfileDrawerOpen(false)}
      className="p-4 bg-[#003b94] text-white"
    >
      <h2 className="text-lg font-bold mb-4">Profile</h2>
      <ul>
        <li>My Account</li>
        <li>My Bookings</li>
        <li>Trips</li>
        <li>Sign Out</li>
      </ul>
    </Drawer>
  );
};

export default ProfileDrawer;
