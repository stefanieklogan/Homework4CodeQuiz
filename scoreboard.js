var scoreboardListEl = document.getElementById('scoreboard-list');
var clearBtnEl = document.getElementById('clearBtn');

var nameArray = JSON.parse(localStorage.getItem("nameArray")) || [];
sortedArray = nameArray.sort(function(a, b){return b.score - a.score});
console.log(nameArray);

function renderScoreboard () {
    for (var i = 0; i < sortedArray.length; i++) {
    var scoreInfo = sortedArray[i]; 

    var li = document.createElement("li");
    // console.log(scoreInfo);
    li.textContent = scoreInfo.score + ": " + scoreInfo.name;
    li.setAttribute("data-index", i);

    scoreboardListEl.appendChild(li);
    // console.log(nameArray);
}}

function init() {
    //JSON.parse to covert text from nameArr
    var storedScores = JSON.parse(localStorage.getItem("nameArray"));
    //if scores were retrieved from localStorage, update the arr
    if (storedScores !== null) {
        nameArray = storedScores;

        renderScoreboard();
    }

    
    clearBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
        scoreboardListEl.innerHTML = "";
        localStorage.clear();
        nameArray = [];
    })
    }

    function storeScores () {
        localStorage.setItem("nameArray", JSON.stringify(nameArray));
    }
    
    // function sortScores(arr) {
    //     arr.sort((a, b) => {
    //         return b-a;
    //     })
    // };
    
    init()