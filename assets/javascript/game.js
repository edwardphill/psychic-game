var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function gameEnded() {
  document.getElementById("newGameButton").style.display = "inline";
  document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

function easyMode() {
  maxGuesses = 10;
}

function hardMode() {
  maxGuesses = 5;
}

function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  //  console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
}

function newGame() {
  window.location.reload();
}

function compareGuess() {
  var userGuess = " " + document.getElementById("inputBox").value;
  // console.log(userGuess);

  userGuessLog.push(userGuess);
  // console.log(userGuessLog);

  document.getElementById("guessLog").innerHTML = userGuessLog;

  attempts++;

  document.getElementById("attempts").innerHTML = attempts;

  if (userGuessLog.length < maxGuesses) {
    if (userGuess > computerGuess) {
      document.getElementById("textOutput").innerHTML = "Too high";
    } else if (userGuess < computerGuess) {
      document.getElementById("textOutput").innerHTML = "Too low";
    } else {
      document.getElementById("textOutput").innerHTML =
        "Correct! You got it in " + attempts + " attempts";
      gameEnded();
    }
  } else {
    if (userGuess > computerGuess) {
      document.getElementById("textOutput").innerHTML =
        "You lose!" + "<br> the number was " + computerGuess;
      gameEnded();
    } else if (userGuess < computerGuess) {
      document.getElementById("textOutput").innerHTML = "You lose!";

      gameEnded();
    } else {
      document.getElementById("textOutput").innerHTML =
        "Correct! You got it in " + attempts + " attempts";

      gameEnded();
    }
  }
}
