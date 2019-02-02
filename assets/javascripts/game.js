
        
 //  Need a var for random alphabet
    var win = 0;
    var loss = 0;
    var guessLeft =9;
    
    // computer guess letter
    var randomNumber = Math.floor(Math.random()*26);
    var randomChar = String.fromCharCode(97 + randomNumber);
    //console.log(randomChar);

    
    document.onkeypress = function(event) {
    var userGuess= event.key;
    
        if(userGuess=== randomChar){
            win++;
        }
        else{
            guessLeft--;
            loss++;
        }
        //  if (guessLeft === 0){
        //     reset();
         }
        


        document.getElementById('wins').innerHTML= "Wins: " + win;
        document.getElementById('losses').innerHTML="Losses: "+ loss;
        document.getElementById('guessLeft').innerHTML="Guess Left: "+ guessLeft;
        document.getElementById('userGuess').innerHTML="Your Guesses so far "+ userGuess;
    
    
    //  var for win (initialize to 0)
    //  var for loss (initialize to 0)
    // var numberOFGuess; (initialize to 9)
    //  var for userguess
    //  create if else statement
    // if (userguess==random albhabet){
        // win++;
    // }

    // else{
        // loss++;
        // numberOfGuess--;
    // }
    // if(numberOfGuess == 0){
        // reset ()
    // }
    // Create reset function
    // reset function(){
        
    // }


