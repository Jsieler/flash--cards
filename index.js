var questionsEl = document.getElementById('questions')
var answersEl = document.getElementById('answers')

var questions = ['What is 1+1?', 'What is 1+2?', 'What is 1+3?', 'What is 1+4?', 'What is 1+5?', 'What is 1+6?']
var answers = ['2', '3', '4', '5', '6', '7']

var getQuestion = 0



function displayQuestion() {
    questionsEl.textContent = questions[`${getQuestion}`]
    answersEl.textContent = answers[`${getQuestion}`]
}
displayQuestion()


function nextQuestion() {
    questionsEl.textContent = ''
    answersEl.textContent = ''
    getQuestion++
    console.log(getQuestion)
    if (getQuestion >= questions.length) {
        alert("No More Questions Please Refresh to Start Again")
    }
    displayQuestion()
}

function previousQuestion() {
    questionsEl.textContent = ''
    answersEl.textContent = ''
    getQuestion--
    console.log(getQuestion)
    if (getQuestion >= questions.length) {
        alert("No More Questions Please Refresh to Start Again")
    }
    displayQuestion()
}

function revealAnswer() {
    var x = document.getElementById("answers");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
