const express = require("express");
const Story = require("../models/story-model.js");
const router = express.Router();

router.get("/story-add", (req, res, next) => {
  if (req.user) {
    // AUTHORIZATION: only show the form if you are logged-in
    res.render("story-views/story-form.hbs");
  } else {
    // redirect to the login page if you ARE NOT logged-in
    req.flash("error", "You have to be logged-in to add a story!");
    res.redirect("/login");
  }
});

router.post("/process-story", (req, res, next) => {
  const {
    name,
    profession,
    description,
    pictureUrl,
    year,
    country,
    quote
  } = req.body;

  // req.user comes from Passport's deserializeUser()
  // (it's the document from the database of the logged-in user)
  const publisher = req.user._id;

  Story.create({
    name,
    profession,
    description,
    pictureUrl,
    year,
    country,
    quote,
    publisher
  })
    .then(() => {
      res.redirect("/my-stories");
    })
    .catch(err => next(err));
});

router.get("/my-stories", (req, res, next) => {
  // req.user comes from Passport's deserializeUser()
  // (it's the document from the database of the logged-in user)
  if (!req.user) {
    // AUTHORIZATION: redirect to login if you are not logged in
    req.flash("error", "You must be logged-in to see your stories!");
    res.redirect("/login");
    return;
  }
  // find the stories owned by the logged-in user
  Story.find({ publisher: { $eq: req.user._id } })
    // sort by newest first
    .sort({ createdAt: -1 })
    // first 10 results
    .limit(10)
    .then(storyResults => {
      res.locals.storyArray = storyResults;
      res.render("story-views/personal-list.hbs");
    })
    .catch(err => next(err));
});

// after clicking "read her story"
router.get("/your-story/:storyId", (req, res, next) => {
  const { storyId } = req.params;

  Story.findById(storyId)
    .then(storyDoc => {
      res.locals.storyItem = storyDoc;
      res.render("story-views/your-story.hbs");
    })

    .catch(err => next(err));
});

router.get("/goodnight", (req, res, next) => {
  res.render("story-views/goodnight.hbs");
});

module.exports = router;
