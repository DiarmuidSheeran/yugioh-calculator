# Yugioh Dueling Calculator
This website is a tool inteded for users playing the YuGiOh trading card game.

The game is a two player game and each player statrs on 8000 life points and can use the calculator within the website to keep track of their life points

Each player attacks with different monster cards until one player reaches 0 life points. At this point the life points will return to 8000 for each user indicating the end of a round or game.

Each game in YuGiOh is best of 3 and the wins section of the calculator keeps track of each win and once a player reaches 2 wins the score resets for both players.

The website also has other features for the users such as a timer to keep track of round times (40 minutes) and a dice and coin tool so users dont need any of these items pysically as they can use them within the app as needed.
![picture of Website on differnet devices](documentation/responsive.jpg)

## Contents
* [Features](#Features)
  * [Logo](#Logo)
  * [Username](#Username)
  * [Calculator](#Calculator)
  * [Score Counter](#Score-Counter)
  * [Results Screen](#Results-Screen)
  * [Reset Match Score](#Reset-Match-Score)
  * [Timer](#Timer)
  * [Dice and Coin](#Dice-and-Coin)
  * [Navigation](#Navigation)

* [Wireframes](#Wireframes)

* [Testing](#Testing)

* [Bugs](#Bugs)
  * [Solved Bugs](#Solved-Bugs)
  * [Unsolved Bugs](#Unsolved-Bugs)

* [Validator Testing](#Validator-Testing)

* [Accessibility](#Accessibility)

* [Deployment](#Deployment)

* [Credits](#Credits)
  * [Content](#Content)
  * [Media](#Media)

  ## Features

### Logo
The YuGiOh logo is positioned at the top center of the page and gives clarity to the user on what game this tool is used for.
![picture of Website logo](documentation/logo.jpg)

### Username

* The name input field allows users to input their names and save it to the conole to be recalled trought the match for differnet results.
* This adds functionality to website allowing the user to keep track of which calculator they are using.
* It adds a personal touch for the users to enhance the user expierence.
* Altenatively if the users decide to not input their names a generic player 1 and player 2 name is used on the result screen.
![picture of player empty name input fields](documentation/name-empty.jpg)
![picture of player filled name input fields](documentation/name-filled.jpg)
![picture of results field using name](documentation/name-results.jpg)

### Calculator

* Each player has a separate calculator section with buttons for entering numbers and performing calculations.
* A disabled input field is used to display the users current life points.
* An initial value of 8000 is displayed on the screen.
* The buttons labeled with numbers allow the user to add the corresponding number to the life point screen.
* The buttons labeled with "+" and "-" allow the user to add a operand to the life point screen.
* The button labeled with "=" allow the user  to add or subtract the current value of the input field from the total.
* The "Undo" button deletes the last value on the screen to remove typos.
* The "Reset" button sets the life point total back to the starting value of 8000.
* When hovered over these buttons change there properties for a more user friendly UI design
![picture of calculators](documentation/calculator.jpg)
![picture of calculator with calculation](documentation/calculation.jpg)

### Score Counter

* Below each player's calculator buttons, there is a section that displays the number of wins for that player.
* This section is labeled with "Wins: 0.
* Each time a users life points reach 0 the winners score counter goes up by 1 point
* When a player has two wins the score counter for both players gets reset.
![picture of score counter and player after winning a round](documentation/round-win.jpg)
![picture of score counter and player after winning a game](documentation/win-score.jpg)

### Results Screen
* A disabled text input field with an initial value of empty is used to display the results of the game.
* The screen will dispaly results to user if they lose a certain amount of life points, if the loose the round or if they lose the game.
* Additionaly the screen is used to display the outcomes of the dice roll and the coin flip.
![picture of result for loss of life points](documentation/result-life-points.jpg)
![picture of result for coin flip](documentation/result-coin.jpg)
![picture of result for dice roll](documentation/result-dice.jpg)


