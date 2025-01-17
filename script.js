var player1 = Math.floor(Math.random() * 6 + 1);
console.log(player1);

var player2 = Math.floor(Math.random() * 6 + 1);
console.log(player2);


var img1 = document.querySelector('.diceImg1');
var img2 = document.querySelector('.diceImg2');


function imageGenerator(player, img) {
    if (player === 1) {
        img.src = "../images/dice1.png";
    } else if (player === 2) {
        img.src = "../images/dice2.png";
    } else if (player === 3) {
        img.src = "../images/dice3.png";
    } else if (player === 4) {
        img.src = "../images/dice4.png";
    } else if (player === 5) {
        img.src = "../images/dice5.png";
    } else {
        img.src = "../images/dice6.png";
    }
}


imageGenerator(player1, img1);
imageGenerator(player2, img2);

function diceGame(player1 , player2) {
    if (player1 === player2) {
        document.querySelector("h1").innerHTML = "Its A draw";
        // console.log(" It's a Draw ");
    }
    else if (player1 > player2) {
        document.querySelector("h1").innerHTML = "Player 1 win";
        // console.log("player 1 win");
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 win";
        console.log("player 2 win");
    }
}
var luckyDraw = diceGame(player1 , player2);
console.log(luckyDraw);


