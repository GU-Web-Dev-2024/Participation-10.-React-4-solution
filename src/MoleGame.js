import React from "react";

function MoleGame() {

    React.useEffect(() => {
        // Initialize game variables
        let score = 0;              // Player's score
        let currentHole;            // The hole where the mole is currently displayed
        let gameTimer;              // Timer for mole movement
        let moleVisible = false;    // Tracks if the mole is currently visible
        const endGameTime = 5;      // Total game duration (change this value to adjust game length)
        let timeLeft = endGameTime; // Remaining time for the game (in seconds)      
        const molePopInterval = 1000; // Interval for how often to show the mole (in ms)

        // Get references to DOM elements
        const startButton = document.getElementById("startButton");
        const scoreBoard = document.getElementById("scoreBoard");
        const timerDisplay = document.getElementById("timer");
        const holes = document.querySelectorAll(".hole"); // NodeList of all holes

        // Add event listener to the start button to initiate the game
        startButton.addEventListener("click", startGame);

        /*
        The `startGame()` function in the provided code is responsible for initializing the game,
        resetting game variables, updating the score and timer displays, starting the mole movement
        interval, starting the countdown timer, and setting a timeout to end the game after a
        specified duration.
        */
        function startGame() {
            // Reset game variables
            score = 0;
            timeLeft = endGameTime; // Reset the timer to the total game duration
            moleVisible = false;
            currentHole = null; // Default falsy value for objects: "No object value"

            // Update the score and timer displays
            scoreBoard.textContent = "Score: 0";
            timerDisplay.textContent = `Time Left: ${timeLeft}s`; // Template string to inject values into a string

            // Start the mole movement interval (mole appears every second == 1000)
            gameTimer = setInterval(randomHole, molePopInterval); //named function as the callback function

            // Start the countdown timer that updates every second
            // Note: arrow function could also be used as a callback in the same manner: () => {}
            const countdownTimer = setInterval(function () { //anonymous function as the callback function
                timeLeft--; // Decrease counter time left by 1 second
                timerDisplay.textContent = `Time Left: ${timeLeft}s`;
                if (timeLeft <= 0) {
                    clearInterval(countdownTimer); // Stop the countdown timer
                    // No need to call endGame() here because setTimeout will handle it
                    // Could put it in either place but not both
                }
            }, 1000); // 1 second interval to run the above callback function

            // Set a timeout to end the game after "endGameTime" seconds
            // * 1000 to convert the endGameTime to milliseconds, 
            // it's not in ms for use with display text in seconds
            setTimeout(endGame, endGameTime * 1000); //named function as the callback function
        }

        /* 
        The `randomHole()` function in the provided code is responsible for randomly selecting a
        hole in the game grid and displaying the mole in that hole.
        */
        function randomHole() {
            // Hide the mole in the current hole if it exists
            if (currentHole) {
                currentHole.querySelector(".mole").style.display = "none"; // Hide previous mole
            }

            // Generate a random index to select a random hole
            const randomIndex = Math.floor(Math.random() * holes.length);
            currentHole = holes[randomIndex]; // Update the current hole

            const mole = currentHole.querySelector(".mole");
            mole.style.display = "block"; // Show the mole in the new hole
            moleVisible = true; // Update the mole visibility status

            // Remove previous click listener to prevent stacking
            mole.removeEventListener("click", whack);
            // Add a click listener to the mole
            mole.addEventListener("click", whack);

            // Not required but fun
            // let mySound = new Audio("./sounds/squeak02.mp3");
            // mySound.play();

        }

        /*
        The `whack()` function is responsible for handling the event when a player successfully
        "whacks" or clicks on the mole that appears in a hole.
        */
        function whack() {
            if (moleVisible) {
                score++; // Increment the score
                scoreBoard.textContent = `Score: ${score}`; // Update the score display
                this.style.display = "none"; // Hide the mole after it's whacked
                moleVisible = false; // Update the mole visibility status
                // let mySound = new Audio("./sounds/whack02.mp3");
                // mySound.play();
            }
        }

        /*
        The `endGame()` function in the provided code is responsible for ending the game.
        */
        function endGame() {
            // Stop the mole movement interval
            clearInterval(gameTimer);
            // Display the final score to the player
            //alert(`Game Over! Final Score: ${score}`);
            // because alerts are annoying
            scoreBoard.textContent = `Game Over! Final Score: ${score}`;

            // Hide the mole if it's still visible
            if (currentHole) {
                currentHole.querySelector(".mole").style.display = "none";
                moleVisible = false;
            }
        }
    });
}

export default MoleGame;