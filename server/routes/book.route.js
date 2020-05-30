import express from 'express'
const router = express.Router()

let BookService = require('../services/book-service');

//Get All Books
router.get('/', async (req, res) => {
  try {
    const book = await BookService.findAll()
    res.send(book)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Get books doesn't exist! " + err
    })
  }
})

//Get one book
router.get('/:id', async (req, res) => {
  try {
    const book = await BookService.find(req.params.id)
    res.send(book)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Get book doesn't exist! " + err
    })
  }
})


// Add new book
router.post('/add', async (req, res) => {
  try {
    const book = await BookService.add(req.body)
    res.send(book)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Post doesn't exist!" + err
    })
  }
})

//Delete one book
router.delete('/delete/:id', async (req, res) => {
  try {
    const book = await BookService.del(req.params.id)
    res.send(book)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Delete one doesn't exist!" + err
    })
  }
})


module.exports = router;