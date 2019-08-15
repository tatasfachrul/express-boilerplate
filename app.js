const express = require('express')
const bodyParser = require('body-parser')
const configs = require('./src/configs/configs')

const app = express()
const port = configs.port
const routerNav = require('./src/index')

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routerNav)

module.exports = app
