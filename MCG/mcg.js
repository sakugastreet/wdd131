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
        image: "Header.png",
        description: "A multiplayer game about robots that help move things"
    }
]


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