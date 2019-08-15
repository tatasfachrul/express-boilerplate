const conn = require('../configs/db')

module.exports = {
  addCategory: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO category SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
