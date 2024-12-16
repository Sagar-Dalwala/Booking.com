import {
  FaCreditCard,
  FaWallet,
  FaUser,
  FaLock,
  FaUsers,
  FaCog,
  FaEnvelope,
  FaPlane,
  FaHeart,
  FaStar,
  FaQuestionCircle,
  FaShieldAlt,
  FaBalanceScale,
  FaBuilding,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProfileHeader from "./ProfileHeader";

const MyAccount = () => {
  const navigate = useNavigate(); // Initialize navigate

  const accountOptions = [
    {
      title: "Payment information",
      options: [
        { name: "Rewards & Wallet", icon: <FaWallet /> },
        { name: "Payment methods", icon: <FaCreditCard /> },
      ],
    },
    {
      title: "Manage account",
      options: [
        {
          name: "Personal details",
          icon: <FaUser />,
          onClick: () => navigate("/my-account/personal-details"), // Navigate to Personal Details
        },
        {
          name: "Security settings",
          icon: <FaLock />,
          onClick: () => navigate("/my-account/security-settings"),
        },
        {
          name: "Other travellers",
          icon: <FaUsers />,
          onClick: () => navigate("/my-account/other-travellers"),
        },
      ],
    },
    {
      title: "Preferences",
      options: [
        { name: "Customisation preferences", icon: <FaCog /> },
        { name: "Email preferences", icon: <FaEnvelope /> },
      ],
    },
    {
      title: "Travel activity",
      options: [
        {
          name: "Trips and bookings",
          icon: <FaPlane />,
          onClick: () => navigate("/my-account/trips-and-bookings"),
        },
        {
          name: "Saved lists",
          icon: <FaHeart />,
          onClick: () => navigate("/my-account/saved-lists"),
        },
        {
          name: "My reviews",
          icon: <FaStar />,
          onClick: () => navigate("/my-account/reviews"),
        },
      ],
    },
    {
      title: "Help and support",
      options: [
        {
          name: "Contact Customer service",
          icon: <FaQuestionCircle />,
        },
        { name: "Safety resource centre", icon: <FaShieldAlt /> },
        { name: "Dispute resolution", icon: <FaBalanceScale /> },
      ],
    },
    {
      title: "Legal and privacy",
      options: [
        {
          name: "Privacy and data management",
          icon: <FaShieldAlt />,
        },
        { name: "Content guidelines", icon: <FaBalanceScale /> },
      ],
    },
    {
      title: "Manage your property",
      options: [{ name: "List your property", icon: <FaBuilding /> }],
    },
  ];

  return (
    <>
      <ProfileHeader />
      <div className="bg-gray-100 min-h-screen p-4 md:p-8">
        {/* Complete Your Profile Section */}
        <div className="bg-white p-6 rounded-md shadow-sm mb-6 mt-6 max-w-screen-xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">Complete your profile</h2>
          <p className="text-gray-600 mb-4">
            Complete your profile and use this information for your next
            booking.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-900">
              Complete now
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Not now
            </button>
          </div>
        </div>

        {/* Account Options Grid */}
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sections */}
            {accountOptions.map((section, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.options.map((option, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 hover:text-gray-800 cursor-pointer"
                      onClick={option.onClick} // Handle click for navigation
                    >
                      <span className="mr-2">{option.icon}</span>
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
