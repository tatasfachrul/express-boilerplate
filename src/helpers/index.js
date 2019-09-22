const crypto = require('crypto')

module.exports = {
  response: (res, status, data) => {
    console.log('Response')
  },
  customErrorResponse: (res, status, message) => {
    console.log('Error Response!')
  },
  generateSalt: (length) => {
    console.log('Generate Salt!')
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
  },
  setPassword: (password, salt) => {
    const hash = crypto.createHmac('sha512', salt)
    hash.update(password)
    const value = hash.digest('hex')
    return {
      salt: salt,
      passwordHash: value
    }
  }
}
