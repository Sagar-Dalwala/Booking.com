import Joi from 'joi';

// Validation schema for creating an admin
export const createAdminSchema = Joi.object({
  businessName: Joi.string().min(3).max(50).required(),
  businessEmail: Joi.string().email().required(),
  businessContact: Joi.string().min(10).max(15).required(),
  businessAddress: Joi.string().min(5).max(100).required(),
  verificationStatus: Joi.string().valid('pending', 'approved', 'rejected').required(),
});

// Validation schema for static creation
export const staticCreateAdminSchema = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('admin', 'user').required(),
});
