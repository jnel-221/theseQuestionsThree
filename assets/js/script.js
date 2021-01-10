//timer variables
var timerEl = document.querySelector(".time");
var timeRemaining = 76;
//opening section variables
var introEl = document.querySelector("#intro");
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


    //quiz functions

startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    //hide opening text
    introEl.classList.add("hide");
    //call quiz-painting function & pass in 1st item of object array
    showQuestion(questionsAnswers.shift());//method found on stack overflow, researched and applied in order to pass object into quiz function
    // start timer
    timer();
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
             timeRemaining -= 10;

         } else {
            showQuestion(questionsAnswers.shift());
         };
        };
        
    };

    
};

 displayScore();
//Function to display & store scores and initials
function displayScore(){
    //clear text from page
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
    
    //append elements to DOM
    enterScore.appendChild(scoreEl);
    enterScore.append(inputLabel);
    enterScore.append(inputEl);
    enterScore.appendChild(submitSpan);
    submitSpan.appendChild(submitBtn);
    
    //event handler on submit button
    submitBtn.onclick = function (event) {
        event.preventDefault();
        //call function that sets time and score tolocal storage
        //open highScores.html page
    }
};


//main timer function, with time of quiz set at 75 seconds
function timer() {
    var secondsLeft = setInterval(function(){
        timeRemaining--;
        timerEl.textContent = "Time: " + timeRemaining;
        
        if(timeRemaining === 0) {
            clearInterval(secondsLeft);//this clears the setInterval()method.
        //     scoreFunction();//will call a function to display endgame form after timer runs out
        };
    }, 1000);
    
};
