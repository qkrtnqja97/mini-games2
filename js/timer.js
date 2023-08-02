$("#addButton").click(addTime)

let counter; ///global scope
let clickCounter = 0;

function start() { ///named function
    counter = setInterval(timer, 1000);

}

function addTime() {
    let timer1 = $("#timerNumber").html();
    timer1 = parseInt(timer1)+10;
    $("#timerNumber").html(timer1) 
    countGuess--;
    livesIndicate();
    clickCounter++ 
    if (clickCounter == 1) {
        $("#addButton").attr("disabled", "true")
    }

}
function start() { //named function
    counter = setInterval(timer, 1000);
    $("#startButton").attr("disabled", "true"); //limited scope variable
}

function reset() { //named function
    stop();
    $("#timerNumber").html(10);
    $("#addButton").removeAttr("disabled")
}


function stop() { ///named function
    clearInterval(counter);
    clickCounter = 0
    $("#addButton").removeAttr("disabled")

}

function timer() { ///named function
    let timer = $("#timerNumber").html(); ///limited scope variable
    timer = parseInt(timer); ///built-in-function - in this example, parseInt converts the HTML text to a number
    timer--; ///Arithmetic operator decrement
    $("#timerNumber").html(timer);
    if (timer == 0) { ///Comparison operators equal to
        stop();
        livesIndicate();
        $("#addButton").attr("disabled", "true")
    }
} 