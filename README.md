# Yugioh Dueling Calculator
This website is a tool intended for users playing the YuGiOh trading card game.

The game is a two player game and each player starts on 8000 life points and can use the calculator within the website to keep track of their life points

Each player attacks with different monster cards until one player reaches 0 life points. At this point the life points will return to 8000 for each user indicating the end of a round or game.

Each game in YuGiOh is best of 3 and the wins section of the calculator keeps track of each win, and once a player reaches 2 wins the score resets for both players.

The website also has other features for the users such as a timer to keep track of round times (40 minutes) and a dice and coin tool so users don't need any of these items physically as they can use them within the app as needed.
![picture of Website on differnet devices](documentation/responsive.jpg)

## Contents
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Logo](#logo)
  * [Username](#username)
  * [Calculator](#calculator)
  * [Score Counter](#score-counter)
  * [Results Screen](#results-screen)
  * [Reset Match Score](#reset-match-score)
  * [Timer](#timer)
  * [Dice and Coin](#dice-and-coin)
  * [Navigation](#navigation)
  * [Error Page](#error-page)

* [Testing](#testing)

* [Bugs](#bugs)
  * [Solved Bugs](#solved-bugs)
  * [Unsolved Bugs](#unsolved-bugs)

* [Validator Testing](#validator-testing)

* [Accessibility](#accessibility)

* [Deployment](#deployment)

* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)

## Design

### Colour Scheme
* I have used `#000000` & `#ef492f` as the primary and secondary colours for the page.
* I have used `#717E8E` as a border for the buttons and calculator.
* I have used `#ffffff` for the numbers and labels.
* The `#ef492f` and `#717E8E` were taken from the logo with a color picker in the inspection tool of chrome. This allows for a more streamlined design throughout the page.
![picture of color scheme](documentation/color-scheme.jpg)

### Typography

* Google Fonts were used to import the chosen font Anton for use in the site.
![picture of font used on  the site](documentation/font.jpg)

### Wireframes
![picture of wireframes for website](documentation/wireframe.jpg)

## Features

### Logo
* The YuGiOh logo is positioned at the top center of the page and gives clarity to the user on what game this tool is used for.
![picture of Website logo](documentation/logo.jpg)

### Username

* The name input field allows users to input their names and save it to the console to be recalled throughout the match for different results.
* This adds functionality to a website allowing the user to keep track of which calculator they are using.
* It adds a personal touch for the users to enhance the user experience.
* Altenatively if the users decide to not input their names a generic player 1 and player 2 name is used on the result screen.
![picture of player empty name input fields](documentation/name-empty.jpg)
![picture of player filled name input fields](documentation/name-filled.jpg)
![picture of results field using name](documentation/name-results.jpg)

### Calculator

* Each player has a separate calculator section with buttons for entering numbers and performing calculations.
* A disabled input field is used to display the users current life points.
* An initial value of 8000 is displayed on the screen.
* The buttons labeled with numbers allow the user to add the corresponding number to the life point screen.
* The buttons labeled with "+" and "-" allow the user to add an operand to the life point screen.
* The button labeled with "=" allow the user  to add or subtract the current value of the input field from the total.
* The "Undo" button deletes the last value on the screen to remove typos.
* The "Reset" button sets the life point total back to the starting value of 8000.
* When hovered over these buttons change there properties for a more user friendly UI design
![picture of calculators](documentation/calculator.jpg)
![picture of calculator with calculation](documentation/calculation.jpg)

### Score Counter

* Below each player's calculators buttons, there is a section that displays the number of wins for that player.
* This section is labeled with "Wins: 0.
* Each time a users life points reach 0 the winner's score counter goes up by 1 point
* When a player has two wins, the score counter for both players gets reset.
![picture of score counter and player after winning a round](documentation/round-win.jpg)
![picture of score counter and player after winning a game](documentation/win-score.jpg)

### Results Screen
* A disabled text input field with an initial value of empty is used to display the results of the game.
* The screen will display results to the user if they lose a certain amount of life points, if the loose the round or if they lose the game.
* Additionaly the screen is used to display the outcomes of the dice roll and the coin flip.
![picture of result for loss of life points](documentation/result-life-points.jpg)
![picture of result for coin flip](documentation/result-coin.jpg)
![picture of result for dice roll](documentation/result-dice.jpg)

### Reset Match Score
* Clicking the "Reset Match Score" button resets the wins count for both players back to 0. 
![picture of reset match score button](documentation/reset-match-score.jpg)

### Timer
* The timer section displays a countdown timer on an input field with an initial value of 40:00 (40 minutes). 
* The "Play" button starts the timer, the "Pause" button pauses it, and the "Reset" button resets it back to the default value of 40 minutes.
![picture of timer and timer buttons](documentation/timer.jpg)

### Dice and Coin
* The Dice and coin tool when clicked will display a gif of a dice rolling  or a flipping coin. 
* After a set time of 2 seconds each tool will stop and display a random image of either the dice number rolled or side of coin.
* The random image that is displayed sets the reults and the result is displayed on the result screen.
![picture of dice and coin buttons](documentation/dice-coin.jpg)

### Navigation
* The website uses a navigation in the footer to link the user to my github and the yugioh wiki rulebook for additional resources. 
![picture of navigation menu in footer](documentation/navigation.jpg)

### Error Page
* A custom 404 error page was added to the site with a link that will bring the user back to the sites index page.
![picture of error page](documentation/error-page.jpg)


## Testing

* I tested the website worked on different web browsers such as Chrome, Edge and Firefox.
* I tested and confirmed the responsive nature of the site on different devices such a mobile device, a tablet and a desktop computer.
* I confirmed that the navigation in the footer directed the user to the correct destination.
* I have tested the mathematical capabilities of the calculators to make sure they add and subtract correctly.
* I have tested the timer to make sure it plays, pauses and restarts.
* I have tested that the dice roll and the coin flip both give accurate results when used.
* I have tested that the name input fields correctly take in the user data and store it for use in the results screen.
* I have tested that the score counter goes up by one when one players points go to 0 and reset when a player has won twice.
* I have tested the reset button on the calculator to make sure that it resets the life points to there initial values.
* I have tested the reset match button so that the match score are reset back to 0 for both players.

## Bugs

### Solved Bugs

#### Problem:
* While validating my code I was getting a warning for using the eval method in my code for calculations due to security flaws this method brings.
#### Solution:
* I had to go a longer way around my screen doing the calculation without the eval method. I split my string up by the operand the user had entered, and with that I could change the two different strings either side of the operand to its, make the calculation with the two units and convert them back to the string as the result.

#### Problem:
* When a user entered there name into the input field i could'nt use their name for the results screen. 
#### Solution:
* By allowing the user name to be stored on the console, I could recall the user name when needed within different functions.

### Unsolved Bugs
* When a player enters both a plus and minus together and hits the = button, an error for Not a Number (NAN) comes onto their screen. 
* When a player tries to make 2 calculations in one go using a plus and a minus it will always do the minus calculation. It should give an error message and do the call the undo function.

## Validator Testing

* HTML
  * No Issues found on W3C HTML Validator
* CSS
  * No Issues found on jigsaw.w3.org Validator
* Javascript
  * No Issues found on jshint.com Validator

## Accessibility
* I confirmed that my colors and fonts are readable by using the lighthouse tool scoring 100 in accessibility.
![picture of lighthouse results](documentation/lighthouse.jpg)

## Deployment

* This site  was deployed to GitHub pages
* In the github repository of Personal Profile navigate to the settings tab.
* On the left-hand side navigation bar click on the Pages tab.
* Click on the dropdown menu for branches and select main.
* Refresh the page.
* The page provided a link to the completed website.
* The link to the finished website can be found by clicking the link to the [YuGiOh Duel Calculator](https://diarmuidsheeran.github.io/yugioh-calculator/)

## Credits
### Content
* Most of the content for the Javascript for example if statements, functions, loops, string concatinations and using the dom were taken from the student respository within the [Code Institute.](https://codeinstitute.net/ie/)
* The calculator design and implenation were influenced by [Code with Ania KubówCode's](https://www.youtube.com/watch?v=8IxIyI3JomE) youtube video.
* The code for the dice and coin was influenced by the [Lets do Coding](https://www.youtube.com/watch?v=Z22B9ZjcIC4) youtube channel.
* The code for the timer was influenced by few sources including: [dcode's](https://www.youtube.com/watch?v=PIiMSMz7KzM) youtube video and [Reach Star's](https://www.youtube.com/watch?v=4piMZDO5IOI) youtube video.
* Padstart code was taken from [W3Schools.](https://www.w3schools.com/jsref/jsref_string_padstart.asp)
* The clearIterval function was influenced by [W3Schools.](https://www.w3schools.com/jsref/met_win_clearinterval.asp)
* The setIterval function was influenced by [W3Schools.](https://www.w3schools.com/jsref/met_win_setinterval.asp)
* The split string method was influenced by [W3Schools.](https://www.w3schools.com/jsref/jsref_split.asp)
* The includes code was influenced taken from [W3schools.](https://www.w3schools.com/jsref/jsref_includes.asp)

### Media
* The logo image was taken from [pngaa's](https://www.pngaaa.com/search/yugioh/9/) website.
* Many of the symbols on the page such as the play, pause, reset, github and rulebook were got from the [Font-Awesome](https://fontawesome.com/search?q=rewin&o=r) website.
* The images for the dice were got from the [ysandeepjosh](https://github.com/ysandeepjoshi/DiceRoll) Github repository.
* The Images for the coins were taken from the [Tenor](
https://tenor.com/view/taste-coin-coin-flip-local-taste-remko-raaimakers-gif-21094455) Website.
* The wireframe was created using [Balsamiq](https://balsamiq.com/).
* The Responsive image was got from the [Am-I-Responsive](https://ui.dev/amiresponsive) website.
* The remaining images were screenshots taken by myself and edited to size for the readme file.

