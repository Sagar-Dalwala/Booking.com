/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";

const PropertyCard = ({ ...props }) => {
  return (
    <div className="max-w-3xl rounded overflow-hidden font-booking">
      {props.data.map((item) => (
        <div className="grid grid-cols-1" key={item.id}>
          <div className="relative flex flex-col my-1 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer">
            <div className="px-4">
              <div className="text-blue-800 text-lg font-bookingBold underline py-1">
                {item.roomType}
              </div>
              <p className="text-gray-700 text-md">
                Price for up to {item.noOfGuests}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-700 text-md font-bookingBold">
                  {item.price}
                </span>
                <span className="text-gray-700 text-md"> per night</span>
              </p>

              {item.yourChoices.map((choice) => (
                <p key={choice} className="text-gray-700 text-md">
                  {" "}
                  *{choice}
                </p>
              ))}

              <div className="flex justify-end py-2">
                <Button
                  className="font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
                  variant="text"
                  color="blue"
                  onClick={() => {
                    props.handleOnClickNavigate(item);
                    console.log(item);
                  }}
                >
                  Select & Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
