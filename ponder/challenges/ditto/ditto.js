const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
hp: 48,
attack: 48,
defense: 48,
special_attack: 48,
special_defense: 48,
speed: 48
},
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
}
};

const h1 = document.body.querySelector("h1");
const h2 = document.body.querySelector("h2");
const im = document.body.querySelector("img");

h1.innerHTML = ditto.name;
h2.innerHTML = ditto.abilities[1];
im.src = ditto.sprite

im.addEventListener("click", function() {
    im.src = ditto.transform()
})