const projectLog = [
  {
    name: "Started Project",
    date: "June 2022",
    description: "Started working on the project. And learning... A LOT.",
    tags: ["code", "visual development", "blender"]
  },
  {
    name: "Listed Project on Steam",
    date: "Dec 2023",
    description: "After 1.5 years of development, we listed Trophy Hunt on steam... and never updated again. about 500 people played for an average of 35 mins. Occasionally people still play today",
    tags: ["A learning experience"]
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
