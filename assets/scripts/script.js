var balance = 200;

const gameButton = document.getElementById("place_bet_roulette");
gameButton.addEventListener("click", place_bet_roulette);

function place_bet_roulette() {
    var place_bet_roulette = document.getElementById("number_roulette");
    const current_number = generate_number();
    console.log(current_number);
    even_odd_verify(current_number);
}


function generate_number() {
    return Math.floor(Math.random() * 12);
}

function even_odd_verify(x) {
    if (x >= 0 && x < 4) {
        var element = document.getElementById("mainbox");
        element.classList.add("spin_green");
        return 1;
    } else if (x >= 4 && x < 7) {
        var element = document.getElementById("mainbox");
        element.classList.add("spin_blue");
        return 2;
    } else if (x >= 7 && x < 10) {
        var element = document.getElementById("mainbox");
        element.classList.add("spin_orange");
        return 3;
    }else if (x >= 10){
        var element = document.getElementById("mainbox");
        element.classList.add("spin_white");
        return 4;
    }
}