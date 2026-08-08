import tanjiro from "../assets/tanjiro.png";
import spongy from "../assets/spongy.png";
import bill from "../assets/bill1.png";
import trivia from "../assets/trivia.png";
import wordly from "../assets/wordly.png";
import notes from "../assets/notes.png";
//import clock from "../assets/clock.png";
import shopmart from "../assets/shopmart.png";



const works = [
  {
    id: 1,
    title: "Tanjiro Kamado | Portfolio",
    category: "Web Design",
    description: `A character-inspired portfolio website dedicated to Tanjiro Kamado, built using HTML, CSS, and JavaScript. The project focuses on responsive layout, visual storytelling, and interactive elements to create an engaging anime-themed experience.
`,
    image: tanjiro,
    link: "https://github.com/HumaiaraD/TanjiroPortfolio"
  },
  {
    id: 2,
    title: "Spongebob Squarepants | Portfolio",
    category: "Web Design",
    description: `A playful SpongeBob SquarePants-inspired portfolio website built with SvelteKit and Tailwind CSS. 
    The site uses Particles.js to create animated bubble effects in the background, adding an interactive underwater 
    feel that matches the visual style of Bikini Bottom.`,
    image: spongy,
    link: "https://spongebob-portfolio.vercel.app/"

  },
  {
    id: 3,
    title: "Bill Splitter | App",
    category: "App Design",
    description: `A simple bill-splitting calculator built with HTML, CSS, and JavaScript. It allows users to enter a bill amount, split it between multiple people, and quickly calculate how much each person owes.
`,
    image: bill,
    link: "https://billied.netlify.app/"
  },
  {
    id: 4,
    title: "Trivia Game ",
    category: "App Design",
    description: `A fun general knowledge trivia game built with HTML, CSS, and JavaScript. Players answer questions across different topics and test their knowledge through an interactive quiz experience.`,
    image: trivia,
    link: "https://trivia-game-flt-summative-lab.vercel.app/"
  },
  {
    id: 5,
    title: "Wordly | Dictionary ",
    category: "App Design",
    description: `A simple dictionary app built with HTML, CSS, and JavaScript. Wordly lets users search for words and view definitions, pronunciations, synonyms, antonyms, and other useful language details.
`,
    image: wordly,
    link: "https://wordly-a-word-dictionary.vercel.app/"
  },
  {
    id: 6,
    title: "Grid Screen Note | App",
    category: "Creative Direction",
    description: `SCREEN AROUND - This is an interactive notes app built using TypeScript, HTML, and CSS. It features a clean
     interface where users can create new notes using a "+" button, with each note stacked on top of the previous one. Notes can be color-coded for better organization and freely 
     dragged and repositioned anywhere on the screen. Designed for flexibility and ease of use, this app offers a 
     simple, intuitive way to manage your ideas and reminders.`,
    image: notes,
    link: "https://screen-around.vercel.app/"
  },
  {
    id: 7,
    title: "Digi Clock ",
    category: "Creative Direction",
    description: `A colorful digital clock built with React that displays the current time and date. It includes light and dark mode themes, allowing users to switch between different visual styles for a personalized experience.
`,
    image: "",
    link: "https://github.com/HumaiaraD/color-clock-flt-lab"
  },
  {
    id: 8,
    title: "Shop Mart | Game ",
    category: "App Design & Creative Direction",
    description: `A fun interactive game about shopping experince.
Game Description: Welcome to "Life in the Town Square", an interactive text-based adventure where you navigate through daily life, make purchases, and interact with various characters. Your goal is to manage your 
resources wisely, explore different locations, and avoid running out of money or causing conflicts that could end your game.
In this game, you start with a modest amount of money ($100) and a basic inventory containing just a bottle of water. As you explore the town,
 you can visit places like the Grocery Store, Restaurant, and Town Square. Each location offers different opportunities to earn or spend money,
  and your interactions with friends and businesses will influence your experience. After spending enough money shopping, you get a restart buttons to restart or ask for loan from a friend.
Coding: I used simple Javascript, CSS, HTML coding for this game. I was inspired from a project i did in freeCodeCamp certification.
 The project was to make a dragon slaying game and I was inspired to do something similar to it.`,
    image: shopmart,
    link: "https://github.com/HumaiaraD/shopMart"
  },
];

export default works;