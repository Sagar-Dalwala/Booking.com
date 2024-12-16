export const preprocessFormData = (req, res, next) => {

  console.log(req.body.location);

  try {
    // Parse JSON fields that are sent as strings
    if (req.body.address) req.body.address = JSON.parse(req.body.address);
    if (req.body.availability)
      req.body.availability = JSON.parse(req.body.availability);
    if (req.body.location) req.body.location = JSON.parse(req.body.location);

    // Parse array fields that are sent as strings
    const arrayFields = ["amenities", "rules", "tags"];
    arrayFields.forEach((field) => {
      if (req.body[field]) req.body[field] = req.body[field].split(","); // Assuming comma-separated strings
    });

    // // Include images as an array of file paths or filenames
    // if (req.files && req.files.length > 0) {
    //   req.body.images = req.files.map((file) => file.originalname); // Use `file.path` if you need full file paths
    // }

    next();
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Invalid form data format", error: err.message });
  }
};
