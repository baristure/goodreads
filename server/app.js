import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bookRouter from './routes/book.route'
import authRouter from './routes/auth.route'
import passport from 'passport';

require('./mongo-connection')

const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/books', bookRouter)
app.use('/auth', authRouter)


app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
