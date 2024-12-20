import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { IoAirplaneOutline, IoCarSportOutline } from "react-icons/io5";
import { Button } from "@material-tailwind/react";
import { TbWorldSearch } from "react-icons/tb";
import { LuBedSingle } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { LiaCarSideSolid } from "react-icons/lia";

const AdminNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const [selected, setSelected] = useState("");

  // Define admin navigation items
  const navItems = [
    { label: "Stays", path: "/admin/stays", icon: <LuBedSingle /> },
    { label: "Flights", path: "/admin/flights", icon: <IoAirplaneOutline /> },
    {
      label: "Flights + Hotels",
      path: "/admin/flights-hotels",
      icon: <TbWorldSearch />,
    },
    { label: "Car Rentals", path: "/admin/car-rentals", icon: <IoCarSportOutline /> },
    { label: "Attractions", path: "/admin/attractions", icon: <GrGroup /> },
    {
      label: "Airport Taxis",
      path: "/admin/airport-taxis",
      icon: <LiaCarSideSolid />,
    },
  ];

  // Update the selected navigation item based on the current path
  useEffect(() => {
    const currentNavItem = navItems.find(
      (item) => item.path === location.pathname
    );
    if (currentNavItem) {
      setSelected(currentNavItem.label);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Run this effect whenever the location changes

  const handleNavigation = (label, path) => {
    setSelected(label); // Update state
    navigate(path); // Navigate to the selected path
  };

  return (
    <div className="flex items-center justify-around bg-[#003b94] text-white px-4 py-4">
      <ul className="flex flex-nowrap gap-2 md:gap-4 overflow-x-auto scrollbar-hidden">
        {navItems.map((item) => (
          <li key={item.label} className="flex-shrink-0">
            <Button
              variant="text"
              className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium text-white rounded-lg transition-all ${
                selected === item.label
                  ? "bg-blue-900 border border-white"
                  : "hover:bg-blue-800"
              }`}
              onClick={() => handleNavigation(item.label, item.path)}
            >
              <span className="text-xl md:text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNavigation;
