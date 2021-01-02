var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById;
('question-container');

var shuffleQuestion, currentQuestionIndex;

startButton.addEventListener('click', startGame);

//Begins game
function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffleQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

//Presents user with next question, random draw
function nextQuestion() {}

//Determines answer
function getAnswer() {}

const questions = [
    {
        question: "What does the 'l' in HTML stand for?",
        answers: [
            { answer: 'language', correct: true },
            { answer: 'laurel', correct: false },
            { answer: 'literature', correct: false },
            { answer: 'legal', correct: false },
        ]
    }
    {
        question: "Which is NOT a git console command?",
        answers: [
            { answer: 'git me', correct: true },
            { answer: 'git commit -m', correct: false },
            { answer: 'git add -A', correct: false },
            { answer: 'git pull', correct: false },
        ]
    }
]