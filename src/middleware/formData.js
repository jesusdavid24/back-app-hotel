const busboy = require("busboy");
const cloudinary = require('cloudinary').v2;

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware
const formData = (req, res, next) => {
  let uploadingFile = false;
  let countFiles = 0;

  const bb = busboy({ headers: req.headers });
  req.body = {};

  const done = () => {
    if (uploadingFile) return;
    if (countFiles > 0) return;

    next();
  };

  // Capturar las partes que no son archivos
  bb.on('field', (key, val) => {
    req.body[key] = val;
  });

  // Capturar las partes que son archivos
  bb.on('file', (key, stream) => {
    uploadingFile = true;
    countFiles++;
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: 'hotel-preset' },
      (err, result) => {
        if (err) throw new Error('Something went wrong uploading to Cloudinary');

        req.body[key] = result?.secure_url;
        uploadingFile = false;
        countFiles--;

        done();
      }
    );

    stream.on('data', (data) => {
      cloud.write(data);
    });

    stream.on('end', () => {
      cloud.end();
    });
  });

  bb.on('finish', () => {
    done();
  });

  req.pipe(bb);
};

module.exports = { formData };
