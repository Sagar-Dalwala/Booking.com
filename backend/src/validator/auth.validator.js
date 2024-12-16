import Joi from 'joi';

// Validation schema for signUp (registration)
export const signUpSchema = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(), // You can add more password complexity if needed
});

// Validation schema for signIn (login)
export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(), // Ensure the password meets minimum length or other requirements
});

// No validation needed for signOut as it doesn't require a body, but if you want to validate headers, you can extend it.
export const signOutSchema = Joi.object({
  // No body validation needed for signOut
});
