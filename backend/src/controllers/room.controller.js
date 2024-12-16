import { Room } from "../models/room.model.js";

import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { imageUrls } from "../utils/imageUrls.js";

//! add image URL funcation to this
export const createRoom = async (req, res) => {
  try {
    const {
      name,
      description,
      type,
      noOfGuests,
      price,
      amenities,
      images,
      numberOfRooms,
      status,
    } = req.body;

    const { stayId, adminId } = req.params;

    // const images = await imageUrls(req, res);

    const room = {
      name,
      description,
      type,
      noOfGuests,
      price,
      amenities,
      images,
      numberOfRooms,
      status,
    };

    const createdRoom = await Room.create({
      ...room,
      stay: stayId,
      admin: adminId,
    });

    if (!createdRoom) {
      return apiError(res, 500, "Something went wrong while creating room.");
    }

    return apiResponse(res, 200, "Room created successfully.", createdRoom);
  } catch (error) {
    console.log("Create Room Error: ", error);
    return apiError(res, 500, "Something went wrong while creating room.");
  }
};

//! add image URL funcation to this
export const updateRoom = async (req, res) => {
  try {
    const { id, adminId } = req.params;
    const {
      name,
      description,
      type,
      noOfGuests,
      price,
      amenities,
      images,
      numberOfRooms,
      status,
    } = req.body;

    const room = {
      name,
      description,
      type,
      noOfGuests,
      price,
      amenities,
      images,
      numberOfRooms,
      status,
    };

    const updatedRoom = await Room.findByIdAndUpdate(
      {
        _id: id,
        admin: adminId,
      },
      room,
      { new: true }
    );

    if (!updatedRoom) {
      return apiError(res, 404, "Room not found.");
    }

    return apiResponse(res, 200, "Room updated successfully.", updatedRoom);
  } catch (error) {
    console.log("Update Room Error: ", error);
    return apiError(res, 500, "Something went wrong while updating room.");
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const { id, adminId } = req.params;

    const deletedRoom = await Room.findByIdAndDelete({
      _id: id,
      admin: adminId,
    });

    if (!deletedRoom) {
      return apiError(res, 404, "Room not found.");
    }

    return apiResponse(res, 200, "Room deleted successfully.");
  } catch (error) {
    console.log("Delete Room Error: ", error);
    return apiError(res, 500, "Something went wrong while deleting room.");
  }
};

export const getRoomByRoomId = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await Room.findById(id);

    if (!room) {
      return apiError(res, 404, "Room not found.");
    }

    return apiResponse(res, 200, "Room fetched successfully.", room);
  } catch (error) {
    console.log("Get Room Error: ", error);
    return apiError(res, 500, "Something went wrong while getting room.");
  }
};

//! if user want to update only images -or- update images sprately
