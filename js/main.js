import nations from "./nations.js";
const wrapper = document.querySelector('.content-container');
const form = document.querySelector(".js-select-form");
const playersSelect = document.querySelector(".js-people-amount");
const nationsSelect = document.querySelector(".js-nations-amount");
const startBtn = document.querySelector(".js-randomize");
const listOfPlayers = document.querySelector(".js-list-of-players");
const containerForNations = document.querySelector('.nations-container');
const restart = document.createElement('button');
const switchContainer = document.querySelector('.theme-switch');
restart.textContent = 'Restart';
restart.classList.add('random');

startBtn.addEventListener("click", handleRandomizeClick);
restart.addEventListener("click", handleRandomizeClick);

let playersAmt;
let nationsAmt;

const switchBtn = document.querySelector(".js-switch-input");
const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme"
};

if (
    localStorage.getItem("theme") &&
    localStorage.getItem("theme") === "dark-theme"
) {
    document.body.classList.add(localStorage.getItem("theme"));
    switchBtn.checked = true;
}

switchBtn.addEventListener("change", handleCheckBoxClick);
function handleCheckBoxClick() {
    if (switchBtn.checked) {
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
        localStorage.setItem("theme", Theme.DARK);
    } else {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        localStorage.setItem("theme", Theme.LIGHT);
    }
}

function handleRandomizeClick(e) {
    e.preventDefault();
    listOfPlayers.innerHTML = '';
    containerForNations.innerHTML = '';
    playersAmt = +playersSelect.value;
    form.classList.add("none");
    createPlayersMarkup(playersAmt);
    wrapper.append(restart);
    switchContainer.remove();
}

function createPlayersMarkup(playersAmount) {
    nationsAmt = +nationsSelect.value;
    const arr = [...nations];
    for (let i = 1; i < playersAmount + 1; i++) {
        listOfPlayers.insertAdjacentHTML(
            "beforeend",
            `<li class="list-of-players_item"><p class="list-of-players_text">Player ${i}</p></li>`);
        createNationsMarkup(nationsAmt, arr);
    }
}

function createNationsMarkup(nationsAmount, arr) {
    let arrOfNation = [];
    const listOfNations = document.createElement('ul');
    let index;
    for (let i = 0; i < nationsAmount; i++) {
        if (!arrOfNation.join("").includes(arrOfNation[i])) {
            const li = document.createElement("li");
            const name = document.createElement("p");
            const img = document.createElement("img");
            let randomItem = arr[Math.floor(Math.random() * arr.length)];
            listOfNations.classList.add('list-of-nations');
            li.classList.add('list-of-nations_item');
            index = arr.indexOf(randomItem);
            arr.splice(index, 1);
            arrOfNation.push(randomItem.name);
            appendItems(li, img, name, listOfNations, randomItem);
        }
    }
    containerForNations.append(listOfNations);
}

function appendItems(li, img, name, listOfNations, randomItem) {
    name.textContent = randomItem.name;
    img.src = randomItem.img;
    li.append(img, name);
    listOfNations.append(li);
}