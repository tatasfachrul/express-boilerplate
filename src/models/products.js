const conn = require('../configs/db')

module.exports = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT p.productid, p.name AS product, c.name AS category, p.created_at, p.updated_at FROM product p JOIN category c WHERE p.categoryid = c.categoryid', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}
