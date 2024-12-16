import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);/
    cb(null, file.originalname); 
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB in bytes
    files: 10, // Maximum number of files
  },
});

export const upload = multer({ storage });
