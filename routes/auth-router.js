const express = require("express");

const bcrypt = require("bcrypt");

const User = require("../models/user-model.js");

const router = express.Router();

router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

router.post("/process-signup", (req, res, next) => {
  const { fullName, email, originalPassword } = req.body;

  // enforce password rules (can't be empty and must have a digit)
  if (!originalPassword || !originalPassword.match(/[0-9]/)) {
    // req.flash sends feedback message before redirect
    // (it's defined by the "connect-flash" npm package)
    req.flash("error", "Password can't be blank and must contain a number.");
    //redirect to the SIGNUP PAGE if the password is BAD
    res.redirect("/signup");
    // use return to STOP the function here if the password is BAD
    return;
  }

  // encrypt the user's password before saving it
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ fullName, email, encryptedPassword })
    .then(() => {
      // req.flash sends feedback message before redirect
      // (it's defined by the "connect-flash" npm package)
      req.flash("success", "Sign up successful! 👍");
      // redirect to the HOME PAGE if the sign up WORKED
      res.redirect("/");
    })
    .catch(err => next(err));
});

module.exports = router;
