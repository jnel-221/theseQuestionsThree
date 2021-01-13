var storedScores = JSON.parse(localStorage.getItem("user score"));
var highScoreEl = document.querySelector("#retrieved-scores");
var listEl = document.createElement("li");
var btnEl = document.querySelector("#btns");
var backBtn = document.createElement("button");
var clearBtn = document.createElement("button");

backBtn.innerHTML = "Retry";
clearBtn.innerHTML = "Clear Highscores"
    
btnEl.appendChild(backBtn);
btnEl.appendChild(clearBtn); 

backBtn.addEventListener("click", function(event){
    event.preventDefault();
    location.href = "index.html";
});

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    highScoreEl.innerHTML = "";
    localStorage.clear();
})


console.log(storedScores);
init();
function init (){
    if (storedScores !== null) {
        highScores = storedScores; 
    };
    renderScores();
};
    
function renderScores(){
    
 
    for (var i = 0; i < storedScores.length; i++){
    var retrievedScore = storedScores[i];
    
    
    listEl.textContent = retrievedScore;
    listEl.setAttribute("data-index", i);
    
    highScoreEl.appendChild(listEl);

    };
    
};

   



