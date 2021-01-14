//timer variables
var timerEl = document.querySelector(".time");
var timeRemaining = 61;
var secondsLeft;

//score variables
var highScores = [];
var userScore;

//opening section variables
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");
var endGameEl = document.querySelector("#endGame");

//quiz variables 
var quizQuestion = document.querySelector("#question");
var ansList = document.querySelector("#choices");
var startQuiz = document.querySelector("#start-button");
// var quizCntr = document.querySelector("mainQuiz");
// var brkEl = document.createElement('br');
// var msgEl = document.createElement('p');
var questionsAnswers = [
    {
        question: "Which of the following is NOT a Javascript data-type?",
        answers:  ["object", "variable", "number", "boolean"],
        ansIdx: 1,
    },
    {
        question:"What is a function?",
        answers: ["A method", "An object property", "A block of code that does something", "A continuous loop"],
        ansIdx: 2,
    }, 
    {
        question:"The __ method is used to add an item to the end of an array: ",
        answers: ["push", "concat", "slice", "splice"],
        ansIdx: 0,
    }, 
    {
        question:"Objects in Javascript can be used to store: ",
        answers: ["arrays", "numbers", "functions", "all of the above"],
        ansIdx: 3,
    }
];
    

//start quiz
startQuiz.addEventListener("click", function(event){
    event.preventDefault();
   
    introEl.classList.add("hide");
    quizEl.classList.remove("hide");
    
    showQuestion(questionsAnswers.shift());
    
    secondsLeft = setInterval(timer,1000);  
});


//paint quiz to page, advance through questions.
function showQuestion(q){
     
    quizQuestion.innerHTML = q.question;
    ansList.innerHTML = '';

    for(var i = 0; i < q.answers.length; i ++){
        var listEl = document.createElement("p");
        var btn = document.createElement("button");

         btn.innerHTML = q.answers[i];
         btn.setAttribute("data-id", i)

         ansList.appendChild(listEl);
         listEl.appendChild(btn);

        btn.onclick = function (event) {
            event.preventDefault();

        var id = parseInt(this.getAttribute("data-id"));
            
         if (id !== q.ansIdx){
            
             subtractTime();
         } else if (questionsAnswers.length){
             
            addTime();
            showQuestion(questionsAnswers.shift());
         } else { 
            timerEl.textContent = "Time: " + timeRemaining;
            stopTimer();
            displayScore();
         }

        };  
    };    
};

// function wrongAns(){
//     msgEl.text = "NOPE! -10!";

//     brkEl.appendChild(msgEl);
//     quizCntr.appendChild(brkEl);
// }

// function rightAns() {
//     msgEl.text = "Correct!  Keep it up!";
//     brkEl.appendChild(msgEl);
//     quizCntr.appendChild(brkEl);
// }
function addTime(){
    timeRemaining += 10;
};

function subtractTime(){
    if (timeRemaining > 10){
        timeRemaining -= 10;
    } else if (timeRemaining <= 10){
        timeRemaining = 1;
    }  
};

//Timer-related variables and functions
function timer() {
    timeRemaining--;
    timerEl.textContent = "Time: " + timeRemaining;
    
    if(timeRemaining === 0) {
    stopTimer();
    displayScore();
    }  
};

function stopTimer(){
    clearInterval(secondsLeft);
};

//Display final score and store results
function displayScore(){
    
    quizEl.classList.add("hide");
    endGameEl.classList.remove("hide");
   
    quizQuestion.innerHTML = "";
    ansList.innerHTML = "";
    
    var allDone = document.querySelector("#save-score");
    var enterScore = document.querySelector("#input");
    
    var scoreEl = document.createElement("p");
    var inputLabel = document.createElement("label");
    var inputEl = document.createElement("input");
    var submitSpan = document.createElement("span");
    var submitBtn = document.createElement("button");

    allDone.innerHTML = "All done!"
    scoreEl.innerHTML = "Your final score is: " + timeRemaining;
    inputLabel.innerHTML = "Enter Initials: ";
    inputLabel.setAttribute("for", "initials");
    inputEl.setAttribute("type", "text");
    submitBtn.innerHTML = "Submit";
    submitBtn.setAttribute("class", "submit-btn");
    
    enterScore.appendChild(scoreEl);
    enterScore.append(inputLabel);
    enterScore.append(inputEl);
    enterScore.appendChild(submitSpan);
    submitSpan.appendChild(submitBtn);
    
    submitBtn.onclick = function (event) {
        event.preventDefault();
        
        var userScore = {
            score : timeRemaining,
            initials : inputEl.value.trim(), 
        };

        highScores.push(userScore); 
        storeScores();
        
      function storeScores(){
        var storedScores = JSON.parse(localStorage.getItem("user score")) || [];  
            
            storedScores.push(userScore);
            localStorage.setItem("user score", JSON.stringify(storedScores));
            
            changePage();   
      };
    }; 
};

function changePage(){
    location.href = "highScores.html";
};

