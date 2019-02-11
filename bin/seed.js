require("dotenv").config();

const mongoose = require("mongoose");

const Story = require("../models/story-model.js");

mongoose
  .connect("mongodb://localhost/rebelstories", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const storyData = [
  {
    name: "Ada Lovelace",
    profession: "mathematician",
    description: "I'm the QueenBee in da house",
    pictureUrl: "",
    year: "1815",
    country: "United Kingdom",
    quote:
      "That brain of mineis something more than merely mortal, as time will show."
  }
];

Story.insertMany(storyData)
  .then(storyyResults => {
    console.log(`Inserted ${storyResults.length} STORIES`);
  })
  .catch(err => {
    console.log("Insert FAILURE!", err);
  });
