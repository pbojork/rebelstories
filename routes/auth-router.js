const express = require("express");

const bcrypt = require("bcrypt");

const User = require("../models/user-model.js");

const router = express.Router();

router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

// Gets mood pages when creating a new username.
// Do we erase from here???
// router.get("/mood1", (req, res, next) => {
//   res.render("entry-views/mood-page1.hbs");
// });

// router.get("/mood2", (req, res, next) => {
//   res.render("entry-views/mood-page2.hbs");
// });

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
      req.flash("success", "Sign up successful!");

      res.redirect("/mood1");
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
        req.flash("error", "Username is incorrect.");

        res.redirect("/login");

        return;
      }
      const { encryptedPassword } = userDoc;
      console.log(originalPassword, encryptedPassword);

      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        req.flash("error", "Password is incorrect.");

        res.redirect("/login");

        return;
      }
      req.logIn(userDoc, () => {
        res.redirect("/mood1");
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
