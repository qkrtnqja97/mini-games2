const dataset = [
    {
        "Category": "Song",
        "Name": "Let it be",
        "Hint": "Beatles"
    },
    {
        "Category": "Song",
        "Name": "Thriller",
        "Hint": "Michael Jackson"
    },
    {
        "Category": "Song",
        "Name": "Your song",
        "Hint": "Elton John"
    },
    {
        "Category": "Song",
        "Name": "Shape of You",
        "Hint": "Ed Sheeran"
    },
    {
        "Category": "Song",
        "Name": "Gangnam Style",
        "Hint": "PSY"
    }
]; ///Constant Variables

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; ///Arrays

// Get Elements
let nextBtn = document.getElementById('next-btn');
let answerSec = document.getElementById('answer-section');
let livesCount = document.getElementById('lives-left');
let hintBtn = document.getElementById('hint');
let hintDiv = document.getElementById('hint-text');
let letterBtns = document.getElementById('letters');

// Variables
let countQuiz = 0;
let hintText;
let countGuess;

// Start button
document.getElementById('start-btn').addEventListener('click', () => { ///Anonymous Function
    document.getElementById('start-screen').hidden = true;
    document.getElementById('hangman').hidden = false;
    start();
})

// Create the first quiz and alphabet buttons
document.addEventListener('DOMContentLoaded', () => {
    setQuiz(countQuiz);
    placeAlphabets();
})

// Hint Button
hintBtn.addEventListener('click', () => { ///Input-Output
    hintDiv.innerHTML = hintText;
    hintBtn.hidden = true;
    hintDiv.hidden = false;
})

// Next Button
nextBtn.addEventListener('click', () => {
    // Reset Timer
    reset();
    start();

    // Reset Quiz
    if (countQuiz == dataset.length - 1) { ///Evaluation / Comparison Operators
        // When user completes all quizes
        closeAlphabets();
        answerSec.style.fontSize = '25px'
        answerSec.style.letterSpacing = '1vw'
        answerSec.innerHTML = 'Complete all Quizes!';
    } else {
        countQuiz++; ///Arithmetic Operators
        setQuiz(countQuiz);

        // Reset alphabets
        while (letterBtns.firstChild) { ///While Loop
            letterBtns.removeChild(letterBtns.firstChild);
        }
        placeAlphabets();
    }

    // Reset Hint
    hintDiv.innerHTML = '';
    hintBtn.hidden = false;
    hintDiv.hidden = true;
})

function setQuiz(num) { ///Named Functions
    countGuess = 5;
    livesIndicate();
    answerText = dataset[num].Name;
    guessedText = '';
    for (let i = 0; i < answerText.length; i++) { ///For Loop
        if (answerText[i] == ' ') { ///Conditional Statement
            guessedText += ' ';
        } else {
            guessedText += '_'; ///Assignment Operators
        }
    }
    answerSec.innerHTML = guessedText;

    hintText = dataset[num].Hint;
}

function livesIndicate() { ///Named Functions
    livesCount.innerHTML = countGuess;
    if (
        (countGuess <= 0) || ///Logical Operators
        (parseInt(document.getElementById("timerNumber").innerHTML) == 0)
    ) {
        answerSec.innerHTML = answerText;
        livesCount.innerHTML = 'You Lost!';
        closeAlphabets();
        stop();
    }
}

function placeAlphabets() { ///Named Functions
    for (var i = 0; i < alphabets.length; i++) {
        let letterButton = document.createElement('button'); ///Limited Scope Variables
        letterButton.style.fontSize = '20px';
        letterButton.innerHTML = alphabets[i];

        // Set onlick property
        letterButton.onclick = clickAlphabet; 

        letterBtns.appendChild(letterButton);
    }
}

function clickAlphabet() {
    this.onclick = null;
    this.setAttribute("class", "clicked");

    let isCorrect = false;
    for (let i = 0; i < answerText.length; i++) { ///String Manipulation
        if (answerText[i].toLowerCase() == this.innerHTML) { ///Built-in Methods
            guessedText = guessedText.slice(0, i) + answerText[i] + guessedText.slice(i + 1);
            console.log(guessedText);
            answerSec.innerHTML = guessedText;
            isCorrect = true;
        }
    }
    checkResult(isCorrect);
}

function checkResult(isWin) {
    if (isWin) {
        // When User Win
        if (!guessedText.includes('_')) {
            livesCount.innerHTML = 'Congrats! You Won!';
            closeAlphabets();
            stop();
        }
    } else {
        countGuess--;
        livesIndicate();
    }
}

function closeAlphabets() {
    let btnArr = document.querySelectorAll('#letters>button');
    for (let i = 0; i < btnArr.length; i++) {
        btnArr[i].onclick = null;
        btnArr[i].setAttribute("class", "clicked");
    }
}

///Return Statement
///Built-in Class
///Constructor
