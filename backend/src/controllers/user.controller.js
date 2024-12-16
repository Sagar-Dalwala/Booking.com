import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";

//* Get Authenticated User Controller
export const getAuthUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return apiError(res, 404, "User Not Found.");
    }

    return apiResponse(res, 200, "User Found Successfully.", user);
  } catch (error) {
    console.log("Get Authenticated User Error: ", error);
    return apiError(
      res,
      500,
      "Something Went Wrong While Getting Authenticated User."
    );
  }
};

export const addPersonalDetails = async (req, res) => {
}

export const editPersonalDetails = async (req, res) => {}

export const getPersonalDetails = async (req, res) => {}

export const editUserProfilePicture = async (req, res) => {}

export const deleteUserProfilePicture = async (req, res) => {}

export const deleteUser = async (req, res) => {}

//* Add Property History Controller
export const addToHistory = async (req, res) => {
  try {
    const { stayId: propertyId } = req.params;
    const userId = req.user._id;

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const existingHistory = user.history.find(
      (historyItem) => historyItem.stay.toString() === propertyId.toString()
    );
    if (existingHistory) {
      return apiResponse(res, 200, "Property already in history.");
    }

    user.history.push({ stay: propertyId });

    await user.save();

    return apiResponse(res, 200, "Property added to history.");
  } catch (error) {
    console.error("Error adding property to history: ", error);
    return apiError(
      res,
      500,
      "Something went wrong while adding property to history."
    );
  }
};

//* Get User History Controller
export const getUserStayHistory = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("history.stay");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return apiResponse(
      res,
      200,
      "User history fetched successfully.",
      user.history
    );
  } catch (error) {
    console.error("Error fetching user history: ", error);
    return apiError(res, 500, "Something went wrong while fetching history.");
  }
};

//* Add Property to Saved Controller

export const addToSaved = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return apiError(res, 400, "Missing required parameters.");
    }

    const { stayId: propertyId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return apiError(res, 404, "User not found.");
    }

    // Check if the property is already saved
    const existingSaved = user.savedStays.find(
      (savedItem) => savedItem.stay === propertyId
    );

    if (existingSaved) {
      return apiResponse(res, 200, "Property already in saved.");
    }

    // Add the property to the saved list
    user.savedStays.push(propertyId);

    await user.save();

    return apiResponse(res, 200, "Property added to saved.");
  } catch (error) {
    console.log("Error adding property to saved: ", error);
    return apiError(res, 500, "Something went wrong while adding property.");
  }
};

export const removeFromSaved = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return apiError(res, 400, "Missing required parameters.");
    }

    const { stayId: propertyId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return apiError(res, 404, "User not found.");
    }

    // Remove the property from the saved list
    user.savedStays = user.savedStays.filter(
      (savedItem) => savedItem.stay !== propertyId
    );

    await user.save();

    return apiResponse(res, 200, "Property removed from saved.");
  } catch (error) {
    console.log("Error removing property from saved: ", error);
    return apiError(res, 500, "Something went wrong while removing property.");
  }
};

//* Get User Saved Controller
export const getUserSavedStays = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("savedStays.stay");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return apiResponse(
      res,
      200,
      "User saved properties fetched successfully.",
      user.savedStays
    );
  } catch (error) {
    console.error("Error fetching user saved properties: ", error);
    return apiError(res, 500, "Something went wrong while fetching saved.");
  }
};
