import express from 'express'
const router = express.Router()

let CommentService = require('../services/comment-service');


// Add new comment
router.post('/add', async (req, res) => {
  try {
    const comment = await CommentService.add(req.body)
    res.send(comment)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Post doesn't exist!" + err
    })
  }
})

//Delete comment
router.delete('/delete/:id', async (req, res) => {
  try {
    const comment = await CommentService.del(req.params.id)
    res.send(comment)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Delete one doesn't exist!" + err
    })
  }
})


module.exports = router;