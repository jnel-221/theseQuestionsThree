//timer variables
var timerEl = document.querySelector(".time");
var timeRemaining = 76;
var secondsLeft;
//score variables
var highScores = [];
//opening section variables
var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");
var endGameEl = document.querySelector("#endGame");
//quiz variables 
var questionsAnswers = [
    {
        question: "Which of the following is NOT a Javascript data-type?",
        answers:  ["string", "object", "number", "boolean"],
        ansIdx: 1,
    },
    {
        question:"What is a function?",
        answers: ["A method", "An object property", "A continuous loop", "A block of code that does something"],
        ansIdx: 3,
    }, 
    {
        question:"The __ method is used to add an item to the end of an array: ",
        answers: ["concat", "slice", "push", "splice"],
        ansIdx: 2,
    }, 
    {
        question:"Objects in Javascript can be used to store: ",
        answers: ["arrays", "numbers", "functions", "all of the above"],
        ansIdx: 3,
    },
]
    var quizQuestion = document.querySelector("#question");
    var ansList = document.querySelector("#choices");
    var startQuiz = document.querySelector("#start-button")


 

startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    //hide opening text
    introEl.classList.add("hide");
    quizEl.classList.remove("hide");
    //call quiz-painting function & pass in 1st item of object array
    showQuestion(questionsAnswers.shift());//method found on stack overflow, researched and applied in order to pass object into quiz function
    // start timer
    timer();
    console.log(secondsLeft.value);
});

//paints question and answer set to the page, advances through object.
function showQuestion(q){
     //insert question text to h2
    quizQuestion.innerHTML = q.question;

    //clear previous answer buttons
    ansList.innerHTML = '';

    //for each answer in the answers array, create a button
    //attach an onclick handler that will display next question
    for(var i = 0; i < q.answers.length; i ++){
        var listEl = document.createElement("p");
        var btn = document.createElement("button");

         btn.innerHTML = q.answers[i];
         btn.setAttribute("data-id", i)

         ansList.appendChild(listEl);
         listEl.appendChild(btn);

        //event handler on answer buttons
        btn.onclick = function (event) {
            event.preventDefault();
           var id = parseInt(this.getAttribute("data-id"));
           console.log(id); 
         if (id !== q.ansIdx){
             subtractTime();
         } else if (questionsAnswers.length){
            showQuestion(questionsAnswers.shift());
         } else { 
            timerEl.textContent = "Time: " + timeRemaining;
            displayScore();
         }

         if (timeRemaining === 0) {
             displayScore();
         }
        };
        
    };

    
};

//need to work on conditional for this, cause timer won't stop.
function subtractTime(){
    if (timeRemaining > 0){
        timeRemaining -= 10;
    } //else if (timeRemaining < 10) {
    //      stopTimer();
    //  }
    
};



//main timer function, with time of quiz set at 75 seconds
function timer() {
    var secondsLeft = setInterval(function(){
        timeRemaining--;
        timerEl.textContent = "Time: " + timeRemaining;
        
        if(timeRemaining === 0) {
            clearInterval(secondsLeft);//this clears the setInterval()method.
        // displayScore();//will call a function to display endgame form after timer runs out
        } 
        
    }, 1000);
   
};

// function that stops timer; not working yet
function stopTimer(){
    clearInterval();
    };

//Function to display & scores and initials
function displayScore(){
    //hide quiz, display final score
    quizEl.classList.add("hide");
    endGameEl.classList.remove("hide");
    //clear last question
    quizQuestion.innerHTML = "";
    ansList.innerHTML = "";
    //grab HTML elements
    var allDone = document.querySelector("#save-score");
    var enterScore = document.querySelector("#input");
    
    //create HTML elements
    var scoreEl = document.createElement("p");
    var inputLabel = document.createElement("label");
    var inputEl = document.createElement("input");
    var submitSpan = document.createElement("span");
    var submitBtn = document.createElement("button");

    //manipulate HTML elements
    allDone.innerHTML = "All done!"
    scoreEl.innerHTML = "Your final score is: " + timeRemaining;
    inputLabel.innerHTML = "Enter Initials: ";
    inputLabel.setAttribute("for", "initials");
    inputEl.setAttribute("type", "text");
    submitBtn.innerHTML = "Submit";
    submitBtn.setAttribute("class", "submit-btn");
    
    //append elements to DOM
    enterScore.appendChild(scoreEl);
    enterScore.append(inputLabel);
    enterScore.append(inputEl);
    enterScore.appendChild(submitSpan);
    submitSpan.appendChild(submitBtn);
    
    // event handler on submit button
    submitBtn.onclick = function (event) {
        event.preventDefault();
        
        var userScore = inputEl.value.trim() + " - " + timeRemaining;
            
        highScores.push(userScore);
        storeScores();
        //open highScores.html page
        // location.href = "highScores.html"
    };
    console.log(highScores);
};

function storeScores(){
    var existingScores = JSON.parse(localStorage.getItem("user score")) || "";

    highScores.push(existingScores);
    console.log(highScores);
    localStorage.setItem("user score", JSON.stringify(highScores));
    changePage();   
};

function changePage(){
    location.href = "highScores.html";
};

