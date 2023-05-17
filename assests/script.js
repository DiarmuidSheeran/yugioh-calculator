//Player names stored in these variables
let playerName1 = document.getElementById("player-1");
let playerName2 = document.getElementById("player-2");
//Takes value of result and initializes it to screen
let screen = document.getElementById("result");
let screen2 = document.getElementById("result-2");
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
//calculates the lifepoints lost or gained and checks if life point go to 0
function calculate() {
    let result = document.getElementById('result-screen');
    let winner = document.getElementById('p-2-count');
    //checks if the screen has a '-' on it and if true splits the strings on either side of it.
    if (screen.value.includes('-')){
        let lifePoints = screen.value.split('-');
        //checks the variable lifepoints for 2 strings and pasess the two strings into two differnet variables converting them to ints
        if(lifePoints.length === 2) {
            let playerLifePoints = parseInt(lifePoints[0]);
            let battleDamage = parseInt(lifePoints[1]);
            let damageTaken = playerLifePoints - battleDamage;
            //converts the damageTaken calculation back to a string
            screen.value = damageTaken.toString();
            //check if playerName1 has a value for results screen if not generic name used
            if (playerName1.value != "") {
                result.value = playerName1.value + " just lost: " + battleDamage + " life points";
            }else {
                result.value = "Player 1 just lost: " + battleDamage + " life points";
            }
            //if the length of the string is greater than 2 an error is posted to result screen and undo function called
        } else if (lifePoints.length > 2){
                result.value = "Only one calculation allowed at a time!";
                undo();
            }
    }
    //same as above if statements but for addition
    if (screen.value.includes('+')){
        let lifePoints = screen.value.split('+');
        if(lifePoints.length === 2) {
            let playerLifePoints = parseInt(lifePoints[0]);
            let battleDamage = parseInt(lifePoints[1]);
            let damageTaken = playerLifePoints + battleDamage;
            screen.value = damageTaken.toString();
            if (playerName1.value != "") {
                result.value = playerName1.value + " just gained: " + battleDamage + " life points";
                }else {
                    result.value = "Player 1 just gained: " + battleDamage + " life points";
                }
        }else if (lifePoints.length > 2){
                result.value = "Only one calculation allowed at a time!";
                undo();
            } 
    }
    //while loop keeps playing until score reaches 0 
    while (screen.value <= 0) {
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
//allows user to edit a mistake by using the slice method to remove last value string off the screen 
function undo() {
    screen.value = screen.value.slice(0, -1);
}

/**
 * The same functions repeated for player 2
 */

function addToScreen2(value) {
    screen2.value += value;
}

function clearScreen2() {
    screen2.value = "8000";
}

function calculate2() {
    let result = document.getElementById('result-screen');
    let winner = document.getElementById('p-1-count');

    if (screen2.value.includes('-')){
        let lifePoints = screen2.value.split('-');
        if(lifePoints.length === 2) {
            let playerLifePoints = parseInt(lifePoints[0]);
            let battleDamage = parseInt(lifePoints[1]);
            let damageTaken = playerLifePoints - battleDamage;
            screen2.value = damageTaken.toString();
            if (playerName2.value != "") {
                result.value = playerName2.value + " just lost: " + battleDamage + " life points";
            }else {
                result.value = "Player 2 just lost: " + battleDamage + " life points";
            }
        } else if (lifePoints.length > 2){
                result.value = "Only one calculation allowed at a time!";
                undo();
            }
    }
    if (screen2.value.includes('+')){
        let lifePoints = screen2.value.split('+');
        if(lifePoints.length === 2) {
            let playerLifePoints = parseInt(lifePoints[0]);
            let battleDamage = parseInt(lifePoints[1]);
            let damageTaken = playerLifePoints + battleDamage;
            screen2.value = damageTaken.toString();
            if (playerName2.value != "") {
                result.value = playerName2.value + " just gained: " + battleDamage + " life points";
                }else {
                    result.value = "Player 2 just gained: " + battleDamage + " life points";
                }
        }else if (lifePoints.length > 2){
                result.value = "Only one calculation allowed at a time!";
                undo();
            } 
    }

    if ((screen2.value) <= 0) {
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
        let randomDice = Math.floor(Math.random() * 6) + 1;
        //the random number becomes the the last number on the dice image file name which produces the image of that specific dice
        diceNum1.setAttribute('src', 'assests/images/dice' + randomDice + '.png');
        //checks what number was generated and prints appropriate result to the result screen
        if (randomDice === 1) {
            result.value = "You Rolled a 1!";
        } else if (randomDice === 2) {
            result.value = "You Rolled a 2!";
        } else if (randomDice === 3) {
            result.value = "You Rolled a 3!";
        } else if (randomDice === 4) {
            result.value = "You Rolled a 4!";
        } else if (randomDice === 5) {
            result.value = "You Rolled a 5!";
        } else if (randomDice === 6) {
            result.value = "You Rolled a 6!";
        }

    }, 2000);
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
        let randomCoin = Math.floor(Math.random() * 2) + 1;
        coinNum1.setAttribute('src', 'assests/images/coin' + randomCoin + '.gif');

        if (randomCoin === 1) {
            result.value = "Tails!";
        } else {
            result.value = "Heads!";
        }

    }, 2000);
}

//function to format the time in seconds. variable seconds is a value of the function formatTime
function formatTime(seconds) {
    //function divides the seconds by 60 rounding the number down and leaving no decimal place.
    let minutes = Math.floor(seconds / 60);
    //when seconds are divided by 60 the modulo operator finds the remainder of seconds
    let secondsRemaining = seconds % 60;
    //minutes and seconds are conveted to string, padstart method ensures the minimum length of two by adding a 0 where needed
    return minutes.toString().padStart(2, '0') + ':' + secondsRemaining.toString().padStart(2, '0');
}
//updates the screen with formaTimer
function updateTimer() {
    const timerScreen = document.getElementById("timer-screen");
    timerScreen.value = formatTime(timeRemaining);
}
//timer is decreased by one second, if time reaches 0 timer is stopped and a message is posted to result screen
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
//checks boolean of isPaused and timer decreases by 1000 milliseconds(one second)
function play() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(decreaseTimer, 1000);
    }
}
//checks boolean of isPaused, timer stopped with clearInterval function
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