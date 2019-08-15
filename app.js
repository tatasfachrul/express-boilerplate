require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Created endpoint!')
})
module.exports = app
