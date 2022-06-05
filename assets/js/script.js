var time = document.querySelector("#time");
var startQuiz = document.querySelector("#startQuiz");
var question = document.getElementById("question");
var description = document.querySelector(".description");
var answerOne = document.querySelector("#answer-1");
var answerTwo = document.querySelector("#answer-2");
var answerThree = document.querySelector("#answer-3");
var answerFour = document.querySelector("#answer-4");
var timer;
var timerCount;

//when the start quiz button is clicked, the function start will run
startQuiz.addEventListener('click', start);

// Function that runs the entire quiz
function start() {
    timerCount = 75;
    startTimer()
    clear()
    question1()
}

//clears initial page
function clear() {
    description.innerHTML='';
    startQuiz.remove();
}

//runs question 1
function question1 () {
    question.textContent ='Commonly used data types DO NOT include:';
    answerOne.setAttribute("style", "visibility:visible;");
    answerOne.textContent='1. strings';
    answerTwo.setAttribute("style", "visibility:visible;");
    answerTwo.textContent='2. booleans';
    answerThree.setAttribute("style", "visibility:visible;");
    answerThree.textContent='3. alerts';
    answerFour.setAttribute("style", "visibility:visible;");
    answerFour.textContent='4. numbers';
}

//runs question 2
function question2 () {
    question.textContent ='The condition in an if / else statement is encolsed within ___';
    answerOne.setAttribute("style", "visibility:visible;");
    answerOne.textContent='1. curly brackets';
    answerTwo.setAttribute("style", "visibility:visible;");
    answerTwo.textContent='2. booleans';
    answerThree.setAttribute("style", "visibility:visible;");
    answerThree.textContent='3. parentheses';
    answerFour.setAttribute("style", "visibility:visible;");
    answerFour.textContent='4. square brackets';
}

//runs question 3
function question3 () {
    question.textContent ='Arrays in JavaScript can be used to store ____.';
    answerOne.setAttribute("style", "visibility:visible;");
    answerOne.textContent='1. numbers and strings';
    answerTwo.setAttribute("style", "visibility:visible;");
    answerTwo.textContent='2. other arrays';
    answerThree.setAttribute("style", "visibility:visible;");
    answerThree.textContent='3. booleans';
    answerFour.setAttribute("style", "visibility:visible;");
    answerFour.textContent='4. all of the above';
}

//runs question 4
function question4 () {
    question.textContent ='String values must be enclosed within ___ when being assigned to variables.';
    answerOne.setAttribute("style", "visibility:visible;");
    answerOne.textContent='1. commas';
    answerTwo.setAttribute("style", "visibility:visible;");
    answerTwo.textContent='2. curly brackets';
    answerThree.setAttribute("style", "visibility:visible;");
    answerThree.textContent='3. quotes';
    answerFour.setAttribute("style", "visibility:visible;");
    answerFour.textContent='4. parentheses';
}

//runs question 5
function question5 () {
    question.textContent ='A very useful tool used during development and debugging for printing content to the debugger is:';
    answerOne.setAttribute("style", "visibility:visible;");
    answerOne.textContent='1. strings';
    answerTwo.setAttribute("style", "visibility:visible;");
    answerTwo.textContent='2. booleans';
    answerThree.setAttribute("style", "visibility:visible;");
    answerThree.textContent='3. alerts';
    answerFour.setAttribute("style", "visibility:visible;");
    answerFour.textContent='4. numbers';
}

// when the start function is ran, the startTimer function will run
function startTimer() {
    //sets timer
    timer = setInterval(function() {
        timerCount--;
        time.textContent = timerCount;
    // if answer is right time is the same, if wrong, 15s is taken off the clock
    }, 1000)
}

// click an answer and the next questio comes up



// when quiz is finished, final score is equal to time remaining, initials can be submitted to local storage 

// when submitted a highscore table is displayed

// button is clicked --> go back runs function again, clear highscores removes local storage