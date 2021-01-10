var scoreboardListEl = document.getElementById('scoreboard-list');
var clearBtnEl = document.getElementById('clearBtn');

var nameArray = [];

function renderScoreboard () {
    for (var i = 0; i < nameArray.length; i++) {
    var scoreInfo = nameArray[i];

    var li = document.createElement("li");
    li.textContent = scoreInfo.score + ": " + scoreInfo.name;
    li.setAttribute("data-index", i);

    scoreboardListEl.appendChild(li);
    console.log("1" + nameArray);
}}

function init() {
    //JSON.parse to covert text from nameArr
    var storedScores = JSON.parse(localStorage.getItem("nameArray"));
    //if scores were retrieved from localStorage, update the arr
    if (storedScores !== null) {
        nameArray = storedScores;

    }
    renderScoreboard();
    clearBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
        scoreboardListEl.innerHTML = "";
    })
    }

    function storeScores () {
        localStorage.setItem("nameArray", JSON.stringify(nameArray));
    }
    
    function sortScores() {
        nameArray.sort((a, b) => {
            return a.score - b.score;
        })
    };
    
    init()
    sortScores()
    