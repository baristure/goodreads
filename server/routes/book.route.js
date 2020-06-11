import express from 'express'
import BookModel from '../models/book.model';

const router = express.Router()

let BookService = require('../services/book-service');

//Get All Books
router.get('/', async (req, res) => {
  try {
    const book = await BookService.findAll()
    console.log('BARIŞ');
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

// Get books by genres
router.get('/genre/:genreId', async (req, res) => {
  try {
    let result= {};
    const params=req.params
    result.result = await BookService.findByParams(params);
    result.countQuery = result.result.length;
    res.json(result)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Get books by genres doesn't exist! " + err
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

// function paginatedResults(model) {
//   return async (req, res, next) => {
//     const page = parseInt(req.query.page)
//     const limit = parseInt(req.query.limit)

//     const startIndex = (page - 1) * limit
//     const endIndex = page * limit

//     const results = {}

//     if (endIndex < await model.countDocuments().exec()) {
//       results.next = {
//         page: page + 1,
//         limit: limit
//       }
//     }

//     if (startIndex > 0) {
//       results.previous = {
//         page: page - 1,
//         limit: limit
//       }
//     }
//     try {
//       results.results = await model.find().limit(limit).skip(startIndex).exec()
//       res.paginatedResults = results
//       next()
//     } catch (e) {
//       res.status(500).json({ message : e.message })
//     }
//   }
// }

module.exports = router;