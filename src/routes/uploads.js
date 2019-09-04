const express = require('express')
const Route = express.Router()

const uploadHelper = require('../helpers/aws')
const uploadController = require('../controllers/uploads')

Route
  .post('/', uploadHelper.upload.single('files'), uploadController.uploadAws)

module.exports = Route
