document.getElementById("startButton").addEventListener("click", start)
document.getElementById("stopButton").addEventListener("click", stop)
document.getElementById("resetButton").addEventListener("click", reset)

let counter; ///global scope

function start() { ///named function
    counter = setInterval(timer, 1000);
    let startButton = document.getElementById("startButton"); ///limited scope variable
    startButton.disabled = true;
}
function stop() { ///named function
    clearInterval(counter);
    let startButton = document.getElementById("startButton"); ///limited scope variable
    startButton.disabled = false;
}
function reset() { ///named function
    stop();
    document.getElementById("timerNumber").innerHTML = 10;
}
function timer() { ///named function
    let timer = document.getElementById("timerNumber").innerHTML; ///limited scope variable
    timer = parseInt(timer); ///built-in-function - in this example, parseInt converts the HTML text to a number
    timer--; ///Arithmetic operator decrement
    document.getElementById("timerNumber").innerHTML = timer;
    if (timer == 0) { ///Comparison operators equal to
        stop();
        livesIndicate();
    }
}