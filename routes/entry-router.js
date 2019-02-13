const express = require("express");
const Story = require("../models/story-model.js");
const router = express.Router();

router.get("/home", (req, res, next) => {
  res.render("entry-views/home.hbs");
});

router.get("/mood1", (req, res, next) => {
  res.render("entry-views/mood-page1.hbs");

  // // find the stories owned by the logged-in user
  // Story.find({ publisher: { $eq: req.user._id } })
  //   // sort by newest first
  //   .sort({ createdAt: -1 })
  //   // first 10 results
  //   .limit(10)
  //   .then(storyResults => {
  //     res.locals.storyArray = storyResults;
  //     res.render("story-views/personal-list.hbs");
  //   })
  //   .catch(err => next(err));
});

router.get("/mood2", (req, res, next) => {
  res.render("entry-views/mood-page2.hbs");
});

module.exports = router;
