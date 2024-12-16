import Joi from "joi";

export const paramsSchema = Joi.object()
  .pattern(
    /^(id|[a-zA-Z]+Id)$/, // Matches `id`, `roomId`, `staysId`, etc.
    Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        "string.pattern.base": "Invalid ID format.",
        "string.empty": "ID is required.",
      })
  )
  .unknown(true); // Allows other keys if needed
