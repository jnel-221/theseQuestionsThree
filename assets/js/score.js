
var highScoreList = document.querySelector("#retrieved-scores");
var listEl = document.createElement("li");
var btnEl = document.querySelector("#btns");
var backBtn = document.createElement("button");
var clearBtn = document.createElement("button");

var storedScores = JSON.parse(localStorage.getItem("user score")) || [];

//reviewed below method and formatting on  https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/ 
var sortedScores = storedScores.sort((s1, s2) => (s1.score < s2.score)? 1 : (s1.score > s2.score)? -1 : 0);

//this structure and formatting found on youTube tutorial, "Build a Quiz App(9)"" by James Q Quick. I found this video when googling ways to render objects from local storage.  We have not yet covered arrow functions or template literals in class, but we have covered array methods.  I like that the map method allows me to take each item of an array and do something to it.  In this case, I'm setting the inner HTML of high score list to my mapped array, and each item in my mapped array will be returned as a list item with a string containing user initials and score.
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

function init (){
    if (storedScores !== null) {
        highScores = storedScores; 
    };
    
};

init();
    


   



