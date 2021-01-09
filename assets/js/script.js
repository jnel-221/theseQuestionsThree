//timer variables
var timerEl = document.querySelector(".time");
var timeRemaining = 76;

//quiz variables 
var startQuiz = document.querySelector("#start-button")
var questionsAnswers = [
    {
        question: "Which of the following is NOT a Javascript data-type?",
        answers:  {
            a:"string", 
            b:"object", 
            c:"number", 
            d:"boolean",
        },
        correctAnswer: "b",
    },
    {
        question:"What is a function?",
        answers: {
            a:"A method", 
            b:"An object property", 
            c: "A continuous loop", 
            d:"A block of code that does something",
        },
        correctAnswer: "d",
    }, 
    {
        question:"The __ method is used to add an item to the end of an array: ",
        answers: {
            a:"concat", 
            b:"slice", 
            c:"push", 
            d:"splice",
        },
        answer: "c",
    }, 
    {
        question:"Objects in Javascript can be used to store: ",
        answers: {
            a:"arrays", 
            b:"numbers", 
            c:"functions", 
            d:"all of the above",
        },
        correctAnswer: "d",
    },
]
//main quiz function
//paint questions and answers to page
function init(){
    var question = document.querySelector("#question");
    var ansList = document.querySelector("#answers");
    var 
}


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
timer();