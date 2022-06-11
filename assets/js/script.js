var startPage = document.getElementById("start");
var quizPage = document.getElementById("quiz");
var finishPage = document.getElementById("finish");
var highScorePage = document.getElementById("high-scores");
var time = document.querySelector("#time");
var startQuiz = document.querySelector("#startQuiz");
var question = document.querySelector("#question");
var answerbtns =  document.querySelector("#answers");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var highScoreList  =  document.getElementById("high-score-list");
var highScorebtn = document.getElementById("highScore");
var timer;
var timerCount;
var gameover;
var HighScores = [];
var arrayShuffledQuestions
var QuestionIndex = 0

var questionsList = [
    { q: 'Commonly used data types DO NOT include:', 
      a: '3. alerts', 
      options: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'}]
    },

    { q: 'The condition in an if / else statement is encolsed within ___', 
      a: '1. curly brackets', 
      options: [{choice: '1. curly brackets'}, {choice: '2. booleans'}, {choice: '3. parentheses'}, {choice: '4. square brackets'}]
    },

    { q: 'Arrays in JavaScript can be used to store ____.', 
      a: '4. all of the above', 
      options: [{choice: '1. numbers and strings'}, {choice: '2. other arrays'}, {choice: '3. booleans'}, {choice: '4. all of the above'}]
    },

    { q: 'String values must be enclosed within ___ when being assigned to variables', 
      a: '3. quotes', 
      options: [{choice: '1. commas'}, {choice: '2. curly brackets'}, {choice: '3. quotes'}, {choice: '4. parentheses'}]
    },

    { q: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
      a: '4. console.log', 
      options: [{choice: '1. JavaScript'}, {choice: '2. terminal/bash'}, {choice: '3. for loops'}, {choice: '4. console.log'}]
    },
];

//when the start quiz button is clicked, the function start will run
startQuiz.addEventListener('click', start);

// Function that starts the entire quiz
function start() {
    startPage.classList.add('hide');
    quizPage.classList.remove('hide');
    timerCount = 75;
    arrayShuffledQuestions = questionsList.sort(() => Math.random() - 0.5)
    startTimer()
    chooseQuestions()
}

// when the start function is ran, the startTimer function will run
function startTimer() {
    //sets timer
    timer = setInterval(function() {
        timerCount--;
        time.textContent = timerCount;
    if (gameover) {
        clearInterval(timer)
    }
    if (timerCount < 0) {
        time.textContent = "0"
        clearInterval(timer)
    }
    }, 1000)
}

// cycles through the list of questions that have been randomised and is displayed
function chooseQuestions() {
    clearAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

//clears answers so they do not stack after every question is answered
function clearAnswers() {
    while (answerbtns.firstChild) {
        answerbtns.removeChild(answerbtns.firstChild)
    };
}


function displayQuestion(index) {
    question.innerText = index.q
    //for every choice, create a button element in HTML with class button and answerbtn, insert the answer, add an event listener for the button which checks if the answer is correct and put the button element as a child of the answerbtns variable
    for (var i=0; i < index.options.length; i++) {
        var answerbtn = document.createElement('button')
        answerbtn.innerText = index.options[i].choice
        answerbtn.classList.add('button')
        answerbtn.addEventListener("click", answerCheck)
        answerbtns.appendChild(answerbtn)
    }
};

// Searches if the answer is correct through comparing selected answer to "a" in the questionsList array, if answer is right, no time is added, if wrong, 15s is subtracted
function answerCheck(event) {
    var chosenAnswer = event.target
    if  (arrayShuffledQuestions[QuestionIndex].a  === chosenAnswer.innerText) {
    }
    else {
        timerCount = timerCount - 15;
    }
    
    QuestionIndex++
        if (arrayShuffledQuestions.length>QuestionIndex + 1) {
        chooseQuestions()
    }
    else {
        gameover = "true";
        showScore();
    }
}

// when the game is over, hide the quizPage by adding class "hide" and remove "hide" class to make the finishPage appear. Display text that shows your score through DOM manipulation
function showScore() {
    quizPage.classList.add("hide");
    finishPage.classList.remove("hide");
    var yourScore = document.createElement("p");
    yourScore.textContent = "Your final score is " + timerCount + "!";
    score.appendChild(yourScore);
}



