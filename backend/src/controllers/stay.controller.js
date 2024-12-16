import path from "path";

import { Stay } from "../models/stay.model.js";

import { imageUrls } from "../utils/imageUrls.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

//* Admin Side Stays
export const createStay = async (req, res) => {
  try {
    const {
      name,
      description,
      address,
      location,
      availability,
      propertyType,
      locationType,
      pricePerNight,
      maxGuests,
      numberOfRooms,
      amenities,
      rules,
      tags,
      featured,
      status,
      paymentMethod,
      cancellationPolicy,
      isVerified,
      admin,
      rating,
      bookings,
      notifications,
      views,
      currency,
    } = req.body;

    const parsedAddress =
      typeof address === "string" ? JSON.parse(address) : address;
    const parsedAvailability =
      typeof availability === "string"
        ? JSON.parse(availability)
        : availability;
    const parsedLocation =
      typeof location === "string" ? JSON.parse(location) : location;

    const images = await imageUrls(req, res);

    const stay = new Stay({
      name,
      description,
      address: parsedAddress,
      location: parsedLocation,
      availability: parsedAvailability,
      images,
      propertyType,
      locationType,
      pricePerNight,
      maxGuests,
      numberOfRooms,
      amenities,
      rules,
      tags,
      featured,
      status,
      paymentMethod,
      cancellationPolicy,
      isVerified,
      admin,
      rating,
      bookings,
      notifications,
      views,
      currency,
    });

    await stay
      .save()
      .then((createdStay) => {
        return apiResponse(res, 200, "Stay created successfully.", createdStay);
      })
      .catch((error) => {
        console.error("Error saving stay:", error);
        return apiError(res, 500, "Something went wrong while creating stay.");
      });
  } catch (error) {
    console.error("Error in create stay:", error);
    return apiError(res, 500, "Something went wrong while creating stay.");
  }
};

export const updateStay = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      address,
      location,
      propertyType,
      locationType,
      pricePerNight,
      maxGuests,
      numberOfRooms,
      amenities,
      availability,
      pricing,
      rules,
      tags,
      featured,
      status,
      paymentMethod,
      cancellationPolicy,
      isVerified,
      admin,
      rating,
      bookings,
      notifications,
      views,
      currency,
    } = req.body;

    const parsedAddress =
      typeof address === "string" ? JSON.parse(address) : address;
    const parsedAvailability =
      typeof availability === "string"
        ? JSON.parse(availability)
        : availability;
    const parsedLocation =
      typeof location === "string" ? JSON.parse(location) : location;

    const updatedStay = await Stay.findByIdAndUpdate(
      id,
      {
        name,
        description,
        address: parsedAddress,
        location: parsedLocation,
        propertyType,
        locationType,
        pricePerNight,
        maxGuests,
        numberOfRooms,
        amenities,
        availability: parsedAvailability,
        pricing,
        rules,
        tags,
        featured,
        status,
        paymentMethod,
        cancellationPolicy,
        isVerified,
        admin,
        rating,
        bookings,
        notifications,
        views,
        currency,
      },
      { new: true }
    );

    if (!updatedStay) {
      return apiError(res, 404, "Stay not found.");
    }

    return apiResponse(res, 200, "Stay updated successfully.", updatedStay);
  } catch (error) {
    console.log("Update Stay Error: ", error);
    return apiError(res, 500, "Something went wrong while updating stay.");
  }
};


//! also delete the image from cloudinary - do that in the backend with public Id
//! and also for if user update the images.


export const deleteStay = async (req, res) => {
  try {
    const { id } = req.params;

    const stay = await Stay.findById(id);

    if (stay && stay.images) {
      await deleteFromCloudinary(stay.images);
    }

    const deletedStay = await Stay.findByIdAndDelete(id);

    if (!deletedStay) {
      return apiError(res, 404, "Stay not found.");
    }

    return apiResponse(res, 200, "Stay deleted successfully.");
  } catch (error) {
    console.log("Delete Stay Error: ", error);
    return apiError(res, 500, "Something went wrong while deleting stay.");
  }
};

export const getStayByStayId = async (req, res) => {
  try {
    const { id } = req.params;

    const stay = await Stay.findById(id).populate("admin").lean(); // Using lean() to return plain JavaScript objects

    if (!stay) {
      return apiError(res, 404, "Stay not found.");
    }

    return apiResponse(res, 200, "Stay fetched successfully.", stay);
  } catch (error) {
    console.log("Get Stay Error: ", error);
    return apiError(res, 500, "Something went wrong while getting stay.");
  }
};

//! in this function i have to add room, bookings details , review & notification(optional).
export const getStays = async (req, res) => {
  try {
    const stays = await Stay.aggregate([
      // Match stays where admin matches the logged-in user
      { $match: { admin: req.user._id } },
      // Lookup admin details
      {
        $lookup: {
          from: "users", // Collection name for users
          localField: "admin",
          foreignField: "_id",
          as: "adminDetails",
        },
      },
      // Unwind adminDetails to make it a single object
      { $unwind: "$adminDetails" },
      // Lookup rooms for each stay (if needed)
      {
        $lookup: {
          from: "rooms", // Collection name for rooms
          localField: "_id",
          foreignField: "stay",
          as: "rooms",
        },
      },
      // Optionally, add a field to count the number of rooms
      {
        $addFields: {
          roomCount: { $size: "$rooms" },
        },
      },
      // Optionally, remove unnecessary fields
      {
        $project: {
          "adminDetails.password": 0, // Exclude admin password field
        },
      },
    ]);

    if (!stays || stays.length === 0) {
      return apiResponse(res, 404, "No stays found for this admin.");
    }

    return apiResponse(res, 200, "Stays fetched successfully.", stays);
  } catch (error) {
    console.log("Get Stays Error: ", error);
    return apiError(res, 500, "Something went wrong while getting stays.");
  }
};

//* User Side Stays
export const getSearchStays = async (req, res) => {
  res.send("search stays");
};

//? Get Property Type
export const getPropertyType = async (req, res) => {
  try {
    const propertyType = await Stay.find()
      .select("propertyType")
      .distinct("propertyType");

    if (!propertyType) {
      return apiError(res, 404, "Property type not found.");
    }

    return apiResponse(
      res,
      200,
      "Property type fetched successfully.",
      propertyType
    );
  } catch (error) {
    console.log("Get Property Type Stays Error: ", error);
    return apiError(
      res,
      500,
      "Something went wrong while getting property type stays."
    );
  }
};

//? Get Trending Destinations
export const getTrendingDestinations = async (req, res) => {
  try {
    const trendingDestinations = await Stay.aggregate([
      // Step 1: Filter properties with views > 0
      { $match: { views: { $gt: 0 } } },

      // Step 2: Group by city (or another field like state or country)
      {
        $group: {
          _id: "$address.city", // Group by city
          totalViews: { $sum: "$views" }, // Sum of views for the city
          averagePrice: { $avg: "$pricePerNight" }, // Average price in the city
        },
      },

      // Step 3: Sort by total views in descending order
      { $sort: { totalViews: -1 } },

      // Step 4: Limit to top 5 destinations
      { $limit: 5 },

      // Step 5: Rename fields for a cleaner response
      {
        $project: {
          city: "$_id",
          totalViews: 1,
          averagePrice: 1,
          _id: 0,
        },
      },
    ]);

    if (!trendingDestinations.length) {
      return apiError(res, 404, "Trending destinations not found.");
    }

    return apiResponse(
      res,
      200,
      "Trending destinations fetched successfully.",
      trendingDestinations
    );
  } catch (error) {
    console.error("Error fetching trending destinations:", error);
    return apiError(
      res,
      500,
      "Something went wrong while getting trending destinations."
    );
  }
};

//? Get Locations
export const getLocations = async (req, res) => {
  try {
    const locations = await Stay.aggregate([
      { $match: { address: { $exists: true } } },
      { $project: { address: 1 } },
      { $unwind: "$address" },
      { $group: { _id: "$address", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    if (!locations) {
      return apiError(res, 404, "Locations not found.");
    }

    return apiResponse(res, 200, "Locations fetched successfully.", locations);
  } catch (error) {
    console.log("Get Locations Stays Error: ", error);
    return apiError(
      res,
      500,
      "Something went wrong while getting locations stays."
    );
  }
};

//? Get Locations Type
export const getLocationsType = async (req, res) => {
  try {
    const { locationType } = req.params;

    const locations = await Stay.aggregate([
      { $match: { locationType: locationType } },
      { $project: { locationType: 1 } },
      { $unwind: "$locationType" },
      { $group: { _id: "$locationType", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    if (!locations) {
      return apiError(res, 404, "Locations not found.");
    }

    return apiResponse(res, 200, "Locations fetched successfully.", locations);
  } catch (error) {
    console.log("Error in get locations type: ", error);
    return apiError(
      res,
      500,
      "Something went wrong while getting locations type."
    );
  }
};

//? Get Stays By Search
export const getStaysBySearch = async (req, res) => {
  try {
    const { destination, checkIn, checkOut, adults, children } = req.body;

    if (!destination || !checkIn || !checkOut || !adults) {
      return apiError(res, 400, "Missing required search parameters.");
    }

    // Calculate total guests
    const totalGuests = adults + (children || 0);

    // Build the search query
    const query = {
      $and: [
        { "address.city": { $regex: destination, $options: "i" } }, // Destination match
        { maxGuests: { $gte: totalGuests } }, // Ensure stay can accommodate guests
        {
          availability: {
            $elemMatch: {
              startDate: { $lte: new Date(checkIn) }, // Check-in within range
              endDate: { $gte: new Date(checkOut) }, // Check-out within range
            },
          },
        },
      ],
    };

    // Fetch stays matching the criteria
    const stays = await Stay.find(query);

    if (!stays || stays.length === 0) {
      return apiError(res, 404, "No stays found matching the criteria.");
    }

    return apiResponse(res, 200, "Stays fetched successfully.", stays);
  } catch (error) {
    console.error("Error in getStaysBySearch: ", error);
    return apiError(
      res,
      500,
      "Something went wrong while fetching stays by search."
    );
  }
};

//? Get Filter Based on the filters
export const getFilterStays = async (req, res) => {
  try {
    const {
      minPrice,
      maxPrice,
      amenities,
      rating,
      propertyType,
      sortBy,
      reviews,
      bedPreferences,
      page = 1,
      limit = 10,
    } = req.query;

    let query = {};

    if (minPrice || maxPrice) {
      query.pricePerNight = {};
      if (minPrice) query.pricePerNight.$gte = minPrice;
      if (maxPrice) query.pricePerNight.$lte = maxPrice;
    }

    if (amenities && amenities.length > 0) {
      query["amenities.name"] = {
        $in: Array.isArray(amenities) ? amenities : [amenities],
      };
    }

    if (rating) {
      query.rating = { $gte: rating };
    }

    if (propertyType) {
      query.propertyType = {
        $in: Array.isArray(propertyType) ? propertyType : [propertyType],
      };
    }

    if (reviews) {
      query.reviews = { $gte: reviews };
    }

    if (bedPreferences) {
      query.bedPreferences = {
        $in: Array.isArray(bedPreferences) ? bedPreferences : [bedPreferences],
      };
    }

    let sort = {};
    if (sortBy === "priceLowToHigh") {
      sort.pricePerNight = 1;
    } else if (sortBy === "priceHighToLow") {
      sort.pricePerNight = -1;
    }

    const skip = (page - 1) * limit;

    const stays = await Stay.find(query).sort(sort).skip(skip).limit(limit);

    const totalStays = await Stay.countDocuments(query);

    return apiResponse(res, 200, "Stays fetched successfully.", {
      stays,
      totalStays,
      totalPages: Math.ceil(totalStays / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error in filterStays: ", error);
    return apiError(res, 500, "Something went wrong while filtering stays.");
  }
};

//? Get Filter Based On The Fields On Home Page Of Stays
export const getFilterStaysByField = async (req, res) => {
  try {
    const { filterBy, value, page = 1, limit = 10 } = req.query;

    // Pagination: Skip for pagination
    const skip = (page - 1) * limit;

    let query = {};

    switch (filterBy) {
      case "propertyType":
        // Filter based on property type
        if (value) {
          query.propertyType = value;
        }
        break;

      case "trendingDestinations":
        if (value) {
          query["address.city"] = value;
        }
        break;

      case "exploreLocations":
        if (value) {
          query["address.city"] = value;
        }
        break;

      case "tripPlanner":
        if (value) {
          query.locationType = value;
        }
        break;

      default:
        return apiError(res, 400, "Invalid filter type.");
    }

    // Query to get filtered stays based on the selected filter type
    const stays = await Stay.find(query).skip(skip).limit(limit);

    // Count total filtered stays for pagination
    const totalStays = await Stay.countDocuments(query);

    return apiResponse(res, 200, "Stays fetched successfully.", {
      stays,
      totalStays,
      totalPages: Math.ceil(totalStays / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error in filterStaysByField: ", error);
    return apiError(
      res,
      500,
      "Something went wrong while filtering stays by field."
    );
  }
};

//! Testing
export const testingImageUpload = async (req, res) => {
  try {
    // const imagesPath = req.files.map((file) => path.resolve(file.path));

    // const images = await uploadOnCloudinary(imagesPath);

    // if (!images || images.length === 0) {
    //   return res.status(500).json({
    //     message: "No images uploaded",
    //   });
    // }

    // const imageUrls = images.map((image) => image.url);

    const images = await imageUrls(req, res);

    res.status(200).json({
      message: "Images uploaded successfully",
      images,
    });
  } catch (error) {
    console.error("Error in testing image upload:", error.message);
    res.status(500).json({
      message: "Failed to upload images",
      error: error.message,
    });
  }
};
