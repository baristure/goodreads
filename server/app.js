import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";

import router from "./routes/index";

require("./mongo-connection");
require("./helpers/passport")(passport);

const app = express();
app.use(cors());

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});


app.use("/", router);

module.exports = app;
