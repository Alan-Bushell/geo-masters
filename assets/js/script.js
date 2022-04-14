let buttons = document.getElementsByTagName("button");
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What country is the home of Petra?",
        choice1: "Saudi Arabia",
        choice2: "Jordon",
        choice3: "Oman",
        choice4: "Egypt",
        answer: 2
    },
    {
        question: "What country originally produced gunpowder?",
        choice1: "USA",
        choice2: "UK",
        choice3: "Serbia",
        choice4: "China",
        answer: 4
    },
    {
        question: "In which country would you find the temple of dawn?",
        choice1: "Myanmar",
        choice2: "Indonesia",
        choice3: "Thailand",
        choice4: "Laos",
        answer: 3
    }
]

const CORRECT_BONUS = 100;
const Max_Questions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion(){

    /*Increase score*/
    questionCounter ++;

    /* Get a random question from available questions*/
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionIndex];

    /*Update the inner text to the Question section*/
    question.innerText = currentQuestion.question;

    /* Get the choice options available within the question and display them*/
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

startGame();

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
