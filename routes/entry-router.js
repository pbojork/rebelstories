const express = require("express");
const Story = require("../models/story-model.js");
const router = express.Router();

router.get("/home", (req, res, next) => {
  res.render("entry-views/home.hbs");
});

router.get("/mood1", (req, res, next) => {
  // find the stories that includes the right keyword
  Story.find()
    .then(mood1Results => {
      console.log(mood1Results);

      res.locals.mood1Array = mood1Results;
      console.log("MY RESULT TEST", mood1Results);
      res.render("entry-views/mood-page1.hbs");
    })
    .catch(err => next(err));
});

router.get("/:keyword/mood2", (req, res, next) => {
  Story.find({ mood1: { $eq: req.params.keyword } })
    .then(mood1Results => {
      // in mood-page2.hbs display only the mood2 keywords relatives to mood1 results

      //info to send to mood2.hbs
      res.render("entry-views/mood-page2.hbs");
    })
    .catch();
});

router.get("/:mood1/:mood2/story", () => {
  // after clicking on one keyword in mood2.hbs, random pick a story and display it in story.hbs

  // const randomStory = Math.floor(math.random() * mood1Results.length);
  // console.log(mood1Results[randomStory]);
  res.send("story");
});

module.exports = router;
