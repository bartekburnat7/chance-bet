var balance = 200;

const gameButton = document.getElementById("place_bet_roulette");
gameButton.addEventListener("click", place_bet_roulette);

function place_bet_roulette() {
    var place_bet_roulette = document.getElementById("number_roulette");
    const current_number = generate_number();
    console.log(current_number);
    even_odd(current_number);
}


function generate_number() {
    return Math.floor(Math.random() * 15);
}

function even_odd(x) {
    if (x === 0) {
        return 0;
    } else if ((x & 1) === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}