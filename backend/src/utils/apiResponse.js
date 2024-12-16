export const apiResponse = (
  res,
  status = 200,
  message = "Success",
  data = null,
  token = null
) => {
  const response = {
    status,
    message,
    success: status < 400,
    data: data,
    token: token,
  };

  res.status(status).json(response);
};
