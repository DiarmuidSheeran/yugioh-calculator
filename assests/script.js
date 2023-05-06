//Player names stored in these variables
let playerName1 = document.getElementById("player-1");
let playerName2 = document.getElementById("player-2");
let screen = document.getElementById("result");
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

}
