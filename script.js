// add javascript here
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = 0;
let range = 3;
// Player name
let playerName = prompt("Enter your name:");
let truePlayerName = playerName.substring(0,1).toUpperCase() + playerName.substring(1).toLowerCase();
// Play
// get level
document.getElementById("playBtn").addEventListener("click", function() {
    let radios = document.getElementsByName("level");
    range = 3;
    for (let i = 0; i < radios.length; i++){
        if(radios[i].checked) {
            range = parseInt(radios[i].value);
        }
    }
    //pick answer
    answer = Math.floor(Math.random() * range) + 1;
    //disable and enable button choices
    document.getElementById("msg").textContent = truePlayerName + ", guess a number between 1 and " + range;
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
    totalGuesses++
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
        totalWins++
        document.getElementById("wins").textContent = "Total wins: " + totalWins;
        document.getElementById("avgScore").textContent = "Average Score: " + (totalGuesses/totalWins).toFixed(1);
        document.getElementById("playBtn").disabled = false;
        document.getElementById("giveUpBtn").disabled = true;
    }
    else {
        document.getElementById("msg").textContent = "Invalid"
    }
});

document.getElementById("giveUpBtn").addEventListener("click", function() {
   document.getElementById("guessBtn").disabled = true;
   document.getElementById("playBtn").disabled = false;
   document.getElementById("giveUpBtn").disabled = true;
   totalWins++
   guessCount = range
   totalGuesses = totalGuesses + guessCount
   document.getElementById("wins").textContent = "Total wins: " + totalWins;
   document.getElementById("avgScore").textContent = "Average Score: " + (totalGuesses/totalWins).toFixed(1);
});
