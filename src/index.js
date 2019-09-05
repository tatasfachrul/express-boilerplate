const express = require('express')
const Route = express.Router()

const products = require('./routes/products')
const categories = require('./routes/categories')
const uploads = require('./routes/uploads')
const auth = require('./routes/auth')

Route
  .use('/products', products)
  .use('/categories', categories)
  .use('/uploads', uploads)
  .use('/auth', auth)

module.exports = Route
