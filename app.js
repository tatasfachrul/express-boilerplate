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

app.post('/', (req, res) => {
  const body = req.body.string

  res.send(body)
})

app.get('/:dataid', (req, res) => {
  const dataid = req.params.dataid

  if (parseInt(dataid) === 1) {
    res.send('Data 1')
  } else {
    res.send('Data 2')
  }
})

module.exports = app
