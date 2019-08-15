const categoryModels = require('../models/categories')

module.exports = {
  addCategory: (req, res) => {
    const { name } = req.body
    const data = {
      name,
      created_at: new Date(),
      updated_at: new Date()
    }

    categoryModels.addCategory(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
