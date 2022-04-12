let buttons = document.getElementsByTagName("button");

function runGame(gameType){
    if (gameType === "whoami"){
        alert("You have clicked who am i")
        displayWhoAmIQuestion();
    } else if (gameType === "flag"){
        displayFlagsQuestion();
    }
      else if (gameType === "interestingFact"){
          displayInterestingFactQuestion
      } else{
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. End process`;
        }
};

function checkAnswers(){
    /* check answer against stored correct answer */
};

function countdownClock(){
/* Time remaining point ststem: 45 >= 100, 30 >= 75, 15 >= 50, 15 < 50 */
};

function calculateScore(){
/* Calculate score will involve checking if answer === correct && time remaining to calc score*/
};

function displayWhoAmIQuestion(){

};

function displayFlagsQuestion(){

};

function displayInterestingFactQuestion(){

};

