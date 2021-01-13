var scoreboardListEl = document.getElementById('scoreboard-list');
var clearBtnEl = document.getElementById('clearBtn');

var nameArray = JSON.parse(localStorage.getItem("nameArray")) || [];
//Sort the array of name & scores
var sortedArray = nameArray.sort(function(a, b){return b.score - a.score});


function renderScoreboard () {
//Loop thru sorted array to create li for html
    for (var i = 0; i < sortedArray.length; i++) {
    var scoreInfo = sortedArray[i]; 

//Create new li for each index
    var li = document.createElement("li");
//Display li to page
    li.textContent = scoreInfo.score + ": " + scoreInfo.name;
    li.setAttribute("data-index", i);

//Append li to html ID for scoreboardListEl
    scoreboardListEl.appendChild(li);
}}

function init() {
//JSON.parse to covert text from nameArr
    var storedScores = JSON.parse(localStorage.getItem("nameArray"));
//if scores were retrieved from localStorage, update the arr
    if (storedScores !== null) {
        nameArray = storedScores;

        renderScoreboard();
    }

//If user clicks clear btn, clear page & local storage & arr    
    clearBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
        scoreboardListEl.innerHTML = "";
        localStorage.clear();
        nameArray = [];
    })
    }
    
//Store scores from local storage
    function storeScores () {
        localStorage.setItem("nameArray", JSON.stringify(nameArray));
    }
    
    init()