// define all questions and answers
quizContent = [{
    question: "Who won the Nobel Prize for the discovery of dark energy in 2011?",
    answers: ["William H. Press", "Adam G. Riess", "Saul Perlmutter", "Robert Kirshner"],
    fact: "Adam G. Riess won the Nobel Prize for Physics in 2011 for his discovery of dark energy, " + "a repulsive force that is the dominant component (69.4 percent) of the universe. ",
    correctAnswer: "Adam G. Riess",
}, {
    question: "What is the dark center of a sunspot called?",
    answers: ["Umbra", "Penumbra", "Dark Spot", "Filament"],
    fact: "The dark centre of a sunspot is called the umbra; the outer, lighter ring is the penumbra.",
    correctAnswer: "Umbra",
}, {
    question: "What is the smallest planet in the solar system by mass?",
    answers: ["Mercury", "Mars", "Earth", "Jupiter"],
    fact: "Mercury, the innermost planet of the solar system, is the smallest by mass (and size).",
    correctAnswer: "Mercury",
}, {
    question: "What is the scientific term used for the twinkling of stars?",
    answers: ["Scintillation", "Refraction", "Parallax", "Albedo"],
    fact: "Scintillation is the twinkling of stars to the unaided eye, a commonly known result of turbulence in the higher reaches of the atmosphere.",
    correctAnswer: "Scintillation",
}, {
    question: "When did the Space Age begin?",
    answers: ["1957", "1941", "1969", "1999"],
    facts: "The Space Age began on October 4, 1957, when the Soviet Union launched Sputnik 1, the first artificial Earth satellite.",
    correctAnswer: "1957",
}, {
    question: "Who discovered dark matter?",
    answers: ["Fritz Zwicky", "Jan Oort", "Vera Rubin", "Halton Arp"],
    fact: "Fritz Zwicky, a Swiss astronomer and physicist discovered the existence of dark matter, a component of the universe making up 30.1% of the matter-energy composition.",
    correctAnswer: "Fritz Zwicky"

},];

// track time
let timeTrack;
//      track questions
let trackQuestions;


timerEl = document.getElementsByClassName("time-count-span");
questionsEl = document.getElementById("questions-text");
quizFormEl = document.getElementById("quiz-form");
startButtonEl = document.getElementById("start-button");
scoreContainerEl = document.getElementById("score-container");
scoreTextEl = document.getElementById("score-text");

let currentQuestion = 0;
let correctAnswer = 0;

// Display questions and answers after user clicked 'Start Game'
function displayQuestion(index) {
    // Access question and answer object
    const questionData = quizContent[index];
    // Display question
    questionsEl.textContent = questionData.question;
    for (let i = 0; i < questionData.answers.length; i++) {
        let id = "answer-label-" + i;
        let answerIdEl = document.getElementById(id);
        // Display answer
        answerIdEl.textContent = questionData.answers[i];

        let radioEl = document.getElementById('answer_' + i);
        radioEl.value = questionData.answers[i];
    }
}

// Start Quiz Button Interaction
function startQuiz() {
    startButtonEl.hidden = true;
    quizFormEl.hidden = false;
    displayQuestion(0);
}

// Display new question
function quizFormSubmitted(event) {
    event.preventDefault();
    let answerIsCorrect = checkWin();
    if (answerIsCorrect) {
        correctAnswer++;
    }
    currentQuestion++;

    if (currentQuestion >= quizContent.length) {
        finishQuiz();
        return;
    }

    displayQuestion(currentQuestion);
}

// Show score
function finishQuiz() {
    quizFormEl.hidden = true;
    // show score container
    scoreContainerEl.hidden = false;
    scoreTextEl.textContent = correctAnswer;

}

// Check if user picked the right answer
function checkWin() {
    let userChoice = document.querySelector("input:checked");
    console.log(userChoice.value);
    if (userChoice.value === quizContent[currentQuestion].correctAnswer) {
        return true;
    }
    return false;
}

startButtonEl.addEventListener("click", startQuiz);
quizFormEl.addEventListener("submit", quizFormSubmitted);


// Pseudo Code
// function
//      rendering a question
//          clear/remove previous question
//          getting first question
//          add question to the question container
//          make button for each answer
//          add answers to the answers container

// function
//      handle quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score

// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups

