//Player names stored in these variables
let playerName1 = document.getElementById("player-1");
let playerName2 = document.getElementById("player-2");
//Takes value of result and initializes it to screen
let screen = document.getElementById("result");
//variables assigned 0 for a starting count
let winPlayer1 = 0;
let winPlayer2 = 0;
//variables for timer
let timer;
let timeRemaining = 2400;
let isPaused = true;

//prompt user to enter a name when text field is clicked. Name is stored on the console and the value is passed to variabele playerName1
function submitName1() {
    let enterName1 = prompt("Enter Player Ones Name: ");
    console.log("Player One: " + enterName1);
    playerName1.value = enterName1;
}
//prompt user to enter a name when text field is clicked. Name is stored on the console and the value is passed to variabele playerName2
function submitName2() {
    let enterName2 = prompt("Enter Player Ones Name: ");
    console.log("Player One: " + enterName2);
    playerName2.value = enterName2;
}
/**
 * 
 * functions for player one calculator 
 */
//takes the value that is assigned to the input field to give the calculator its initiaL value
function addToScreen(value) {
    screen.value += value;
}
//sets the initial value of 8000 back to the input fields
function clearScreen() {
    screen.value = "8000";
}
//eval object checks the screens value and makes calculation when = operand is clicked
function calculate() {
    screen.value = eval(screen.value);
    let result = document.getElementById('result-screen');
    let winner = document.getElementById('p-2-count');
    //while loop keeps playing until score reaches 0
    while (eval(screen.value) <= 0) {


        //check if screen value is = 0



        //check if playerName2 has content, if true print message with player 2's name and add a count to player 2's score
        if (playerName2.value != "") {
            result.value = playerName2.value + " won this round";
            winPlayer2++;
            winner.innerHTML = "Wins: " + winPlayer2;
            clearScreen2();
            clearScreen();
            break;
        }
        //if false computer prints generic name to screen and adds count to score
        else if (playerName2.value === "") {
            result.value = "Player 2 won this round";
            winPlayer2++;
            winner.innerHTML = "Wins: " + winPlayer2;
            clearScreen2();
            clearScreen();
            break;
        } else {
            calculate();
        }
    }


    // checks if player 2's count has reached 2. if so it will print result that game has been won and restartMatch is called to revert the wins to 0 
    if (winPlayer2 === 2) {
        if (playerName2.value != "") {
            result.value = playerName2.value + " has won the game!";
            resetMatch();
            clearScreen2();
            clearScreen();
        } else {
            result.value = "Player 2 has won the game!";
            resetMatch();
            clearScreen2();
            clearScreen();
        }
    }

}
//allows user to edit a mistake by using the slice method to remove last value of the screen value string
function undo() {
    screen.value = screen.value.slice(0, -1);
}

/**
 * The same functions repeated for player 2
 */
let screen2 = document.getElementById("result-2");

function addToScreen2(value) {
    screen2.value += value;
}

function clearScreen2() {
    screen2.value = "8000";
}

function calculate2() {
    screen2.value = eval(screen2.value);
    let result = document.getElementById('result-screen');
    let winner = document.getElementById('p-1-count');
    if (eval(screen2.value) <= 0) {
        if (playerName1.value != "") {
            result.value = playerName1.value + " won this round";
            winPlayer1++;
            winner.innerHTML = "Wins: " + winPlayer1;
            clearScreen2();
            clearScreen();
        } else {
            result.value = "Player 1 won this round";
            winPlayer1++;
            winner.innerHTML = "Wins: " + winPlayer1;
            clearScreen2();
            clearScreen();
        }
    }

    if (winPlayer1 === 2) {
        if (playerName1.value != "") {
            result.value = playerName1.value + " has won the game!";

            resetMatch();
        } else {
            result.value = "Player 2 has won the game!";
            resetMatch();
        }
    }
}

function undo2() {
    screen2.value = screen2.value.slice(0, -1);
}
//resests the wins of both players to 0 when function is called
function resetMatch() {
    let reset1 = document.getElementById('p-1-count');
    let reset2 = document.getElementById('p-2-count');
    winPlayer1 = 0;
    winPlayer2 = 0;
    reset1.innerHTML = "Wins: 0";
    reset2.innerHTML = "Wins: 0";
}
//returns the result screen to an empty string
function clearResult() {
    let result = document.getElementById('result-screen');
    result.value = "";
}
/**
 * Dice Roll
 */
//The dice rool animation gif is set to the variable diceNum1. The result variable is assigned an empty string from the result-screen
function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    diceNum1.setAttribute("src", "assests/images/diceroll.gif");
    let result = document.getElementById('result-screen');
    result.value = "";
        //create timer for the gif animation length
    setTimeout(() => {
        //assign a random number between 1 and 6 to randomNumber1
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        //the random number becomes the the last number on the dice image file name which produces the image of that specific dice
        diceNum1.setAttribute('src', 'assests/images/dice' + randomNumber1 + '.png');
        //checks what number was generated and prints appropriate result to the result screen
        if (randomNumber1 === 1) {
            result.value = "You Rolled a 1!";
        } else if (randomNumber1 === 2) {
            result.value = "You Rolled a 2!";
        } else if (randomNumber1 === 3) {
            result.value = "You Rolled a 3!";
        } else if (randomNumber1 === 4) {
            result.value = "You Rolled a 4!";
        } else if (randomNumber1 === 5) {
            result.value = "You Rolled a 5!";
        } else if (randomNumber1 === 6) {
            result.value = "You Rolled a 6!";
        }

    }, 2500);
}
/**
 * Coin Flip
 */
//function works as the above function works but for a coin flip
function flipCoin() {
    let coinNum1 = document.querySelector(".img2");
    coinNum1.setAttribute("src", "assests/images/coin-flip.gif");
    let result = document.getElementById('result-screen');
    result.value = "";
    setTimeout(() => {
        let randomNumber2 = Math.floor(Math.random() * 2) + 1;
        coinNum1.setAttribute('src', 'assests/images/coin' + randomNumber2 + '.gif');

        if (randomNumber2 === 1) {
            result.value = "Tails!";
        } else {
            result.value = "Heads!";
        }

    }, 2500);
}

//function to repersent the time in seconds. variable seconds is a value of the function formatTime
function formatTime(seconds) {
    //function divides the seconds by 60 rounding the number down and leaving no decimal place.
    let minutes = Math.floor(seconds / 60);
    //when seconds are divided by 60 the modulo operator finds the remainder of seconds
    let secondsRemaining = seconds % 60;
    //minutes and seconds are conveted to string, padstart method ensures the minimum length of two by adding a 0
    return minutes.toString().padStart(2, '0') + ':' + secondsRemaining.toString().padStart(2, '0');
}
//adds the timer-screen to a variable and updates the screen with formaTimer
function updateTimer() {
    const timerScreen = document.getElementById("timer-screen");
    timerScreen.value = formatTime(timeRemaining);
}
//timer is decreased by one second, if time reaches 0 timer is stopped and string posted to result screen
function decreaseTimer() {
    timeRemaining--;
    let result = document.getElementById('result-screen');
    if (timeRemaining < 0) {
        clearInterval(timer);
        result.value = "Its a draw!";
            //while timeRemaining is greater than 0 updateTimer function is called
    } else {
        updateTimer();
    }
}
//checks boolean of isPaused and while false timer decreases by 1000 milliseconds(one second)
function play() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(decreaseTimer, 1000);
    }
}
//checks boolean of isPaused and while true timer stopped with clearInterval function
function pause() {
    if (!isPaused) {
        isPaused = true;
        clearInterval(timer);
    }
}
//pauses the timer, sets timeRemaining back to 2400 seconds
function restart() {
    pause();
    timeRemaining = 2400;
    updateTimer();
}