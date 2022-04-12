let buttons = document.getElementsByTagName("button");

let counter = 60;

setInterval( function(){
    counter--;

    if( counter >=30){
        clock = document.getElementById("clock");
        clock.innerHTML = counter;
        clock.style.color = 'limegreen'
    } else if (counter >=15 && counter < 30){
        clock.innerHTML = counter;
        clock.style.color = 'yellow';
    } else if (counter >=1 && counter < 15){
        clock.innerHTML = counter;
        clock.style.color = 'red'
    } else if (counter === 0){
        clock.innerHTML = "Times Up";
        clock.style.color = 'white'
    }
}, 1000);




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

