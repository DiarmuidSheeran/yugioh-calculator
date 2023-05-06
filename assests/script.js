//Player names stored in these variables
let playerName1 = document.getElementById("player-1");
let playerName2 = document.getElementById("player-2");
//Takes value of result and initializes it to screen
let screen = document.getElementById("result");
//variables assigned 0 for a starting count
let winPlayer1 = 0;
let winPlayer2 = 0;

//prompt user to enter a name when text field is clicked. Name is stored on the console and the value is passed to variabele playerName1
function submitName1() {         
    let enterName1 = prompt("Enter Player Ones Name: ") 
    console.log("Player One: " + enterName1)
    playerName1.value = enterName1
}
//prompt user to enter a name when text field is clicked. Name is stored on the console and the value is passed to variabele playerName2
function submitName2() {
    let enterName2 = prompt("Enter Player Ones Name: ") 
    console.log("Player One: " + enterName2)
    playerName2.value = enterName2
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
    let result = document.getElementById('result-screen')
    let winner = document.getElementById('p-2-count')
    //check if screen value is = 0
    if (eval(screen.value) === 0) {
        //check if playerName2 has content, if true print message with player 2's name and add a count to player 2's score
        if (playerName2.value != "") {
            result.value = playerName2.value + " won this round"
            winPlayer2++;
            winner.innerHTML = "Wins: " + winPlayer2;
            clearScreen2()
            clearScreen()  
       }
       //if false computer prints generic name to screen and adds count to score
       else {
            result.value = "Player 2 won this round"
            winPlayer2++;
            winner.innerHTML = "Wins: " + winPlayer2;
            clearScreen2()
            clearScreen()
        }
    }
    // checks if player 2's count has reached 2. if so it will print result that game has been won and restartMatch is called to revert the wins to 0 
    if (winPlayer2 === 2) {
        if(playerName2.value != "") {
            result.value = playerName2.value + " has won the game!"
            resetMatch()
        }else {
            result.value= "Player 2 has won the game!"
            resetMatch()
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
    let result = document.getElementById('result-screen')
    let winner = document.getElementById('p-1-count')
    if (eval(screen2.value) === 0) {
        if (playerName1.value != "") {
            result.value = playerName1.value + " won this round"
            winPlayer1++;
            winner.innerHTML = "Wins: " + winPlayer1;
            clearScreen2()
            clearScreen()     
       }else {
            result.value = "Player 1 won this round"
            winPlayer1++;
            winner.innerHTML = "Wins: " + winPlayer1;
            clearScreen2()
            clearScreen()
        }
    }

    if (winPlayer1 === 2) {
        if(playerName1.value != "") {
            result.value = playerName1.value + " has won the game!"
            
            resetMatch()
        }else{
            result.value= "Player 2 has won the game!"
            resetMatch()
        }
    }     
}
function undo2() {
    screen2.value = screen2.value.slice(0, -1);
}
//resests the wins of both players to 0 when function is called
function resetMatch() {
    let reset1 = document.getElementById('p-1-count')
    let reset2 = document.getElementById('p-2-count')
    winPlayer1 = 0;
    winPlayer2 = 0;
    reset1.innerHTML = "Wins: 0"
    reset2.innerHTML = "Wins: 0"
}
//returns the result screen to an empty string
function clearResult() {
    let result = document.getElementById('result-screen')
    result.value = ""
}
/**
 * Dice Roll
 */
//The dice rool animation gif is set to the variable diceNum1. The result variable is assigned an empty string from the result-screen
function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    diceNum1.setAttribute("src", "assests/images/diceroll.gif")
    let result = document.getElementById('result-screen')
    result.value = ""
    //create timer for the gif animation length
    setTimeout(() => {
        //assign a random number between 1 and 6 to randomNumber1
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        //the random number becomes the the last number on the dice image file name which produces the image of that specific dice
        diceNum1.setAttribute('src', 'assests/images/dice' + randomNumber1 + '.png');
    }, 2500);
}