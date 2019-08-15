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

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
app.get('/', (req, res) => {
  conn.query('SELECT p.productid, p.name AS product, c.name AS category, p.created_at, p.updated_at FROM product p JOIN category c WHERE p.categoryid = c.categoryid', (err, result) => {
    if (err) console.log(err)
    res.json(result)
  })
})

app.post('/products', (req, res) => {
  const { name, categoryid } = req.body
  const data = { name, categoryid }

  conn.query('INSERT INTO product SET ?', data, (err, result) => {
    if (err) console.log(err)
    res.json(result)
  })
})

app.patch('/:productid', (req, res) => {
  const productid = req.params.productid
  const { name, categoryid } = req.body
  const data = { name, categoryid }

  conn.query('UPDATE product SET ? WHERE productid = ?', [data, productid], (err, result) => {
    if (err) console.log(err)
    res.json(result)
  })
})

app.delete('/:productid', (req, res) => {
  const productid = req.params.productid

  conn.query('DELETE FROM product WHERE productid = ?', productid, (err, result) => {
    if (err) console.log(err)
    res.json(result)
  })
})

module.exports = app
