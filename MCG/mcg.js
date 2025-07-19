// A set of all the games created at MCG
const games = [
    {
        name: "Trophy Hunt",
        releaseDate: "Dec 2023",
        image: "header.jpg",
        description: "The first game from Muddy Creek Games"
    },
    {
        name: "The Ultimate Box Games",
        releaseDate: "Sept 2025",
        image: "header.png",
        description: "A multiplayer game about robots that help move things"
    }
]

// A set of some of the updates to the ultimate box games
const projectLog = {
  entry1: {
    name: "Started Project",
    date: "2025-03-01",
    description: "Initialized the project structure and setup version control.",
    tags: ["code"]
  },
  entry2: {
    name: "Basic Character Designs",
    date: "2025-03-08",
    description: "Sketched and outlined basic character ideas and appearances.",
    tags: ["visual development"]
  },
  entry3: {
    name: "Pick-up Functionality Started",
    date: "2025-03-15",
    description: "Began implementing character item pick-up logic.",
    tags: ["code"]
  },
  entry4: {
    name: "Base and Points System",
    date: "2025-03-22",
    description: "Developed a system for base zones and point scoring.",
    tags: ["code"]
  },
  entry5: {
    name: "Powerups Design Started",
    date: "2025-03-29",
    description: "Outlined concepts for powerups including effects and visuals.",
    tags: ["visual development"]
  },
  entry6: {
    name: "Invisibility Powerup",
    date: "2025-04-05",
    description: "Implemented logic for temporary invisibility powerup.",
    tags: ["code"]
  },
  entry7: {
    name: "Mine Powerup",
    date: "2025-04-12",
    description: "Implemented functionality for mine deployment and triggering.",
    tags: ["code"]
  },
  entry8: {
    name: "Character Model in Blender",
    date: "2025-04-19",
    description: "Modeled main character using Blender for 3D visuals.",
    tags: ["blender", "visual development"]
  },
  entry9: {
    name: "Rocket Powerup",
    date: "2025-04-26",
    description: "Implemented a rocket powerup that launches toward targets.",
    tags: ["code"]
  },
  entry10: {
    name: "Throwing Powerup",
    date: "2025-05-03",
    description: "Implemented a mechanic allowing characters to throw objects.",
    tags: ["code"]
  },
  entry11: {
    name: "Props in Blender",
    date: "2025-05-10",
    description: "Created environmental props using Blender.",
    tags: ["blender", "visual development"]
  },
  entry12: {
    name: "Pick-up Bug Fix",
    date: "2025-05-17",
    description: "Resolved a bug where characters could not pick up objects consistently.",
    tags: ["bug fix", "code"]
  },
  entry13: {
    name: "Mini Fridge Character",
    date: "2025-05-24",
    description: "Added a second playable character: a mini fridge with unique traits.",
    tags: ["visual development", "code"]
  },
  entry14: {
    name: "Game Loop and Timer",
    date: "2025-05-31",
    description: "Implemented a consistent game loop and countdown timer.",
    tags: ["code"]
  },
  entry15: {
    name: "Main Menu",
    date: "2025-06-07",
    description: "Created a main menu interface for the game.",
    tags: ["UI"]
  },
  entry16: {
    name: "Character Select Menu",
    date: "2025-06-14",
    description: "Designed and implemented a character selection screen.",
    tags: ["UI"]
  },
  entry17: {
    name: "Online Multiplayer Started",
    date: "2025-06-21",
    description: "Began building out the online multiplayer framework.",
    tags: ["online", "code"]
  }
};

function getGames() {
    let html = ""
    games.forEach(function(game) {
        html += `<div class="game">
            <h2>${game.name}</h1>
            <h3>${game.description}</h2>
            <img class="gameimg" src="${game.image}" alt="image of ${game.name}">
            <p>${game.releaseDate}</p>
            </div>`
    })
    return html;
}

document.body.querySelector(".games").innerHTML = getGames()