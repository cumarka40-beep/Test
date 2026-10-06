const quizData = [
    {
        question: "Which keyword is used to declare a variable that can change?",
        options: ["const", "let", "fixed", "static"],
        correct: "let"
    },
    {
        question: "What does document.querySelector() return if no match is found?",
        options: ["undefined", "false", "null", "0"],
        correct: "null"
    },
    {
        question: "Which bracket is used to write an Array in JavaScript?",
        options: ["Square Brackets []", "Curly Braces {}", "Parentheses ()", "Angle Brackets <>"],
        correct: "Square Brackets []"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionText = document.querySelector('#question-text');
const optionsContainer = document.querySelector('#options-container');
const nextBtn = document.querySelector('#next-btn');
const scoreTracker = document.querySelector('#score-tracker');

function loadQuestion() {

    answered = false;

    optionsContainer.innerHTML = "";

    nextBtn.classList.add('hide');

    const currentData = quizData[currentQuestionIndex];

    questionText.textContent = currentData.question;

    for (let i = 0; i < currentData.options.length; i++) {

        const option = currentData.options[i];

        const button = document.createElement('button');

        button.className = 'option-btn';

        button.textContent = option;

        button.addEventListener('click', function () {

            checkAnswer(option, currentData.correct);

        });

        optionsContainer.appendChild(button);
    }
}

function checkAnswer(selectedOption, correctOption) {

    // Prevent multi-clicking
    if (answered === true) {
        return;
    }

    answered = true;

    if (selectedOption === correctOption) {

        score++;

        scoreTracker.textContent = `Score: ${score}`;

        alert("Correct! 🎉");

    } else {

        alert(`Wrong! The correct answer was: ${correctOption}`);
    }

    nextBtn.classList.remove('hide');
}

nextBtn.addEventListener('click', function () {

    // Restart quiz logic
    if (nextBtn.textContent === "Restart Quiz") {

        currentQuestionIndex = 0;

        score = 0;

        answered = false;

        scoreTracker.textContent = `Score: ${score}`;

        nextBtn.textContent = "Next";

        loadQuestion();

        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {

        loadQuestion();

    } else {

        questionText.textContent = "Quiz Complete! 🏁";

        optionsContainer.innerHTML =
            `<h3>Your final score is ${score} out of ${quizData.length}</h3>`;

        nextBtn.textContent = "Restart Quiz";

        nextBtn.classList.remove('hide');
    }
});

loadQuestion();