// Selects element by class
var mainEl = document.getElementById('main');
var choiceA = document.getElementById('A')
var choiceB = document.getElementById('B')
var choiceC = document.getElementById('C')
var choiceD = document.getElementById('D')
var startButton = document.querySelector(".start-button");
var score = document.querySelector(".score")
var timerElement = document.querySelector(".time");

var scoreCount;
var timerCount;
var myQuestions = [
	{
		question: "Commonly used data types DO NOT include",
		answers: {
			a: 'String',
			b: 'boolean',
			c: 'Integers',
            d: 'alerts'
		},
		correctAnswer: 'd'
	},
	{
		question: "Of the following, if statements, which one correctly executes three instructions if the condition is true?",
		answers: {
			a: 'If (x < 0) a = b * 2; y = x; z = a – y;',
			b: '{ if (x < 0) a = b * 2; y = x; z = a – y; }',
			c: 'If{ (x < 0) a = b * 2; y = x; z = a – y ; }',
            d: 'If (x < 0) { a = b * 2; y = x; z = a – y; } '
		},
		correctAnswer: 'd'
	},
    {
		question: "_______ is the process of finding errors and fixing them within a program.",
		answers: {
			a: 'Compiling',
			b: 'Executing',
			c: 'Debugging',
            d: 'Scanning'
		},
		correctAnswer: 'c'
	},
    {
		question: "The behaviour of the instances present of a class inside a method is defined by __________",
		answers: {
			a: 'Method',
			b: 'Classes',
			c: 'Interfaces',
            d: 'Classes and Interfaces'
		},
		correctAnswer: 'b'
	},
    {
		question: "The keyword or the property that you use to refer to an object through which they were invoked is _________",
		answers: {
			a: 'this',
			b: 'object',
			c: 'to',
            d: 'from'
		},
		correctAnswer: 'a'
	}
];

const lastQuestion = myQuestions.length;
var runningQuestion = 0;

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time: " +timerCount;
      // Tests if time has run out
      if (timerCount === 0 || runningQuestion == lastQuestion) {
        // Clears interval
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

// Function to append questions to screen

function renderQuestion(){

    let q = myQuestions[runningQuestion];

    mainEl.textContent = q.question;

    choiceA.textContent = q.answers.a;

    choiceB.textContent = q.answers.b;

    choiceC.textContent = q.answers.c;

    choiceD.textContent = q.answers.d;

}

choiceA.addEventListener("click", function() {
    // Action will fire if count is greater than  0
    let answer = myQuestions[runningQuestion].correctAnswer;
    if(runningQuestion != lastQuestion-1){
        runningQuestion++;
        if (answer != 'a') {
            timerCount = timerCount-10;
        }
        renderQuestion()
    }
    else{
        if (answer != 'a') {
            timerCount = timerCount-10;
        }
        runningQuestion++;
    }
});

choiceB.addEventListener("click", function() {
    // Action will fire if count is greater than  0
    let answer = myQuestions[runningQuestion].correctAnswer;
    if(runningQuestion != lastQuestion-1){
        runningQuestion++;
        if (answer != 'b') {
            timerCount = timerCount-10;
        }
        renderQuestion()
    }    
    else{
        if (answer != 'b') {
            timerCount = timerCount-10;
        }
        runningQuestion++;
    }
});

choiceC.addEventListener("click", function() {
    // Action will fire if count is greater than  0
    let answer = myQuestions[runningQuestion].correctAnswer;
    if(runningQuestion != lastQuestion-1){
        runningQuestion++;
        if (answer != 'c') {
            timerCount = timerCount-10;
        }
        renderQuestion()
    }
    else{
        if (answer != 'c') {
            timerCount = timerCount-10;
        }
        runningQuestion++;
    }
});

choiceD.addEventListener("click", function() {
    // Action will fire if count is greater than  0
    let answer = myQuestions[runningQuestion].correctAnswer;
    if(runningQuestion != lastQuestion-1){
        runningQuestion++;
        if (answer != 'd') {
            timerCount = timerCount-10;
        }
        renderQuestion()
    }
    else{
        if (answer != 'd') {
            timerCount = timerCount-10;
        }
        runningQuestion++;
    }
});

function startGame() {
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    timerElement.textContent = "Time: " +timerCount;
    choiceA.style.visibility = "visible"
    choiceB.style.visibility = "visible"
    choiceC.style.visibility = "visible"
    choiceD.style.visibility = "visible"
    startTimer()
    renderQuestion()
  }


function endGame() {
    mainEl.textContent = "GAME OVER";
    choiceA.style.visibility = "hidden"
    choiceB.style.visibility = "hidden"
    choiceC.style.visibility = "hidden"
    choiceD.style.visibility = "hidden"
    scoreCount = timerCount;
    startButton.disabled = false;
    setScores()
}

// Updates score count on screen and sets score count to client storage
function setScores() {
    score.textContent = "Your Score: " +scoreCount;
    localStorage.setItem("Score", scoreCount);
}


function init() {
    getScores();
}

// These functions are used by init
function getScores() {
    // Get stored value from client storage, if it exists
    var counter = localStorage.getItem("Score");
    // If stored value doesn't exist, set counter to 0
    if (counter === null) {
        counter = 0;
    } else {
      // If a value is retrieved from client storage set the scoreCounter to that value
      scoreCount = counter;
    }
    //Render win count to page
    score.textContent = scoreCount;
  }

  startButton.addEventListener("click", startGame);
  choiceA.style.visibility = "hidden"
  choiceB.style.visibility = "hidden"
  choiceC.style.visibility = "hidden"
  choiceD.style.visibility = "hidden"