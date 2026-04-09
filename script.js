// add javascript here
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = [];
let range = 3;
// Player name
let playerName = prompt("Enter your name:");
let truePlayerName = playerName.substring(0,1).toUpperCase() + playerName.substring(1).toLowerCase();
// Play
// get level
document.getElementById("playBtn").addEventListener("click", function() {
    let radios = document.getElementsByName("level");
    guessCount = 0;
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
    guessCount++
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
        document.getElementById("msg").textContent = truePlayerName + ", Guess is correct!";
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("playBtn").disabled = false;
        document.getElementById("giveUpBtn").disabled = true;
        updateScore(guessCount);
    }
    else {
        document.getElementById("msg").textContent = "Invalid"
    }
});

document.getElementById("giveUpBtn").addEventListener("click", function() {
   document.getElementById("guessBtn").disabled = true;
   document.getElementById("playBtn").disabled = false;
   document.getElementById("giveUpBtn").disabled = true;
   guessCount = range;
   updateScore(guessCount);
});

function updateScore(score) {
    totalWins++;
    totalGuesses += score;
    document.getElementById("wins").textContent = "Total wins: " + totalWins;
    document.getElementById("avgScore").textContent = "Average Score: " + (totalGuesses / totalWins).toFixed(1);

    scores.push(score);
    scores.sort(function(a, b) {return a - b;});

    let leaderboard = document.getElementsByName("leaderboard");
    for (let i = 0; i < leaderboard.length; i++) {
        if (i < scores.length) {
            leaderboard[i].textContent = scores[i];
        } else {
            leaderboard[i].textContent = "--";
        }
    }
        
} 