const express = require('express')
const Route = express.Router()

const productsController = require('../controllers/products')

Route
  .get('/', productsController.getProducts)
  .post('/', productsController.addProduct)
  .patch('/:productid', productsController.updateProduct)
  .delete('/:productid', productsController.deleteProduct)

module.exports = Route
