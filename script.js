//Establish variables for use in different functions
var startBtn = document.getElementById('start-btn');
var scoreEl = document.getElementById('score');
var displayedQEl = document.getElementById('displayedQ');
var timerEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');
var quesContainEl = document.getElementById('question-container');
var instrEl = document.getElementById('instructions');
var questionEl = document.getElementById('question');
var gradeEl = document.getElementById('correctincorrect');
var ans1El = document.getElementById('ans1');
var ans2El = document.getElementById('ans2');
var ans3El = document.getElementById('ans3');
var ans4El = document.getElementById('ans4');
var ansBtnEl = document.getElementById('answer-buttons');
var finScore = document.getElementById('finalScore');
var gameOvrEl = document.getElementById('game-over');
var finscoreEl = document.getElementById('finalScore');
var scoreContainEl = document.getElementById('scoreContain');
var nameInputEl = document.getElementById('name');
var SubmitbtnEl = document.getElementById('submit-btn');

var questionCounter = 0;
var score = 0;
var secondsLeft =20;


//My questions, answer options and which answer is correct value
var questions = [
    {
        question: "What does the 'L' in HTML stand for?",
        answers: ["language", "laurel", "lit", "leg",],
        correct: "language",
    },
    {
        question: "Which is NOT a git console command?",
        answers: ["git commit -m", "git pull", "git push", "git me",],
        correct: "git me",
    },
    {
        question: "What type of coffee does a computer run on?",
        answers: ["Boolean", "Dunkin", "Java", "Starbucks",],
        correct: "Java",
    },
    {
        question: "Which operator is used for an exact match?",
        answers: ["=", "==", "===", "none of the above",],
        correct: "===",
    }
]

//When start button is clicked, run startGame function
startBtn.addEventListener('click', startGame);

//Begins game: hide start button, reset index to 0 & use random # to shuffle questions
function startGame() {
    startBtn.classList.add('hide');
    instrEl.classList.add('hide');
    quesContainEl.classList.remove('hide');
    scoreEl.textContent = "Score: " + score;
    countdown();
    displayQuestion();
}

//Timer function starts at secondsLeft value and game ends at :0.
function countdown(timer) {
    timerEl.textContent = ":" + secondsLeft + " seconds";

//Text content for page if multiple seconds are left
var timeInterval = setInterval(function (timer) {
    secondsLeft--;
    if (secondsLeft>1) {
        timerEl.textContent = ":" + secondsLeft + " seconds";
    }
//Text content for page if one second is left
    if (secondsLeft===1) {
        timerEl.textContent = ":" + secondsLeft + " second";
    }
//Clear text content when game is over
    if (secondsLeft<=0 || questionCounter === questions.length) {
        clearInterval(timeInterval);
        timerEl.textContent = "";
        endGame();
    }
        
}, 1000);
}

//Presents user with next question
function displayQuestion() {
    question.textContent = questions[questionCounter].question;
    console.log(question.textContent);
    ans1El.textContent = questions[questionCounter].answers[0];
    ans2El.textContent = questions[questionCounter].answers[1];
    ans3El.textContent = questions[questionCounter].answers[2];
    ans4El.textContent = questions[questionCounter].answers[3];
}

//New variable for all answer buttons
var userChoiceBtns = document.querySelectorAll(".ansbtn");
//Adding event listener to detect user's answer/click
   userChoiceBtns.forEach(button => {
       button.addEventListener('click', function() {
//Create a variable of user choice from answer array
   var userChoice = this.textContent;
//Create a variable of correct answer from answer array
   var correctAns = questions[questionCounter].correct;
//Call function to check userChoice against correctAnswer
   checkAnswer(userChoice, correctAns);
       })
   })

//Determines user's correctness
function checkAnswer(userChoice, correctAns) {
//If user is correct...
    if (userChoice === correctAns) {
//Add 25 to score & list value on page
        score+=25;
        gradeEl.textContent = "Correct!";
        scoreEl.textContent = "Score: " + score;
        console.log("Score " + score);
        console.log("timer: " + secondsLeft);
//Increase var value for the displayQuestion function called next;
        questionCounter++;
        displayQuestion();
    }

    else {
//Subtract 5 seconds for wrong answers
        secondsLeft-=5;
        scoreEl.textContent = "Score: " + score;
        gradeEl.textContent = "Incorrect";
        console.log("Score " + score);
        console.log("timer: " + secondsLeft);
//Increase var value for the displayQuestion function called next;
        questionCounter++;
        displayQuestion();
    }
}

//Create arr for userName & score storage - parse for info
var scoreboardArr = JSON.parse(localStorage.getItem("nameArray")) || [];

//Checking for values in local storage
function init() {
    var storedNames = JSON.parse(localStorage.getItem("nameArray"));
//If localStorage is not null, values are found within ScoreboardArr
    if (storedNames !== null) {
        scoreboardArr = storedNames;
    }
}

//Add values to local storage
function storeNames () {
    localStorage.setItem("nameArray", JSON.stringify(scoreboardArr));
}

//User to enter name & click submit to add their data to local storage
SubmitbtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    var nameText = {
        name: nameInputEl.value.trim(),
        score: score
        };
        scoreboardArr.push(nameText);
        nameInputEl.value = "";
    storeNames();
    }
);

//Final function, un hide a new container and list end score
function endGame () {
    timerEl.textContent = "Time: " + secondsLeft;
    gradeEl.classList.add('hide');
    quesContainEl.classList.add('hide');
    gameOvrEl.classList.remove('hide');
    scoreContainEl.classList.remove('hide');
    finscoreEl.textContent = "Score: " + score;
}

init();