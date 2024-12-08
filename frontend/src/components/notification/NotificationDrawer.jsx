import { Drawer } from "@material-tailwind/react";

const NotificationDrawer = ({
  notificationDrawerOpen,
  setNotificationDrawerOpen,
}) => {
  return (
    <Drawer
      placement="bottom"
      open={notificationDrawerOpen}
      onClose={() => setNotificationDrawerOpen(false)}
      className="p-4 bg-[#003b94] text-white"
    >
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <ul>
        <li>No new notifications</li>
      </ul>
    </Drawer>
  );
};

export default NotificationDrawer;
