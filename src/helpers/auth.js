const crypto = require('crypto')
const JWT = require('jsonwebtoken')
const config = require('../configs/configs')

module.exports = {
  authInfo: (req, res, next) => {
    const headerAuth = req.headers['authorization']
    const headerSecret = req.headers['x-access-token']

    if (headerAuth !== config.headerSecret) {
      return res.status(404).json({ message: 'Unauthorized, Need Authentication' })
    } else if (typeof headerSecret === 'undefined') {
      console.log('Token not existed! but Auth defined')
      next()
    } else {
      req.token = headerSecret
      console.log('Token stored!')
      next()
    }
  },
  authAccess: (req, res, next) => {
    const accessToken = req.token
    const userToken = req.headers['x-control-user']

    JWT.verify(accessToken, config.jwtSecret, (err, decoded) => {
      if (err && err.name === 'TokenExpiredError') return res.status(403).json({ message: 'Token expired!' })
      if (err && err.name === 'JsonWebTokenError') return res.status(403).json({ message: 'Token invalid!' })
      if (parseInt(userToken) !== parseInt(decoded.userid)) return res.status(403).json({ message: 'Invalid User!' })

      console.log('Access Granted!')
      next()
    })
  }
}
