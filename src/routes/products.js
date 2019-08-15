const express = require('express')
const Route = express.Router()

const productsController = require('../controllers/products')

Route.get('/', productsController.getProducts)

module.exports = Route
