const express = require('express')
const Route = express.Router()

const awsHelper = require('../helpers/aws')
const uploadController = require('../controllers/uploads')

Route
  .post('/aws', awsHelper.upload.single('files'), uploadController.uploadAws)
  .post('/cloudinary', uploadController.uploadCloudinary)

module.exports = Route
