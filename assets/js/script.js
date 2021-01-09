var timerEl = document.querySelector(".time");
var timeRemaining = 75;

var questionsAnswers = [
    {
        question: "Which of the following is NOT a Javascript data-type?",
        choices: ["string", "object", "number", "boolean"],
        answer: "object",
    },
    {
        question:"What is a function?",
        choices: ["A method", "An object property", "A continuous loop", "A block of code that does something"],
        answer: "A block of code that does something",
    }, {
        question:"The __ method is used to add an item to the end of an array: ",
        choices: ["concat", "slice", "push", "splice"],
        answer: "push",
    }, {
        question:"Objects in Javascript can be used to store: ",
        choices: ["arrays", "numbers", "functions", "all of the above"],
        answer: "all of the above",
    },
]




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