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
        // const filtered = arr.filter(arr => arr.length);
        // return filtered;
        // // arr.filter((elem, index, self) => {
        // //   return index == self.indexOf(elem);

        // filtered.push(element.mood2[0], element.mood2[1]);
        arr.push(element.mood2[0], element.mood2[1]);
      });

      //   const filteredKeywords = arr.filter(elem, index, self) => {
      //     return index == self.indexOf(elem);

      //     return filteredKeywords;
      // });

      console.log(arr);
      res.locals.myArray = arr;
      res.render("entry-views/mood-page2.hbs");
    })
    .catch(err => next(err));
});

router.get("/:keyword2/story", () => {
  Story.find({ mood2: { $eq: req.params.keyword2 } })
    .then(mood2Results => {
      console.log(mood2Results);
      // const arr2 = [];

      // mood2Results.forEach(element => {
      //   console.log(element);
      //   arr2.push(element);
      // });
      // console.log(arr2);
      // res.locals.myArray2 = arr2;
      // res.render("entry-views/story.hbs");
    })
    .catch(err => next(err));
  // after clicking on one keyword in mood2.hbs, random pick a story and display it in story.hbs

  // const randomStory = Math.floor(math.random() * mood1Results.length);
  // console.log(mood1Results[randomStory]);
});

module.exports = router;
