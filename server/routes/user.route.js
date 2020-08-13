import mongoose from "mongoose";
import passport from "passport";
import express from "express";

import initializePassport from "../helpers/passport";
import checkAuthenticated from '../helpers/checkAuthenticated';
import checkNotAuthenticated from '../helpers/checkNotAuthenticated';

require("../models/user.model");

const router = express.Router();
let UsersService = require("../services/user-service");


const initializePassport = require("./passport-config");
initializePassport(
  passport,
  (email) => UsersService.find({email:email}),
  (name) => UsersService.find({name:name})
);



router.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);


router.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userBody ={
      name:req.body.name,
      email:req.body.email,
      password:hashedPassword
    }
    const user = await UsersService.add(userBody)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               x 
    // res.status(200);
    res.redirect("/");
  } catch {
    res.redirect("/register");
  }
});

router.post("/add", async (req, res) => {
  try {
    const book = await BookService.add(req.body);
    res.send(book);
  } catch (err) {
    res.status(404);
    res.send({
      error: "Post doesn't exist!" + err,
    });
  }
});

router.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});


module.exports = router;
