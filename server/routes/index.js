import express from "express";

import bookRouter from "./book.route";
import authRouter from "./auth.route";
import genresRouter from "./genres.route";
import commentRouter from "./comments.route";
import ratingRouter from "./ratings.route";

const router = express.Router();

router.use("/api/books", bookRouter);
router.use("/api/genre", genresRouter);
router.use("/api/comment", commentRouter);
router.use("/api/rating", ratingRouter);
router.use("/auth", authRouter);

module.exports = router;