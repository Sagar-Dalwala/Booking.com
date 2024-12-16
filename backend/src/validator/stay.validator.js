import Joi from "joi";

export const createStaySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(5).max(1000).required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    postalCode: Joi.string().required(),
  }).required(),
  availability: Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().greater(Joi.ref("startDate")).required(),
  }),
  location: Joi.object({
    type: Joi.string().valid("Point").default("Point"),
    coordinates: Joi.array().items(Joi.number()).length(2), // longitude, latitude
  }),
  // images: Joi.array().items(Joi.string()).min(1).required(),
  propertyType: Joi.string().required(),
  locationType: Joi.string().required(),
  pricePerNight: Joi.number().required(),
  maxGuests: Joi.number().required(),
  numberOfRooms: Joi.number().default(1),
  amenities: Joi.array().items(Joi.string()).required(),

  rules: Joi.array().items(Joi.string()).default([]),
  tags: Joi.array().items(Joi.string()).default([]),
  status: Joi.string().valid("available", "unavailable").default("available"),
  paymentMethod: Joi.string()
    .valid("pay at property", "pay online", "cash")
    .default("pay at property"),
  cancellationPolicy: Joi.boolean().default(false),
  featured: Joi.boolean().default(false),
  views: Joi.number().default(0),
  admin: Joi.string().required(),
});

export const updateStaySchema = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().min(5).max(1000),
  address: Joi.object({
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    postalCode: Joi.string(),
  }),
  location: Joi.object({
    type: Joi.string().valid("Point").default("Point"),
    coordinates: Joi.array().items(Joi.number()).length(2), // longitude, latitude
  }),
  images: Joi.array().items(Joi.string()),
  propertyType: Joi.string(),
  locationType: Joi.string(),
  pricePerNight: Joi.number(),
  maxGuests: Joi.number(),
  numberOfRooms: Joi.number(),
  amenities: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      isAvailable: Joi.boolean(),
    })
  ),
  availability: Joi.array().items(
    Joi.object({
      startDate: Joi.date(),
      endDate: Joi.date().greater(Joi.ref("startDate")),
    })
  ),
  pricing: Joi.array().items(
    Joi.object({
      startDate: Joi.date(),
      endDate: Joi.date().greater(Joi.ref("startDate")),
      pricePerNight: Joi.number(),
    })
  ),
  rules: Joi.array().items(Joi.string()),
  tags: Joi.array().items(Joi.string()),
  featured: Joi.boolean(),
  status: Joi.string().valid("available", "unavailable"),
  paymentMethod: Joi.string().valid("pay at property", "pay online", "cash"),
  cancellationPolicy: { type: Boolean, default: false },
  views: Joi.number(),
  admin: Joi.string(),
})
  .min(1)
  .required(
    "name",
    "description",
    "address",
    "location",
    "images",
    "propertyType",
    "locationType",
    "pricePerNight",
    "maxGuests",
    "numberOfRooms",
    "amenities",
    "pricing",
    "availability",
    "rules",
    "tags",
    "featured",
    "status",
    "paymentMethod",
    "cancellationPolicy",
    "admin"
  );
