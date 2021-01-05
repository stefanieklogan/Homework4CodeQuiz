//Establish variables for use in different functions
var startBtn = document.getElementById('start-btn');
var timerEl = document.getElementById('timer');
var quesContainEl = document.getElementById('question-container');
var instrEl = document.getElementById('instructions');
var questionEl = document.getElementById('question');
var ans1El = document.getElementById('ans1');
var ans2El = document.getElementById('ans2');
var ans3El = document.getElementById('ans3');
var ans4El = document.getElementById('ans4');
var ansBtnEl = document.getElementById('answer-buttons');
var gameOvrEl = document.getElementById('gameover');

var questionCounter = 0;

//My questions, answer options and which answer is true
var questions = [
    {
        question: "What does the 'L' in HTML stand for?",
        answers: [
            { answer: "language", correct: true },
            { answer: "laurel", correct: false },
            { answer: "literature", correct: false },
            { answer: "legal", correct: false }
        ]
    },
    {
        question: "Which is NOT a git console command?",
        answers: [
            { answer: "git pull", correct: false },
            { answer: "git commit -m", correct: false },
            { answer: "git add -A", correct: false },
            { answer: "git me", correct: true }
        ]
    } 
]
console.log(questions[questionCounter].question);
console.log(questions[questionCounter].answers[0].correct);

//When start button is clicked, run startGame function
startBtn.addEventListener('click', startGame);

//Begins game: hide start button, reset index to 0 & use random # to shuffle questions
function startGame() {
    startBtn.classList.add('hide');
    instrEl.classList.add('hide');
    quesContainEl.classList.remove('hide');
    countdown();
    nextQuestion();
}

//Timer function starts at :25 and game ends at :0.
function countdown(timer) {
    var secondsLeft =2;
    timerEl.textContent = ":" + secondsLeft + " seconds";

var timeInterval = setInterval(function (timer) {
    secondsLeft--;
    if (secondsLeft>1) {
        timerEl.textContent = ":" + secondsLeft + " seconds";
    }

    if (secondsLeft===1) {
        timerEl.textContent = ":" + secondsLeft + " second";
    }

    if (secondsLeft===0) {
        clearInterval(timeInterval);
        timerEl.textContent = "";
        endGame();
    }
}, 1000);
}

//Presents user with next question
function nextQuestion() {
    question.textContent = questions[questionCounter].question;
    ans1El.textContent = questions[questionCounter].answers[0].answer;
    ans2El.textContent = questions[questionCounter].answers[1].answer;
    ans3El.textContent = questions[questionCounter].answers[2].answer;
    ans4El.textContent = questions[questionCounter].answers[3].answer;
}

//Determines answer
function selectAnswer() {

}


function endGame (displayImg) {
    quesContainEl.classList.add('hide');
    gameOvrEl.classList.remove('hide');
}