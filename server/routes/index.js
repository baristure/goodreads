import express from "express";

import bookRouter from "./book.route";
import userRouter from "./user.route";
import genresRouter from "./genres.route";
import commentRouter from "./comments.route";
import ratingRouter from "./ratings.route";

const router = express.Router();

router.use("/api/books", bookRouter);
router.use("/api/genre", genresRouter);
router.use("/api/comment", commentRouter);
router.use("/api/rating", ratingRouter);
router.use("/", userRouter);

module.exports = router;