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
      "That brain of mine is something more than merely mortal, as time will show.",
    mood1: ["patronized", "discriminated"],
    mood2: ["respected", "independent"]
  },
  {
    name: "Balkissa Chaibou",
    profession: "Activist",
    description:
      "Once there was a girl who wanted to become a doctor. Her name was Balkissa Chaibou and she was really good at school. One day she discovered that her uncle had promised her in marriage to one of her cousin. Determined to become a doctor, the night before her wedding she escaped from her house, ran to the police station and challenged her uncle in court. She lived in a country where it was legal to arrange wedding for children of young age, so it wasn't easy for her!  The judge agreed with Balissa, and she's now studying to become a doctor. She also campaigns for other young girls to say no to forced marriag",
    pictureUrl: "",
    year: "1995",
    country: "Niger",
    quote: "I will show them what I can do with my life.",
    mood1: ["patronized", "powerless"],
    mood2: ["in control", "liberated"]
  },

  {
    name: "Jacquotte Delahaye",
    profession: "Pirate",
    description:
      "Once upon a time, in Haiti, there was a girl with hair as red as fire. Her name was Jacquotte. When her parents died, she had to find a way to provide for herself and her brother. So she decided to become a pirate. Jacquotte led a gang of hundreds of pirates against Spanish ships. She even had a secret island for herself. She had a girlfriend who was a pirate too! They were two of the most feared pirates of the Caribbean. Their stories became legend that pirates told each other, as they lay in their hammocks, beneath the stars, dreaming of the adventures that awaited them at dawn. ",
    pictureUrl: "",
    year: "1640",
    country: "Haiti",
    quote:
      "I couldn't love a man who commands me, anymore than I could love one who lets himself be commanded by me.",
    mood1: ["undervalued", "oppressed"],
    mood2: ["proud", "independent"]
  },
  {
    name: "Eufrosina Cruz",
    profession: "Activist and Politician",
    description:
      "Once there was a girl who didn't want to make tortillas. When her father told her that women can only make tortillas and children, she promised to show him the opposite. Then her father kicked her out of the family house. Eufrosina started out by selling chewing gum on the street, then she got a degree and started teaching young indigenous girls how to find ressources to build their own lives. She ran for mayor of her town and won! But the townsman canceled the election because 'A woman as mayor? Don't be ridiculous!'. A few years later, she became the first indigenous women to be elected president of the state congress.",
    pictureUrl: "",
    year: "1979",
    country: "Mexico",
    quote: "When a woman decides to change, everything changes around her.",
    mood1: ["patronized", "discriminated", "undervalued", "powerless"],
    mood2: ["respected", "empowered"]
  },
  {
    name: "Nina Simone",
    profession: "Singer",
    description:
      "Nina was a proud girl. At three years old, she climbed up the organ bench at church and learned to play. She was committed, hardworking and hugely talented. At 12, she gave her first concert. Her parents were sitting in the front row, but they were forced to move to the back of the hall to make room for some white people. Nina refused to start playing until her parents were seated back at the front. She wanted black people to be proud, to be free, to embrace their talents and their passions. Nina decided to cultivate her talent rather than her fear, and eventually, she became one of the most famous jazz singers in the world.",
    pictureUrl: "",
    year: "1933",
    country: "United States of America",
    quote: "I tell you what freedom is to me: no fear.",
    mood1: ["oppressed", "discriminated"],
    mood2: ["proud", "resolute"]
  },
  {
    name: "Mae C. Jemison",
    profession: "Astronaut and Doctor",
    description:
      "Once upon a time, there was a curious girl named Mae who could not make up her mind about what she wanted to be when she grew up. The world was Mae's laboratory and she had plenty of experiments she wanted to try. She studied chemical engineering, African-American studies, medicine, Russian, Swahili and Japanese. She became a doctor and volunteered in Africa. Then she became an astronaut, and she was the first African-American women in space. When Mae came back to earth, she realized that her true passion was improving health in Africa. So she quit Nasa and founded a company which uses satellites just to do that. ",
    pictureUrl: "",
    year: "1956",
    country: "United States of America",
    quote: "I always knew I'd go to space.",
    mood1: ["undecided", "discriminated"],
    mood2: ["proud", "resolute"]
  }
];

Story.insertMany(storyData)
  .then(storyResults => {
    console.log(`Inserted ${storyResults.length} STORIES`);
  })
  .catch(err => {
    console.log("Insert FAILURE!", err);
  });
