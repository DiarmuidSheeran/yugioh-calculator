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
            clearScreen()   
       }
       //if false computer prints generic name to screen and adds count to score
       else {
            result.value = "Player 2 won this round"
            winPlayer2++;
            winner.innerHTML = "Wins: " + winPlayer2;
            clearScreen()
        }
    }
}

