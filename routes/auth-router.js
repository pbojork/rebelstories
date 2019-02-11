const express = require("express");

const bcrypt = require("bcrypt");

const User = require("../models/user-model.js");

const router = express.Router();

router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

router.post("/process-signup", (req, res, next) => {
  const { userName, email, originalPassword } = req.body;

  // enforce password rules (can't be empty and must have a digit)
  if (!originalPassword) {
    // req.flash sends feedback message before redirect
    // (it's defined by the "connect-flash" npm package)
    req.flash("error", "Password can't be blank.");
    //redirect to the SIGNUP PAGE if the password is BAD
    res.redirect("/signup");
    // use return to STOP the function here if the password is BAD
    return;
  }

  // encrypt the user's password before saving it
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ userName, email, encryptedPassword })
    .then(() => {
      // req.flash sends feedback message before redirect
      // (it's defined by the "connect-flash" npm package)
      req.flash("success", "Sign up successful! 👍");
      // redirect to the HOME PAGE if the sign up WORKED
      res.redirect("/");
    })
    .catch(err => next(err));
});

router.get("/login", (req, res, next) => {
  res.render("auth-views/login-form.hbs");
});

router.post("/process-login", (req, res, next) => {
  const { userName, originalPassword } = req.body;

  User.findOne({ userName: { $eq: userName } })
    .then(userDoc => {
      if (!userDoc) {
        // req.flash sends feedback message before redirect
        // (it's defined by the "connect-flash" npm package)
        req.flash("error", "Username is incorrect.");
        // redirect to LOGIN PAGE if result is NULL (no account with that email)
        res.redirect("/login");
        // user return to STOP the function here if the PASSWORD is BAD
        return;
      }

      const { encryptedPassword } = userDoc;
      console.log(originalPassword, encryptedPassword);
      // validate the password by using bcrypt.compareSync()
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        // req.flash sends feedback message before redirect
        // (it's defined by the "connect-flash" npm package)
        req.flash("error", "Password is incorrect.");
        // redirect to LOGIN PAGE if the password don't match
        res.redirect("/login");
        // user return to STOP the function here if the PASSWORD is BAD
        return;
      }

      // email & password are CORRECT!
      // if we MANUALLY managed the user session
      // req.session.userId = userDoc._id;

      // instead we will use PASSPORT - an npm package for managing user sessions
      // req.logIn is a Passport method that calls serializeUser()
      // (that saves the USER ID in teh session which means we are logged-in)
      req.logIn(userDoc, () => {
        // req.flash sends feedback message before redirect
        // (it's defined by the "connect-flash" npm package)
        // req.flash("success", "Log in successful! 👍");
        res.redirect("/");
      });
    })
    .catch(err => next(err));
});

router.get("/logout", (req, res, next) => {
  // req.logOut();
  req.logOut();

  req.flash("success", "Logged out successfully! 🔑");
  res.redirect("/");
});

module.exports = router;
