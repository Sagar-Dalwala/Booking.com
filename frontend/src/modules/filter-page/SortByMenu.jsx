/* eslint-disable react/prop-types */
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import { LuArrowDownUp } from "react-icons/lu"


const SortByMenu = ({ handleSortChange, sortOption }) => {
  return (
    <>
        <Menu>
          <MenuHandler>
            <Button
              variant="outlined"
              className="rounded-full border border-gray-600 p-2 flex gap-2 items-center shadow-md text-gray-600"
            >
              <LuArrowDownUp className="w-5 h-5" /> Sort by:{" "}
              {sortOption || "Top picks"}
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              onClick={() =>
                handleSortChange({ target: { value: "priceLowHigh" } })
              }
            >
              Price: Low to High
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleSortChange({ target: { value: "priceHighLow" } })
              }
            >
              Price: High to Low
            </MenuItem>
            <MenuItem
              onClick={() => handleSortChange({ target: { value: "rating" } })}
            >
              Rating
            </MenuItem>
          </MenuList>
        </Menu>
    </>
  )
}

export default SortByMenu