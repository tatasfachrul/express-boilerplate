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
  },
  addProduct: (req, res) => {
    const { name, categoryid } = req.body
    const data = {
      name,
      categoryid,
      created_at: new Date(),
      updated_at: new Date()
    }
    productModels.addProduct(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  updateProduct: (req, res) => {
    const productid = req.params.productid
    const { name, categoryid } = req.body
    const data = {
      name,
      categoryid,
      updated_at: new Date()
    }

    productModels.updateProduct(data, productid)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteProduct: (req, res) => {
    const productid = req.params.productid

    productModels.deleteProduct(productid)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
