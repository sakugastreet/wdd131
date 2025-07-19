const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

document.body.querySelector("img").src = character.image
document.body.querySelector(".name").innerHTML = `<p>${character.name}</p>`
document.getElementById("class").textContent = character.class;
let level = document.getElementById("level")
level.textContent = character.level;
let health = document.getElementById("health")
health.textContent = `${character.health}`;

let levelUpBut = document.getElementById("levelup")
let attackedBut = document.getElementById("attacked")

levelUpBut.addEventListener("click", () => {
  character.levelUp();
  level.textContent = character.level;
  attacked.textContent = character.health;
});

attackedBut.addEventListener("click", () => {
  character.attacked();
  health.textContent = `${character.health}`;})