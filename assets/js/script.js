var timerEl = document.querySelector(".time");
var timeRemaining = 75;

var questionsAnswers




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