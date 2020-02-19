import nations from "./nations.js";

const form = document.querySelector(".js-select-form");
const playersSelect = document.querySelector(".js-people-amount");
const nationsSelect = document.querySelector(".js-nations-amount");
const startBtn = document.querySelector(".js-randomize");
const listOfPlayers = document.querySelector(".js-list-of-players");
const containerForNations = document.querySelector('.nations-container');
startBtn.addEventListener("click", handleRandomizeClick);
let playersAmt;
let nationsAmt;

function handleRandomizeClick(e) {
    e.preventDefault();
    playersAmt = +playersSelect.value;
    form.classList.add("none");
    document.body.style.color = "white";
    createPlayersMarkup(playersAmt);
}

function createPlayersMarkup(playersAmount) {
    nationsAmt = +nationsSelect.value;
    for (let i = 1; i < playersAmount + 1; i++) {
        listOfPlayers.insertAdjacentHTML(
            "beforeend",
            `<li class="list-of-players_item"><p class="list-of-players_text">Player ${i} choose from:	</p></li>`);
        createNationsMarkup(nationsAmt, nations);
    }
}

function createNationsMarkup(nationsAmount, arr) {
    let arrOfNation = [];
    const listOfNations = document.createElement('ul');
    let index;
    for (let i = 0; i < nationsAmount; i++) {
        if (!arrOfNation.join("").includes(arrOfNation[i])) {
            listOfNations.classList.add('list-of-nations');
            const li = document.createElement("li");
            li.classList.add('list-of-nations_item');
            const name = document.createElement("p");
            const img = document.createElement("img");
            let randomItem = arr[Math.floor(Math.random() * arr.length)];
            index = arr.indexOf(randomItem);
            arr.splice(index, 1);
            arrOfNation.push(randomItem.name);
            name.textContent = randomItem.name;
            img.src = randomItem.img;
            li.append(name, img);
            listOfNations.append(li);
        }
    }
    containerForNations.append(listOfNations);
}
