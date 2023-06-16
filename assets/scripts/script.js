var balance = 200;

const gameButton = document.getElementById("place_bet");
gameButton.addEventListener("click", place_bet_roulette);

function place_bet_place_bet_roulette() {
    var place_bet_roulette = document.getElementById("number_roulette");
    generateNumber();
}

function generate_number() {
    return Math.floor(Math.random() * 15);
}

var random_number = generateNumber();