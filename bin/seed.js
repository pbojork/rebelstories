require("dotenv").config();

const mongoose = require("mongoose");

const Story = require("../models/story-model.js");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
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
    pictureUrl: "./public/images/ada.webp",
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
      "Once there was a girl who wanted to become a doctor. Her name was Balkissa Chaibou and she was really good at school. One day she discovered that her uncle had promised her in marriage to one of her cousins. Determined to become a doctor, the night before her wedding she escaped from her house, ran to the police station and challenged her uncle in court. She lived in a country where it was legal to arrange wedding for children of young age, so it wasn't easy for her!  The judge agreed with Balkissa, and she's now studying to become a doctor. She also campaigns for other young girls to say no to forced marriage.",
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
      "Once upon a time, in Haiti, there was a girl with hair as red as fire. Her name was Jacquotte. When her parents died, she had to find a way to provide for herself and her brother. So she decided to become a pirate. Jacquotte led a gang of hundreds of pirates against Spanish ships. She even had a secret island for herself. She had a girlfriend who was a pirate too! They were two of the most feared pirates of the Caribbean. Their stories became legends that pirates told each other, as they lay in their hammocks, beneath the stars, dreaming of the adventures that awaited them at dawn.",
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
      "Once there was a girl who didn't want to make tortillas. When her father told her that women can only make tortillas and children, she promised to show him the opposite. Then her father kicked her out of the family house. Eufrosina started out by selling chewing gum on the street, then she got a degree and started teaching young indigenous girls how to find ressources to build their own lives. She ran for mayor of her town and won! But the townsmen canceled the election because they said, 'A woman as mayor? Don't be ridiculous!'. A few years later, she became the first indigenous woman to be elected president of the state congress.",
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
      "Once upon a time, there was a curious girl named Mae who could not make up her mind about what she wanted to be when she grew up. The world was Mae's laboratory and she had plenty of experiments she wanted to try. She studied chemical engineering, African-American studies, medicine, Russian, Swahili and Japanese. She became a doctor and volunteered in Africa. Then she became an astronaut, and she was the first African-American woman in space. When Mae came back to earth, she realized that her true passion was improving health in Africa. So she quit NASA and founded a company which uses satellites just to do that. ",
    pictureUrl: "",
    year: "1956",
    country: "United States of America",
    quote: "I always knew I'd go to space.",
    mood1: ["undecided", "discriminated"],
    mood2: ["proud", "resolute"]
  },
  {
    name: "Rita Levi Montalcini",
    profession: "Scientist",
    description:
      "Rita decided to become a doctor when her nanny died of cancer. After graduation, she worked with an extraordinary professor and group of fellow scientists from her class. They were in the middle of important research when a cruel dictator passed a law saying that Jewish people were not allowed to work at the university. It is hard to work as a scientist when you have to hide all the time without access to a lab, but Rita did not give up. She turned her bedroom into a research lab where she studied cells under a microscope. No matter how difficult, she kept on working. For her work in neurobiology, she was awarded the Nobel Prize for Medicine.",
    pictureUrl: "",
    year: "1909",
    country: "Italy",
    quote: "Above all, don't fear difficult moments. The best comes from them.",
    mood1: ["oppressed", "discriminated"],
    mood2: ["respected", "resolute"]
  },
  {
    name: "Policarpa Salavarrieta",
    profession: "Spy",
    description:
      "There once was a seamstress in Colombia, who was also a spy known as Policarpa Salavarrieta. At the time, Colombia was ruled by Spain. Many people, called royalists were proud of the Spanish king, while others were revolutionaries and wanted Colombia to be free. While she worked as a seamstress for royalists, she gathered information about their plans to pass on to her revolutionary friends. One day Policarpa was arrested and told her she would live if she gave up the names of the friends. Without fear she replied, 'I'm a young woman and you don't scare me.' Policarpa still inspires women and men to fight for freedom and justice without fear.",
    pictureUrl: "",
    year: "1795",
    country: "Colombia",
    quote: "I have more than enough courage.",
    mood1: ["oppressed", "undervalued"],
    mood2: ["empowered", "independent"]
  },
  {
    name: "Fadumo Dayib",
    profession: "Politician",
    description:
      "Once there was a girl who spent her childhood trying to escape from war. Fadumo and her family had to stay one step ahead of the fighting, she couldn't go to school, and was illiterate until she was 14. One day her mother told her to leave the country with her brother and sister. When they arrived in Finland, they could do all the things that children can do in a peaceful country. Fadumo never forgot about Somalia. She learned everything she could to could go back and help her people regain freedom and peace. She returned to help set up hospitals across Somalia. Today, Fadumo is Somalia's first female presidential candidate.",
    pictureUrl: "",
    year: "1973",
    country: "Somalia",
    quote: "We will no longer negotiate for our existence.",
    mood1: ["oppressed", "powerless", "discriminated"],
    mood2: ["independent", "empowered"]
  }
];

Story.insertMany(storyData)
  .then(storyResults => {
    console.log(`Inserted ${storyResults.length} STORIES`);
  })
  .catch(err => {
    console.log("Insert FAILURE!", err);
  });
