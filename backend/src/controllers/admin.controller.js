import { Admin } from "../models/admin.model.js";
import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { imageUrls } from "../utils/imageUrls.js";

export const createAdmin = (req, res) => {
  try {
    const {
      businessName,
      businessEmail,
      businessContact,
      businessAddress,
      verificationStatus,
      verificationDocuments,
    } = req.body;

    const existingAdmin = User.findOne({ businessEmail });

    if (existingAdmin) {
      return apiError(res, 400, "Admin Already Exists.");
    }

    const admin = Admin.create({
      businessName,
      businessEmail,
      businessContact,
      businessAddress,
      verificationStatus,
      verificationDocuments,
    });

    const createdAdmin = Admin.findById(admin._id).select("-password");

    if (!createAdmin) {
      return apiError(res, 500, "Something Went Wrong While Creating Admin.");
    }

    return apiResponse(res, 200, "Admin Created Successfully.", createdAdmin);
  } catch (error) {
    console.log("Create Admin Error: ", error);
    return apiError(res, 500, "Something Went Wrong While Creating Admin.");
  }
};

export const staticCreateAdmin = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return apiError(res, 400, "User Already Exists.");
    }

    const admin = await User.create({
      fullName,
      email,
      password,
      role,
    });

    const createdAdmin = await User.findById(admin._id).select("-password");

    if (!createdAdmin) {
      return apiError(res, 500, "Something Went Wrong While Creating Admin.");
    }

    return apiResponse(res, 200, "Admin Created Successfully.", createdAdmin);
  } catch (error) {
    console.error("Create Admin Error:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while creating admin." });
  }
};

export const deleteAdmin = (req, res) => {
  res.send("delete admin");
};

//* Admin Controllers :

export const updateAdmin = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const userId = req.user._id;
    const images = await imageUrls(req, res);

    const updatedAdmin = await User.findByIdAndUpdate(
      userId,
      {
        fullName,
        email,
        avatar: images[0],
      },
      {
        new: true,
      }
    );

    return apiResponse(res, 200, "Admin Updated Successfully.", updatedAdmin);
  } catch (error) {
    console.error("Update Admin Error: ", error);
    return apiError(res, 500, "Something Went Wrong While Updating Admin.");
  }
};