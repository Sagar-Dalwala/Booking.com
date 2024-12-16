import { useState } from "react";

const ContactDetailsForm = () => {
  const [data, setData] = useState({
    mobileNumber: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(true); // Controls edit/view mode

  const handleSave = () => {
    // Validate and save data (optional validation can be added here)
    if (data.mobileNumber && data.email) {
      setIsEditing(false);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="max-w-screen-md font-booking py-8">
      <div className="border border-gray-300 p-4 rounded">
        <h2 className="text-2xl font-bookingBold text-gray-800">
          Contact Details
        </h2>
        <div className="flex flex-col gap-2 mt-4">
          {isEditing ? (
            <>
              {/* Edit Form */}
              <input
                type="number"
                placeholder="Mobile Number"
                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={data.mobileNumber}
                onChange={(e) =>
                  setData({ ...data, mobileNumber: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded w-24"
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Display Mode */}
              <p className="text-gray-600">
                Mobile Number: {data.mobileNumber}
              </p>
              <p className="text-gray-600">Email: {data.email}</p>
              <div className="flex justify-end">
                <button
                  className="text-blue-800 hover:underline px-4 rounded w-24"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
