var scoreListEl = document.getElementById('scoreList');
var clearBtn = document.getElementById('clearBtn');
var scoresListEl = document.getElementById('scores-list');

var scoreboard = [];

function renderScoreboard () {
//Use JSON.parse to cover text to JS object

var lastScores = JSON.parse(localStorage.getItem("nameText"));

for (var i = 0; i < scoreboardArr.length; i++) {
    var scoreEntry = scoreboardArr.length;
}

//Render new li for each score
for (var i = 0; i < scoreboard.length; i++) {
    var scores = scoreboard[i];

    var li = document.createElement("li");
    li.textContent = scores;
    li.setAttribute("data-index", i);

    renderScoreboard.appendChild(li);
}
}

// function init() {
// //Get scores from localStorage
// var storedScores = JSON.parse(localStorage.getItem("userInfo"));

// //If userInfo was pulled from localStorage, update scoreboard arr
// if (storedScores !== null) {
//     scoreboard = storedScores;
// }

// //Render to DOM
// renderScoreboard();
// }

// function storeScores () {
// //Stringify and set key in localStorage to scoreboard arr
//     localStorage.setItem("userInfo", JSON.stringify(userInfo));
// }

//Add clear scores event to form
// clearBtn.addEventListener('click'), function(event) {
//    var element = event.target;

//    if (element.matches("button") === true) {
//     todoListEl.innerHTML = "";
//    }
// }
