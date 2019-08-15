const express = require('express')
const Route = express.Router()

const products = require('./routes/products')
const categories = require('./routes/categories')

Route
  .use('/products', products)
  .use('/categories', categories)

module.exports = Route
