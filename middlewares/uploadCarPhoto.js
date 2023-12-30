const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: req => {
    return {
      folder: 'cars',
      allowed_formats: ['jpg', 'jpeg', 'png', 'avif', 'webp'],
      public_id: `${req.user._id}`,
      transformation: { width: 600, height: 400, crop: 'fill' },
    };
  },
});

const uploadCarPhoto = multer({ storage });

module.exports = uploadCarPhoto;
