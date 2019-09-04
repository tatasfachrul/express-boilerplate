const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const config = require('../configs/configs')

const s3Config = new AWS.S3({
  accessKeyId: config.AWS.accessKeyId,
  secretAccessKey: config.AWS.secretAccessKey,
  region: config.AWS.region,
  Bucket: config.AWS.bucket
})

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: config.AWS.bucket,
  acl: 'public-read',
  metadata: function (req, file, cb) {
    console.log(file.originalname)
    cb(null, { fieldName: file.fieldname })
  },
  key: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname.replace(/\s/g, '-'))
  }
})

const upload = multer({
  storage: multerS3Config
})

exports.upload = upload
