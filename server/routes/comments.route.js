import express from 'express'
const router = express.Router()

let CommentService = require('../services/comments-service');


// Add new comment
router.post('/add', async (req, res) => {
  try {
    const comment = await CommentService.add(req.body)
    res.send(comment)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Post comment doesn't exist!" + err
    })
  }
})
//Get comments by bookId
router.get('/:bookId', async (req, res) => {
  try {
    const params =  req.params
    const comment = await CommentService.findByParams(params);
    res.send(comment)
  } catch (err) {
    res.status(404)
    res.send({
      error: "Get comments by bookId doesn't exist! " + err
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
      error: "Delete comment doesn't exist!" + err
    })
  }
})


module.exports = router;