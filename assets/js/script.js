let buttons = document.getElementsByTagName("button");
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choices'));


// Countdown Timer
let counter = 60;
// set interval to reduce time by 1 each second.
setInterval( function(){
    counter--;
// change color and add shake affect when time is running out
    if( counter >=30){
        clock = document.getElementById("clock");
        clock.innerHTML = counter;
        clock.style.color = 'limegreen'
    } else if (counter >=15 && counter < 30){
        clock.innerHTML = counter;
        clock.style.color = 'orange';
    } else if (counter >=1 && counter < 15){
        clock.innerHTML = counter;
        clock.style.color = 'red'
        clock.classList.add('vertical-shake')
    } else if (counter === 0){
        clock.innerHTML = "Times Up";
        clock.style.color = 'white'
        clock.classList.remove('vertical-shake')
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
