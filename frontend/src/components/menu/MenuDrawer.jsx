import { Button, Drawer } from "@material-tailwind/react";

const MenuDrawer = ({ menuDrawerOpen, setMenuDrawerOpen, loggedIn }) => {
  return (
    <Drawer
      placement="bottom"
      open={menuDrawerOpen}
      onClose={() => setMenuDrawerOpen(false)}
      className="p-4 bg-[#003b94] text-white"
    >
      <ul className="flex flex-col items-start gap-4">
        {loggedIn ? (
          <>
            <li>
              <Button variant="text" className="text-white">
                Home
              </Button>
            </li>
            <li>
              <Button variant="text" className="text-white">
                About
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button variant="text" className="text-blue-900 bg-white">
                Register
              </Button>
            </li>
            <li>
              <Button variant="text" className="text-white">
                Login
              </Button>
            </li>
          </>
        )}
      </ul>
    </Drawer>
  );
};

export default MenuDrawer;
