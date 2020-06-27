import express from "express";
const router = express.Router();

let RatingsService = require("../services/ratings-service");

// Add new rating
router.post("/add", async (req, res) => {
  try {
    const rating = await RatingsService.add(req.body);
    res.send(rating);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Post rating doesn't exist!" + err,
    });
  }
});
//Get ratings by bookId
router.get("/get-rating/:bookId/", async (req, res) => {
  try {
    const params = req.params;
    const rating = await RatingsService.findByParams(params);
    res.send(rating);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Get ratings by bookId doesn't exist! " + err,
    });
  }
});
//Delete rating
router.delete("/delete/:id", async (req, res) => {
  try {
    const rating = await RatingsService.del(req.params.id);
    res.send(rating);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Delete rating doesn't exist!" + err,
    });
  }
});

module.exports = router;
