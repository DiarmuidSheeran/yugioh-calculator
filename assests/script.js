//Player names stored in these variables
let playerName1 = document.getElementById("player-1");
let playerName2 = document.getElementById("player-2");

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

