/* eslint-disable react/prop-types */
import PropertyCard from "../../components/card/PropertyCard";
import PropertyTabel from "../../components/table/PropertyTabel";

const PropertyAvalibility = ({ handleOnClickNavigate }) => {
  const data = [
    {
      id: 1,
      roomType: "Deluxe King Room",
      noOfGuests: "3 Guests",
      price: "₹ 2475 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 2,
      roomType: "Budget Double or Twin Room",
      noOfGuests: "4 Guests",
      price: "₹ 3600 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 3,
      roomType: "Deluxe Double Room",
      noOfGuests: "2 Guests",
      price: "₹ 5000 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 4,
      roomType: "Deluxe King Room",
      noOfGuests: "2 Guests",
      price: "₹ 5000 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 6,
      roomType: "Deluxe Room",
      noOfGuests: "2 Guests",
      price: "₹ 5000 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 7,
      roomType: "Deluxe Room",
      noOfGuests: "2 Guests",
      price: "₹ 5000 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 8,
      roomType: "Deluxe Room",
      noOfGuests: "2 Guests",
      price: "₹ 5000 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
    {
      id: 99,
      roomType: "Deluxe Room",
      noOfGuests: "2 Guests",
      price: "₹ 5000 / night",
      yourChoices: [
        "breakfast",
        "no credit card required",
        "free cancellation",
        "no prepayment",
        "free wifi",
        "only 1 room left",
      ],
      selectRooms: "Select Rooms",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto" id="availability-section">
      <h2 className="text-2xl font-bold">Avalibility</h2>
      <p className="text-gray-700">All avalible rooms</p>

      <div className="my-3 lg:block hidden">
        <PropertyTabel
          data={data}
          handleOnClickNavigate={handleOnClickNavigate}
        />
      </div>

      <div className="my-3 lg:hidden block">
        <PropertyCard
          data={data}
          handleOnClickNavigate={handleOnClickNavigate}
        />
      </div>
    </div>
  );
};

export default PropertyAvalibility;
