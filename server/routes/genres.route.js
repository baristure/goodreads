import express from "express";
const router = express.Router();

let GenresService = require("../services/genres-service");

//Get All Genres
router.get("/", async (req, res) => {
  try {
    const genres = await GenresService.findAll();
    res.send(genres);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Get genres doesn't exist! " + err,
    });
  }
});

//Get one genre
router.get("/:id", async (req, res) => {
  try {
    const genres = await GenresService.find(req.params.id);
    res.send(genres);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Get a genre doesn't exist! " + err,
    });
  }
});

// Add new genre
router.post("/add", async (req, res) => {
  try {
    const genres = await GenresService.add(req.body);
    res.send(genres);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Post doesn't exist!" + err,
    });
  }
});

//Delete one genre
router.delete("/delete/:id", async (req, res) => {
  try {
    const genres = await GenresService.del(req.params.id);
    res.send(genres);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Delete one doesn't exist!" + err,
    });
  }
});

module.exports = router;
