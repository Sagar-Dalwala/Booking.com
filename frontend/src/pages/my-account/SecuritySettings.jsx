import  { useState } from "react";

const SecuritySettings = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleResetPassword = () => {
    alert("Password reset link has been sent to your email.");
  };

  const handleSignOut = () => {
    alert("You have been signed out.");
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(false);
    alert("Your account has been deleted.");
  };

  const toggleTwoFactorAuth = () => {
    setIsTwoFactorEnabled(!isTwoFactorEnabled);
    alert(
      `Two-factor authentication has been ${
        isTwoFactorEnabled ? "disabled" : "enabled"
      }.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold">Security Settings</h1>
        <p>Change your security settings, set up secure authentication, or delete your account.</p>
      </div>

      {/* Settings Options */}
      <div className="mt-6 max-w-5xl mx-auto bg-white rounded-md shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Manage Your Security</h2>
        <div className="space-y-6">
          {/* Reset Password */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="text-gray-800 font-medium">Reset Password</h3>
              <p className="text-gray-600">Change your password to secure your account.</p>
            </div>
            <button
              onClick={handleResetPassword}
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Reset Password
            </button>
          </div>

          {/* Two-Factor Authentication */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="text-gray-800 font-medium">Two-Factor Authentication</h3>
              <p className="text-gray-600">
                {isTwoFactorEnabled
                  ? "Two-factor authentication is enabled for your account."
                  : "Add an extra layer of security to your account."}
              </p>
            </div>
            <button
              onClick={toggleTwoFactorAuth}
              className={`px-4 py-2 rounded-md shadow-md transition ${
                isTwoFactorEnabled
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isTwoFactorEnabled ? "Disable 2FA" : "Enable 2FA"}
            </button>
          </div>

          {/* Sign Out */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="text-gray-800 font-medium">Sign Out</h3>
              <p className="text-gray-600">Sign out from all devices for security.</p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition"
            >
              Sign Out
            </button>
          </div>

          {/* Delete Account */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-800 font-medium">Delete Account</h3>
              <p className="text-red-600">
                Permanently delete your account. This action cannot be undone.
              </p>
            </div>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-6 shadow-md w-11/12 md:w-1/3">
            <h2 className="text-lg font-semibold text-red-600 mb-4">
              Are you sure you want to delete your account?
            </h2>
            <p className="text-gray-600 mb-6">
              This action is permanent and cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecuritySettings;
