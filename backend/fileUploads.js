const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid").v4;
const path = require("path");

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  accessKeyId: "AKIAYDHNIKLGS3TCVLIJ",
  secretAccessKey: "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",
});

const uploadSingleFile = multer({
  storage: multerS3({
    s3,
    bucket: "ubereats-media-anay",
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${uuid()}${ext}`);
    },
  }),
}).single("myFile");

module.exports = { uploadSingleFile };
