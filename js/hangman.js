// $(function () {
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
let answerSec = $('#answer-section');
let livesCount = $('#lives-left');
let hintBtn = $('#hint');
let hintDiv = $('#hint-text');
let letterBtns = $('#letters');

// Variables
let countQuiz = 0;
let hintText;
let countGuess;

// Create the first quiz and alphabet buttons
setQuiz(countQuiz);
placeAlphabets();

// Start button
$('#start-btn').on('click', () => { ///Anonymous Function
    $('#start-screen').hide();
    $('#hangman').show();
    start();
})


// Hint Button
hintBtn.on('click', () => { ///Input-Output
    hintDiv.text(hintText);
    hintBtn.hide();
    hintDiv.show();
})

// Next Button
$('#next-btn').on('click', () => {
    // Reset Timer
    reset();
    start();

    // Reset Quiz
    if (countQuiz == dataset.length - 1) { ///Evaluation / Comparison Operators
        // When user completes all quizes
        closeAlphabets();
        hintText = '';
        answerSec.css('fontSize', '25px')
        answerSec.css('letterSpacing', '1vw')
        answerSec.text(`Complete all Quizes!`);
    } else {
        countQuiz++; ///Arithmetic Operators
        setQuiz(countQuiz);

        // Reset alphabets
        letterBtns.empty();
        placeAlphabets();
    }

    // Reset Hint
    hintBtn.show();
    hintDiv.hide();
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
    answerSec.text(guessedText);

    hintText = dataset[num].Hint;
}

function livesIndicate() { ///Named Functions
    livesCount.text(countGuess);
    if (
        (countGuess <= 0) || ///Logical Operators
        (parseInt(document.getElementById("timerNumber").innerHTML) == 0)
    ) {
        answerSec.text(answerText);
        livesCount.text('You Lost!');
        closeAlphabets();
        stop();
    }
}

function placeAlphabets() { ///Named Functions
    for (var i = 0; i < alphabets.length; i++) {
        let letterButton = $('<button>');
        letterButton.css('fontSize', '20px');
        letterButton.text(alphabets[i]);

        // Set onlick property
        letterButton.click(clickAlphabet);

        letterBtns.append(letterButton);
    }
}

function clickAlphabet() {
    this.disabled = true;
    this.setAttribute("class", "clicked");

    let isCorrect = false;
    for (let i = 0; i < answerText.length; i++) { ///String Manipulation
        if (answerText[i].toLowerCase() == this.innerHTML) { ///Built-in Methods
            guessedText = guessedText.slice(0, i) + answerText[i] + guessedText.slice(i + 1);
            answerSec.text(guessedText);
            isCorrect = true;
        }
    }
    checkResult(isCorrect);
}

function checkResult(isWin) {
    if (isWin) {
        // When User Win
        if (!guessedText.includes('_')) {
            livesCount.text('Congrats! You Won!');
            closeAlphabets();
            stop();
        }
    } else {
        countGuess--;
        livesIndicate();
    }
}

function closeAlphabets() {
    let btnArr = $('#letters>button');
    btnArr.each(function () {
        $(this).prop("disabled", true);
        $(this).attr("class", "clicked");
    })
}
// })

