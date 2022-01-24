// Random number selection
var secretNum = Math.floor(Math.random() * 10) + 1;

// Input Event Listener
var startButton = document.getElementById("myBtn");
startButton.onclick = myGuess;

//prompt guess function

function myGuess() {
    var answer = prompt("Try and guess a number between 1 and 10.");
    answer = Number(answer);
    checkAnswer(answer);
}
// Check answer function

function checkAnswer(guess) {
    //Display clue if guess is too high or too low
    if (guess === secretNum) {
        alert("Jackpot! Your guess '" + guess + "' is right.'");
        document.getElementById("output").innerHTML = "Congratulations! You won!"
    } else if (guess < secretNum) {
        alert("Too low! Try again!");
        guess();
    } else if (guess > secretNum) {
        alert("Too High! Try again!");
        guess();
    }else {
            alert("Invalid Input!");
        guess();        }
    }

