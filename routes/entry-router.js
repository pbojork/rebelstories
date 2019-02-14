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
      //info to send to mood2.hbs
      const arr = [];
      mood1Results.forEach(element => {
        console.log(element.mood2);
        arr.push(element.mood2[0], element.mood2[1]);
      });

      const uniqueArray = arr.filter(function(elem, pos, arr) {
        return arr.indexOf(elem) == pos;
      });

      console.log(arr);
      res.locals.myArray = uniqueArray;
      res.render("entry-views/mood-page2.hbs");
    })
    .catch(err => next(err));
});

router.get("/:keyword2/story", (req, res, next) => {
  Story.find({ mood2: { $eq: req.params.keyword2 } })
    .then(mood2Results => {
      const randomStory = Math.floor(Math.random() * mood2Results.length);
      const storyData = mood2Results[randomStory];
      // res.json(storyData);
      res.locals.storyData = storyData;
      res.render("story-views/story.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
