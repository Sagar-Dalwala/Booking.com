import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const PersonalDetails = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Sagar Dalwala",
    displayName: "",
    email: "sagardalwala.vision@gmail.com",
    phoneNumber: "",
    dob: "",
    nationality: "",
    gender: "",
    address: "",
    passport: "",
  });

  const [isEditing, setIsEditing] = useState(null); // Tracks the field being edited
  const [isDialogOpen, setIsDialogOpen] = useState(false); // For profile picture dialog
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  ); // Default profile picture

  // Handle save action
  const handleSave = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
    setIsEditing(null);
  };

  // Handle cancel action
  const handleCancel = () => {
    setIsEditing(null);
  };

  // Handle profile picture delete
  const handleProfilePicDelete = () => {
    setProfilePic("https://via.placeholder.com/150");
    setIsDialogOpen(false);
  };

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold">Personal Details</h1>
        <p>{`Update your information and find out how it's used.`}</p>
      </div>

      {/* Content */}
      <div className="bg-white mt-6 p-4 sm:p-6 rounded-md shadow-md max-w-5xl mx-auto">
        {/* Profile Picture */}
        <div className="flex flex-col sm:flex-row items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          />
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium">{userDetails.name}</h3>
            <p className="text-gray-600">Genius Level 1</p>
          </div>
        </div>

        {/* Details Section */}
        <div>
          {Object.keys(userDetails).map((field) => (
            <div
              key={field}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b"
            >
              <div>
                <h4 className="text-gray-700 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </h4>
                {isEditing === field ? (
                  <input
                    type="text"
                    defaultValue={userDetails[field]}
                    onBlur={(e) => handleSave(field, e.target.value)} // Save on blur
                    className="border px-2 py-1 rounded-md mt-2 w-full sm:w-auto"
                  />
                ) : (
                  <p
                    className="text-gray-600 mt-1 cursor-pointer"
                    onDoubleClick={() => setIsEditing(field)} // Open input on double click
                  >
                    {userDetails[field] || `Add your ${field}`}
                  </p>
                )}
              </div>
              {isEditing === field ? (
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <Button
                    color="blue"
                    onClick={() => handleSave(field, userDetails[field])}
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button color="gray" onClick={handleCancel} size="sm">
                    Cancel
                  </Button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(field)}
                  className="text-blue-600 hover:underline text-sm mt-2 sm:mt-0"
                >
                  Edit
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Profile Picture Dialog */}
      <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)}>
        <DialogHeader>Edit Profile Picture</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="mt-2"
            />
            <button
              onClick={handleProfilePicDelete}
              className="text-red-500 hover:underline"
            >
              Delete Picture
            </button>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => setIsDialogOpen(false)}
            variant="outlined"
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default PersonalDetails;
