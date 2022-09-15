
const player = {
    // name: prompt("Please enter your first name."),
    chips: 145
};

let playerEl = document.querySelector(".player-el");
playerEl.textContent = `Your remaining chips: $${player.chips}`;

let cards = [];
cardsEl = document.querySelector(".cards");
let sum = 0;
let sumEl = document.querySelector(".sum");

let newCardButton = document.querySelector(".new-card")

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.querySelector(".message-el");

function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber >= 11 ) {
        return 10;
    } else {
        return randomNumber;
    }
};

function startGame() {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();

    document.querySelector(".start-game").textContent = `New Game`;
};

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: `

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]}  `;
    }

    if (sum < 21) {
        message = `Do you want to draw a new card?`
        newCardButton.classList.remove("hide");
    } else if (sum === 21) {
        message = `You've got Blackjack!`;
        hasBlackJack = true;
    } else {
        message = `You're out of the game.`;
        isAlive = false;
    }

    messageEl.textContent = message;
};

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
};



