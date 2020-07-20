import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bookRouter from "./routes/book.route";
import authRouter from "./routes/auth.route";
import genresRouter from "./routes/genres.route";
import commentRouter from "./routes/comments.route";
import ratingRouter from "./routes/ratings.route";
import passport from "passport";
require("./mongo-connection");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/books", bookRouter);
app.use("/api/genre", genresRouter);
app.use("/api/comment", commentRouter);
app.use("/api/rating", ratingRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
