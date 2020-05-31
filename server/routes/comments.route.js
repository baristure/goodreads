import express from 'express'
const router = express.Router()

let CommentService = require('../services/comment-service');

//Get All Comments via BookName
router.get('/:bookId', async (req, res) => {
  try {
    const comments = await CommentService.findAll({bookName:req.params.id})
    res.send(comments)
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
    const book = await CommentService.find(req.params.id)
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
    const book = await CommentService.add(req.body)
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
    const book = await CommentService.del(req.params.id)
    res.send(book)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Delete one doesn't exist!" + err
    })
  }
})


module.exports = router;