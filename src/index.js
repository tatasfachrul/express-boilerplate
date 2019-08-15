const express = require('express')
const Route = express.Router()

const products = require('./routes/products')

Route
  .use('/products', products)

module.exports = Route
