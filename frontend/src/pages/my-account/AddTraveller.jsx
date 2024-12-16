import  { useState } from "react";

const AddTraveller = () => {
  const [travellers, setTravellers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTraveller, setNewTraveller] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    nationality: "",
    gender: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTraveller({ ...newTraveller, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTravellers([...travellers, newTraveller]);
    setNewTraveller({
      fullName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      nationality: "",
      gender: "",
    });
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold">Manage Travellers</h1>
        <p>Add and manage traveller information for your bookings.</p>
      </div>

      {/* Add Traveller Button */}
      <div className="mt-6 max-w-5xl mx-auto flex justify-end">
        <button
          onClick={() => setIsFormVisible(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          + Add Traveller
        </button>
      </div>

      {/* Traveller Form */}
      {isFormVisible && (
        <div className="bg-white mt-6 p-6 rounded-md shadow-md max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Add Traveller Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={newTraveller.fullName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newTraveller.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newTraveller.phoneNumber}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={newTraveller.dob}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={newTraveller.nationality}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Enter nationality"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Gender</label>
                <select
                  name="gender"
                  value={newTraveller.gender}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                Save Traveller
              </button>
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Travellers List */}
      <div className="mt-6 max-w-5xl mx-auto">
        {travellers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travellers.map((traveller, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{traveller.fullName}</h3>
                <p className="text-gray-600">{traveller.email}</p>
                <p className="text-gray-600">{traveller.phoneNumber}</p>
                <p className="text-gray-600">{`DOB: ${traveller.dob}`}</p>
                <p className="text-gray-600">{`Nationality: ${traveller.nationality}`}</p>
                <p className="text-gray-600">{`Gender: ${traveller.gender}`}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-md shadow-md py-8 px-6">
            <h2 className="text-lg font-semibold mb-4">No Travellers Added</h2>
            <p className="text-gray-600">
              {`Click "Add Traveller" to add traveller details for your bookings.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTraveller;
