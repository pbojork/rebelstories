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
    profession: "Mathematician",
    description:
      "Once upon a time, there was a girl named Ada who loved machines and also the idea of flying. One night Ada went to a ball where she met a grumpy old mathematician named Charles Babbage. Ada was a brilliant mathematician herself. He showed her the Difference Engine, the machine he had invented capable of automatically adding and subtracting numbers. Excited Ada said: 'What if we built a machine that could make more complicated calculations, could play music and show letters and numbers?'. She was describing a computer, way before modern computers were invented! Ada wrote the first computer program in history.",
    pictureUrl: "",
    year: "1815",
    country: "United Kingdom",
    quote:
      "That brain of mine is something more than merely mortal, as time will show."
  },
  {
    name: "Balkissa Chaibou",
    profession: "Activist",
    description:
      "Once there was a girl who wanted to become a doctor. Her name was Balkissa Chaibou and she was really good at school. One day she discovered that her uncle had promised her in marriage to one of her cousin. Determined to become a doctor, the night before her wedding she escaped from her house, ran to the police station and challenged her uncle in court. She lived in a country where it was legal to arrange wedding for children of young age, so it wasn't easy for her!  The judge agreed with Balissa, and she's now studying to become a doctor. She also campaigns for other young girls to say no to forced marriag",
    pictureUrl: "",
    year: "1995",
    country: "Niger",
    quote: "I will show them what I can do with my life."
  },
  {
    name: "Mae C. Jemison",
    profession: "Astronaut and Doctor",
    description:
      "Once upon a time, there was a curious girl named Mae who could not make up her mind about what she wanted to be when she grew up. The world was Mae's laboratory and she had plenty of experiments she wanted to try. She studied chemical engineering, African-American studies, medicine, Russian, Swahili and Japanese. She became a doctor and volunteered in Africa. Then she became an astronaut, and she was the first African-American women in space. When Mae came back to earth, she realized that her true passion was improving health in Africa. So she quit Nasa and founded a company which uses satellites just to do that. ",
    pictureUrl: "",
    year: "1956",
    country: "United States of America",
    quote: "I always knew I'd go to space."
  }
];

Story.insertMany(storyData)
  .then(storyResults => {
    console.log(`Inserted ${storyResults.length} STORIES`);
  })
  .catch(err => {
    console.log("Insert FAILURE!", err);
  });
