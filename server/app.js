const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bookRouter = require('./routes/book.route')
const authRouter = require('./routes/auth.route')

require('./mongo-connection')

const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/api/book', bookRouter)
app.use('/auth', authRouter)


app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
