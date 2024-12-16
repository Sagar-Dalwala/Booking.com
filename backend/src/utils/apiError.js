export const apiError = (res, status = 500, message = "Internal Server Error", errors = []) => {
  const response = {
    status,
    message,
    success: false,
    data: null,
    errors,
  };

  res.status(status).json(response);
};
