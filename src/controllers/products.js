const productModels = require('../models/products')

module.exports = {
  getProducts: (req, res) => {
    productModels.getProducts()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
