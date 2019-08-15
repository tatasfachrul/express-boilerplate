require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT

/* Basic Configuration */
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

conn.connect((err) => {
  if (err) console.log(`Error: ${err} \n`)
  console.log('\n Database connected! \n')
})

conn.end((err) => {
  if (err) console.log(`Error: ${err}`)
  console.log('\n Database closed!')
})

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
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
