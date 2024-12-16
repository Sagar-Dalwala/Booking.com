import  { useState } from "react";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "Sagar Dalwala",
    email: "sagar@example.com",
    phone: "+91 9876543210",
    profileImage: "https://via.placeholder.com/150",
  });

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  return (
    <div className="bg-primary text-white p-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Profile Picture */}
          <div
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-white cursor-pointer"
            onClick={handleOpen}
          >
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div
            className="cursor-pointer"
            onClick={handleOpen}
          >
            <h1 className="text-2xl font-bold">{formData.name}</h1>
            <p className="text-lg">Genius Level 1</p>
            <div className="mt-2">
              <p className="text-sm">
                <span className="font-bookingBold">{formData.email}</span>
              </p>
              <p className="text-sm">
                <span className="font-bookingBold">{formData.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">You have 2 Genius rewards</h2>
          <p>Enjoy rewards and discounts on select stays and rental cars worldwide.</p>
          <div className="flex flex-wrap mt-4 space-x-4">
            {/* Reward Cards */}
            <div className="bg-white text-blue-600 p-4 rounded-md shadow-md text-center">
              <p className="text-sm font-semibold">10% off stays</p>
            </div>
            <div className="bg-white text-blue-600 p-4 rounded-md shadow-md text-center">
              <p className="text-sm font-semibold">10% off rental cars</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogBody>
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Picture Upload */}
            <div>
              <label htmlFor="profileImage" className="cursor-pointer">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
                  <img
                    src={formData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </label>
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {/* User Details Form */}
            <div className="w-full max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleOpen}
          >
            Save Changes
          </button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ProfileHeader;
