    // Function to generate a random number between 1 and 6
    function generateRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Generate random numbers for both dice
    var randomNumber1 = generateRandomNumber();
    var randomNumber2 = generateRandomNumber();

    // Log the results to the console
    console.log("Generated random numbers:", randomNumber1, randomNumber2);

    // Select the <img> elements
    var diceImage1 = document.getElementById("dice1");
    var diceImage2 = document.getElementById("dice2");

    // Set the src attributes to the corresponding dice images
    diceImage1.src = "images/dice" + randomNumber1 + ".png";
    diceImage2.src = "images/dice" + randomNumber2 + ".png";

    // Select the <h1> element
    var resultText = document.getElementById("result");

    // Determine the winner and update the <h1> text
    if (randomNumber1 > randomNumber2) {
        resultText.textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        resultText.textContent = "Player 2 Wins!";
    } else {
        resultText.textContent = "It's a Draw!";
    }