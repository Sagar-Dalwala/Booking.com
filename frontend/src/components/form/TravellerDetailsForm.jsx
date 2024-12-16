import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const TravellerDetailsForm = ({ adults }) => {
  const [travellers, setTravellers] = useState([]);

  // Adjust the number of travelers when the `adults` prop changes
  useEffect(() => {
    const updatedTravellers = Array.from({ length: adults }, (_, index) => ({
      firstName: "",
      lastName: "",
      gender: "",
      id: index,
    }));
    setTravellers(updatedTravellers);
  }, [adults]);

  const handleInputChange = (index, field, value) => {
    const updatedTravellers = [...travellers];
    updatedTravellers[index][field] = value;
    setTravellers(updatedTravellers);
  };

  const toggleEditing = (index) => {
    const updatedTravellers = [...travellers];
    updatedTravellers[index].isEditing = !updatedTravellers[index].isEditing;
    setTravellers(updatedTravellers);
  };

  return (
    <div className="max-w-screen-md font-booking py-8">
      <h2 className="text-2xl font-bookingBold text-gray-800">
        Traveller Details
      </h2>
      {travellers.map((traveller, index) => (
        <div
          key={traveller.id}
          className="border border-gray-300 p-4 rounded mt-4 flex md:flex-row flex-col"
        >
          {!traveller.isEditing ? (
            <>
              {/* Edit Form */}
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2 me-3"
                value={traveller.firstName}
                onChange={(e) =>
                  handleInputChange(index, "firstName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2 me-3"
                value={traveller.lastName}
                onChange={(e) =>
                  handleInputChange(index, "lastName", e.target.value)
                }
              />
              <select
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2 me-3"
                value={traveller.gender}
                onChange={(e) =>
                  handleInputChange(index, "gender", e.target.value)
                }
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <button
                onClick={() => toggleEditing(index)}
                className="bg-blue-800 text-white rounded p-2 h-[2.5em] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
              >
                Save
              </button>
            </>
          ) : (
            <>
              {/* View Mode */}
              <div className="flex gap-2 items-center">
                <CiUser className="w-6 h-6 text-gray-600" />
                <p className="text-gray-600">
                  {traveller.firstName} {traveller.lastName}
                </p>
                <p className="text-gray-600">{traveller.gender}</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="text-blue-800 hover:underline px-4 rounded w-24"
                  onClick={() => toggleEditing(index)}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TravellerDetailsForm;
