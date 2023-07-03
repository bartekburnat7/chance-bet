var balance = 200;

const gameButton = document.getElementById("place_bet_roulette");
gameButton.addEventListener("click", result = place_bet_roulette);

function place_bet_roulette() {
    var wheel = document.getElementById("mainbox");
    wheel.removeAttribute("class");

    var place_bet_roulette = document.getElementById("bet_size").value;
    var current_number = generate_number();
    console.log(current_number);
    var result = win_loss_calc(even_odd_verify(current_number), selected_color(), place_bet_roulette);
    console.log(result);
    setTimeout(update_balance(result), 7000);
}

function roll(x) {
    x.disabled = true;
    setTimeout(function () {
        x.disabled = false;
        var wheel = document.getElementById("mainbox");
        wheel.removeAttribute("class");
    }, 7000);
}

function update_balance(x) {
    document.getElementById("my_balance").innerHTML = "Balance: £" + x;
}

function generate_number() {
    return Math.floor(Math.random() * 12);
};

function selected_color() {
    if (document.getElementById('white_box_choice').checked) {
        return 4;
    } else if (document.getElementById('orange_box_choice').checked) {
        return 3;
    } else if (document.getElementById('green_box_choice').checked) {
        return 1;
    } else if (document.getElementById('blue_box_choice').checked) {
        return 2;
    } else {
        return false;
    }
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
    } else if (x >= 10) {
        var element = document.getElementById("mainbox");
        element.classList.add("spin_white");
        return 4;
    }
}

function win_loss_calc(x, y, z) {
    balance = balance - z;
    update_balance(balance);
    if (x == y) {
        console.log("WIN");
        balance = balance + (z * 4);
        return balance;
    } else {
        console.log("LOSS");
        return balance;
    }
}
