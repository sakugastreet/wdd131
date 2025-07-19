const projectLog = [
  {
    name: "Started Project",
    date: "2025-03-01",
    description: "Initialized the project structure and setup version control.",
    tags: ["code"]
  },
  {
    name: "Basic Character Designs",
    date: "2025-03-08",
    description: "Sketched and outlined basic character ideas and appearances.",
    tags: ["visual development"]
  },
  {
    name: "Pick-up Functionality Started",
    date: "2025-03-15",
    description: "Began implementing character item pick-up logic.",
    tags: ["code"]
  },
  {
    name: "Base and Points System",
    date: "2025-03-22",
    description: "Developed a system for base zones and point scoring.",
    tags: ["code"]
  },
  {
    name: "Powerups Design Started",
    date: "2025-03-29",
    description: "Outlined concepts for powerups including effects and visuals.",
    tags: ["visual development"]
  },
  {
    name: "Invisibility Powerup",
    date: "2025-04-05",
    description: "Implemented logic for temporary invisibility powerup.",
    tags: ["code"]
  },
  {
    name: "Mine Powerup",
    date: "2025-04-12",
    description: "Implemented functionality for mine deployment and triggering.",
    tags: ["code"]
  },
  {
    name: "Character Model in Blender",
    date: "2025-04-19",
    description: "Modeled main character using Blender for 3D visuals.",
    tags: ["blender", "visual development"]
  },
  {
    name: "Rocket Powerup",
    date: "2025-04-26",
    description: "Implemented a rocket powerup that launches toward targets.",
    tags: ["code"]
  },
  {
    name: "Throwing Powerup",
    date: "2025-05-03",
    description: "Implemented a mechanic allowing characters to throw objects.",
    tags: ["code"]
  },
  {
    name: "Props in Blender",
    date: "2025-05-10",
    description: "Created environmental props using Blender.",
    tags: ["blender", "visual development"]
  },
  {
    name: "Pick-up Bug Fix",
    date: "2025-05-17",
    description: "Resolved a bug where characters could not pick up objects consistently.",
    tags: ["bug fix", "code"]
  },
  {
    name: "Mini Fridge Character",
    date: "2025-05-24",
    description: "Added a second playable character: a mini fridge",
    tags: ["visual development", "code"]
  },
  {
    name: "Game Loop and Timer",
    date: "2025-05-31",
    description: "Implemented a consistent game loop and countdown timer.",
    tags: ["code"]
  },
  {
    name: "Main Menu",
    date: "2025-06-07",
    description: "Created a main menu interface for the game.",
    tags: ["UI"]
  },
  {
    name: "Character Select Menu",
    date: "2025-06-14",
    description: "Designed and implemented a character selection screen.",
    tags: ["UI"]
  },
  {
    name: "Online Multiplayer Started",
    date: "2025-06-21",
    description: "Began building out the online multiplayer framework.",
    tags: ["online", "code"]
  }
];

function getTags(updateTags) {
  let str = "";
  updateTags.forEach(function(tag) {
    str += `<div class="tag"><p>${tag}</p></div>`;
  });
  return str;
}

function getUpdates(updatelist) {
  let html = "";
  updatelist.forEach(function(update) {
    html += `<div class="update">
      <h3>${update.name}</h3>
      <p>${update.description}</p>
      <p>${update.date}</p>
      <section class="tags"><h4>Tags</h4>${getTags(update.tags)}</section>
    </div>`;
  });
  return html;
}

function filterUpdates(filtertext) {
  return projectLog.filter(update => 
    update.tags.some(tag => tag.toLowerCase().includes(filtertext.toLowerCase()))
  );
}

function postUpdates(updates) {
  document.body.querySelector(".updates").innerHTML = getUpdates(updates);
}

postUpdates(projectLog);

const filter = document.body.querySelector(".filter");
const filtertextbox = document.body.querySelector(".filtertext");

filter.addEventListener("click", function () {
  const filterText = filtertextbox.value.trim();
  const filtered = filterText ? filterUpdates(filterText) : projectLog;
  postUpdates(filtered);
});
