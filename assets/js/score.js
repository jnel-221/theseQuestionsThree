var storedScores = JSON.parse(localStorage.getItem("user score"));


function renderScores(){
    
 
    for (var i = 0; i < storedScores.length; i++){
    var retrievedScore = storedScores[i];
    var highScoreEl = document.querySelector("#retrieved-scores");
    var listEl = document.createElement("li");
    
    listEl.textContent = retrievedScore;
    listEl.setAttribute("data-index", i);
    
    highScoreEl.appendChild(listEl);

    }
    var backBtn = document.createElement("button");
    var clearBtn = document.createElement("button");


}


//grab data from local storage onload of highScores.html
function init (){


if (storedScores !== null) {
    highScores = storedScores; 
};
renderScores();
};

init();