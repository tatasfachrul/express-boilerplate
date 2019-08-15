const conn = require('../configs/db')

module.exports = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT p.productid, p.name AS product, c.name AS category, p.created_at, p.updated_at FROM product p JOIN category c WHERE p.categoryid = c.categoryid', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addProduct: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO product SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateProduct: (data, productid) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE product SET ? WHERE productid = ?', [data, productid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteProduct: (productid) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM product WHERE productid = ?', productid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
