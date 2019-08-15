const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/categories')

Route
  .post('/', categoryController.addCategory)

module.exports = Route
