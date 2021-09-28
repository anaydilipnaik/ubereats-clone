const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid").v4;
const path = require("path");

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  AWS_ACCESS_KEY_ID: "AKIAYDHNIKLGYPJULV7A",
  AWS_SECRET_ACCESS_KEY: "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",
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
