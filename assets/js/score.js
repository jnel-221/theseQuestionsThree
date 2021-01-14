
var highScoreList = document.querySelector("#retrieved-scores");
var listEl = document.createElement("li");
var btnEl = document.querySelector("#btns");
var backBtn = document.createElement("button");
var clearBtn = document.createElement("button");

var storedScores = JSON.parse(localStorage.getItem("user score")) || [];
var sortedScores = storedScores.sort((s1, s2) => (s1.score < s2.score)? 1 : (s1.score > s2.score)? -1 : 0);


highScoreList.innerHTML = sortedScores.map(score =>{
    return (`<li>${score.initials} - ${score.score}</li>`);
}).join('');


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
    highScoreList.innerHTML = "";
    localStorage.clear();
})


init();
function init (){
    if (storedScores !== null) {
        highScores = storedScores; 
    };
    
};
    
// function renderScores(sortedScores){
    
//     for (var i = 0; i < sortedScores.length; i ++){
    
//     // console.log(x + ": " + storedScores[x])
    

//     listEl.textContent = sortedScores.initials[i] + sortedScores.score[i];
    
    
//     highScoreEl.appendChild(listEl);

//     };
    
// };

   



