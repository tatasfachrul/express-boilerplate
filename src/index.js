const express = require('express')
const Route = express.Router()

const products = require('./routes/products')
const categories = require('./routes/categories')
const uploads = require('./routes/uploads')

Route
  .use('/products', products)
  .use('/categories', categories)
  .use('/uploads', uploads)

module.exports = Route
