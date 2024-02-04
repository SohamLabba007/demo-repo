const express = require('express')
const app = express()
require('dotenv').config()
//const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('You are on the login page !')
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})