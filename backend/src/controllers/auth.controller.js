import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";

//* Generate Auth Token - To Authorize User
const generateAuthToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const token = user.generateAuthToken();

    await user.save({ validateBeforeSave: false });

    return token;
  } catch (error) {
    console.error("Error generating token: ", error);
    throw new Error("Something Went Wrong While Generating Token.");
  }
};

//* Sign Up Controller
export const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return apiError(res, 400, "User Already Exists.");
    }

    const user = await User.create({
      fullName,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      return apiError(res, 500, "Something Went Wrong While Signing Up.");
    }

    return apiResponse(res, 200, "User Created Successfully.", createdUser);
  } catch (error) {
    console.error("SignUp Error: ", error);
    return apiError(res, 500, "Something Went Wrong While Signing Up.");
  }
};

//* Sign In Controller
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return apiError(res, 404, "User Not Found.");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return apiError(res, 401, "Invalid user credentials");
    }

    const token = await generateAuthToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("token", token, options)
      .json(
        apiResponse(
          res,
          200,
          "User Logged In Successfully.",
          loggedInUser,
          token
        )
      );
  } catch (error) {
    console.error("SignIn Error: ", error.message, error.stack);
    return apiError(res, 500, "Something Went Wrong While Logging In.");
  }
};

//* Sign Out Controller
export const signOut = async (req, res) => {
  try {
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("token", options)
      .json(apiResponse(res, 200, "User Logged Out Successfully."));
  } catch (error) {
    console.error("SignOut Error: ", error);
    return apiError(res, 500, "Something Went Wrong While Logging Out.");
  }
};
