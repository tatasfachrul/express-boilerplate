const _ = require('lodash')
const config = require('../configs/configs')

module.exports = {
  uploadAws: (req, res) => {
    if (!_.result(req.file, 'key')) {
      return res.json('Invalid')
    } else {
      const dataFile = {
        file: req.file.key,
        url: `${config.AWS.endpoint}/${req.file.key}` 
      }
      console.log(dataFile)
      return res.json(dataFile)
    }
  },
  uploadCloudinary: (req, res) => {
    console.log('Hello world')
  },
  upload: (req, res) => {
    console.log('Hello world')
  }
}
