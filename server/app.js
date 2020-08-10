import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import session from 'express-session'

import router from "./routes";

require("./mongo-connection");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "goodreads-clone",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", router);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
