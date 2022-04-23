window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const image = document.getElementById("quiz-image");
let clock = document.getElementById('clock');
const endModal = document.getElementById("endModal");
const homeBtn = document.getElementById('home-Btn');
const quiz = document.getElementById("fullQuizMenu");
const home = document.getElementById("homePageMenu")

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let counter;
let timeLeft = parseInt(clock.innerText);



let questions = [
    {
        question: "What country is the home of Petra?",
        choice1: "Saudi Arabia",
        choice2: "Jordon",
        choice3: "Oman",
        choice4: "Egypt",
        answer: 2,
        image: "<img src='assets/images/petra.jpg'>"
    },
    {
        question: "What country originally produced gunpowder?",
        choice1: "USA",
        choice2: "UK",
        choice3: "Serbia",
        choice4: "China",
        answer: 4,
        image: "<img src='assets/images/firework.jpg'>"
    },
    {
        question: "In which country would you find the temple of dawn?",
        choice1: "Myanmar",
        choice2: "Indonesia",
        choice3: "Thailand",
        choice4: "Laos",
        answer: 3,
        image: "<img src='assets/images/templeofdawn.jpg'>"
    }
]

/* Correct Answer with over 30 seconds left*/
const CORRECT_MAX = 100;
/* Correct Answer with over 15 seconds left*/
const CORRECT_BONUS_MED = 75;
/*Correct Answer with less than 15 seconds left */
const CORRECT_BONUS_MIN = 50;
/* Max amount of questions user will be asked */
const Max_Questions = 3;

const questionTracker = document.getElementById("question-tracker");


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    startTimer(30);
};

function getNewQuestion(){

    /* If the available questions has ran out or if the max question limit has been reached then redirect to endgame screen*/
    if(availableQuestions.length === 0 || questionCounter >= Max_Questions){
        // Adding alert for now so it shows score on completion and redirects back to index.html
        endGame();
        return window.location.assign("/index.html");
    }
    /*Increase question count*/
    questionCounter ++;
    /*Display current question and remaining questions to user*/
    questionTracker.innerText = questionCounter + " / " + Max_Questions;

    /* Get a random question from available questions*/
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    /*Update the inner text to the Question section*/
    question.innerText = currentQuestion.question;

    /* Get the choice options available within the question and display them*/
    choices.forEach( choice => {
        /* Set number as the dataset number on the choices in the HTML*/
        const number = choice.dataset['number'];
        /* Set the inner html for the current questions choice*/
        choice.innerText = currentQuestion['choice' + number];
    });

    image.innerHTML = currentQuestion.image;
    image.classList.add('quiz-image>img')
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice =>{
    /* For each choice, add event listener notated as 'e'.*/
    choice.addEventListener("click", e =>{
        if (!acceptingAnswers) return;
    
    acceptingAnswers = false;
    /* Setting the users choice as the event*/
    const selectedChoice = e.target;
    /* Getting the number associated with the data-number to return the choice of the user*/
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    
    /* Call the getNewQuestion Function while the max questions & available questions params are still within bounds*/
    if(selectedAnswer == currentQuestion.answer){
        //console.log clock
        let timeLeft = clock.innerText;
        console.log(timeLeft);
        updateScore(timeLeft);
        clearInterval(counter)
        getNewQuestion();
        startTimer(30)
    } else{
        clearInterval(counter)
        getNewQuestion();
        startTimer(30);
    };
  });
});

/* Will update score*/
function updateScore(timeLeft){
    if(timeLeft >= 15){
        score += CORRECT_MAX;
    } else if(timeLeft >=5 && timeLeft <15){
        score += CORRECT_BONUS_MED;
    } else if(timeLeft >0 && timeLeft <5){
        score += CORRECT_BONUS_MIN;
    } else{
        score += 0
    }
    // score += CORRECT_BONUS;
};


//Countdown Timer Mk 2

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        clock.textContent = time; //changing the value of clock with time content
        time--; //decrement the time value
        
        if(time <= 30 && time >= 15){ 
            clock.style.color = 'limegreen';
        } else if(time >= 5 && time <= 15){
            clock.style.color = 'orange';
        } else if (time >=1 && time < 5){
            clock.style.color = 'red';
            clock.classList.add('vertical-shake');
        } else if (time === -1){
            clock.innerHTML = "Times Up";
            clock.style.color = 'white';
            clock.classList.remove('vertical-shake');
            clearInterval(counter);
            getNewQuestion();
            startTimer(30);
        }
    }
}

startGame();

function hideQuiz(){
    quiz.style.display = "none";
    home.style.display = "block";
    location.reload();
}

function showQuiz(){
    quiz.style.display = "block";
    home.style.display = "none";
}

function endGame(){
    // When final question has been answered, push score and rank to modal!
    
    if(score >=250){
        alert(`The game has finished. You scored ${score} points. You have achieved the rank of: Chistopher Columbus.`)
    } else if( score >= 150 && score < 250){
        alert(`The game has finished. You scored ${score} points. You have achieved the rank of: Francis Drake.`)
    } else {
        alert(`It might be a good idea to brush up on your Geography. You only scored ${score} points. Unfortunately your no Christopher Columbus. Your Chris Pratt :D`)
    }
};

