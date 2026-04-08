// add javascript here
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = 0;
// Player name
let playerName = prompt("Enter your name:");

// Play
// get level
document.getElementById("playBtn").addEventListener("click", function() {
    let radios = document.getElementsByName("level");
    let range = 3;
    for (let i = 0; i < radios.length; i++){
        if(radios[i].checked) {
            range = parseInt(radios[i].value);
        }
    }
    //pick answer
    answer = Math.floor(Math.random() * range) + 1;
    //disable and enable button choices
    document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
    document.getElementById("guess").value="";
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    document.getElementById("playBtn").disabled = true;

    let levelRadios = document.getElementsByName("level");
    for (let i=0; i < radios.length; i++){
       levelRadios[i].disabled = true
    }

});

document.getElementById("guessBtn").addEventListener("click", function() {
    let userGuess = document.getElementById("guess").value
    if (userGuess > answer) {
        if (Math.abs(userGuess - answer) <= 2) {
            document.getElementById("msg").textContent = "Guess is hot but too high!";
        }
         else if (Math.abs(userGuess - answer) <= 5) {
            document.getElementById("msg").textContent = "Guess is warm but too high!";
        }
        else {
            document.getElementById("msg").textContent = "Guess is cold and too high";
        }
    }
    else if (userGuess < answer) {
         if (Math.abs(userGuess - answer) <= 2) {
            document.getElementById("msg").textContent = "Guess is hot but too low!";
        }
         else if (Math.abs(userGuess - answer) <= 5) {
            document.getElementById("msg").textContent = "Guess is warm but too low!";
        }
        else {
            document.getElementById("msg").textContent = "Guess is cold and too low";
        }
    }
    else if (userGuess == answer) {
        document.getElementById("msg").textContent = "Guess is correct!";
        document.getElementById("guessBtn").disabled = true;
        guessCount++
        document.getElementById
    }
    else {
        document.getElementById("msg").textContent = "Invalid"
    }
});