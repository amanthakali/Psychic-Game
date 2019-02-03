    var win = 0;
    var loss = 0;
    var guessLeft = 9;
    var guessedLetter = [];

    // computer guess letter
     
    var randomNumber = Math.floor(Math.random() * 26);
    var randomChar = String.fromCharCode(97 + randomNumber);
    console.log('DEBUG random Word --- ' +randomChar);
 
      // geting the user guess char 
    document.onkeypress = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

        
        //main logic of the game
        if (userGuess === randomChar) {
          win++;
          guessLeft = 9;
          guessedLetter = [];
        
        //creating the new random number once the guess is correct
        var randomNumber = Math.floor(Math.random() * 26);
        randomChar = String.fromCharCode(97 + randomNumber);
        console.log('DEBUG random Word --- ' +randomChar);
        }
        
        if (userGuess != randomChar) {
          guessLeft--;
          guessedLetter.push(userGuess);
        }
        if (guessLeft === 0) {
          guessLeft = 9;
          loss++;
          guessedLetter = [];
        }
        document.getElementById("wins").innerHTML = "Wins: " + win;
        document.getElementById("losses").innerHTML = "Losses: " + loss;
        document.getElementById("guessLeft").innerHTML =
          "Guess Left: " + guessLeft;
        document.getElementById("userGuess").innerHTML =
          "Your Guesses so far: " + guessedLetter.join(", ");
      };