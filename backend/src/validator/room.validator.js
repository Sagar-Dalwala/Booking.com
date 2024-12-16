import Joi from "joi";

export const createRoomSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(5).max(1000).required(),
  type: Joi.string().min(3).max(50).required(),
  noOfGuests: Joi.number().required(),
  price: Joi.number().required(),
  amenities: Joi.array().items(Joi.string()).required(),
  images: Joi.array().items(Joi.string()).min(1).required(),
  numberOfRooms: Joi.number().required(),
  status: Joi.string().valid("available", "unavailable").default("available"),
});

export const updateRoomSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().min(5).max(1000),
  type: Joi.string().min(3).max(50),
  noOfGuests: Joi.number(),
  price: Joi.number(),
  amenities: Joi.array().items(Joi.string()),
  images: Joi.array().items(Joi.string()),
  numberOfRooms: Joi.number(),
  status: Joi.string().valid("available", "unavailable"),
  stay: Joi.string(),
});


