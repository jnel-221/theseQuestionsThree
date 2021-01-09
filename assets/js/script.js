var timerEl = document.querySelector(".time");


var timeRemaining = 75;

function timer() {
    var secondsLeft = setInterval(function(){
        timeRemaining--;
        timerEl.textContent = "Time: " + timeRemaining;
        
        if(timeRemaining === 0) {
            clearInterval(secondsLeft);//this clears the setInterval()method.
        //     scoreFunction();//calls function called 'sendMessage' after secondsLeft reaches zero
          }

    }, 1000);
    
};
timer();