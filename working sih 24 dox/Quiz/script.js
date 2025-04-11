// const questions = [
//     {
//         question: "What is doping in sports?",
//         answers: [
//             {text: "The use of prohibited substances or methods to enhance athletic performance", correct: true},
//             {text: "A training technique used to improve endurance", correct: false},
//             {text: "A type of injury rehabilitation process", correct: false},
//             {text: "A dietary supplement regimen", correct: false},
//         ]
//     },
//     {
//         question: "Which organization is primarily responsible for combating doping in sports globally?",
//         answers: [
//             {text: "IOC", correct: false},
//             {text: "FIFA", correct: false},
//             {text: "WADA", correct: true},
//             {text: "UNESCO", correct: false},
//         ]
//     },
//     {
//         question: "Which of the following is a common substance banned in sports due to its performance-enhancing effects?",
//         answers: [
//             {text: "Aspirin", correct: false},
//             {text: "Caffeine", correct: false},
//             {text: "Erythropoietin (EPO)", correct: true},
//             {text: "Vitamin C", correct: false},
//         ]
//     },
//     {
//         question: "Which of these is NOT considered a doping method?",
//         answers: [
//             {text: "Blood doping", correct: false},
//             {text: "Gene doping", correct: false},
//             {text: "Nutritional supplementation", correct: true},
//             {text: "The use of anabolic steroids", correct: false},
//         ]
//     },
//     {
//         question: "What is the biological passport in the context of anti-doping?",
//         answers: [
//             {text: "A document athletes carry during competitions", correct: false},
//             {text: "A record of an athlete's biological markers over time", correct: true},
//             {text: "A certification of drug-free status", correct: false},
//             {text: "A travel document for international events", correct: false},
//         ]
//     },
//     {
//         question: "In which sport is the use of beta blockers banned due to their calming effects?",
//         answers: [
//             {text: "Basketball", correct: false},
//             {text: "Archery", correct: true},
//             {text: "Soccer", correct: false},
//             {text: "Swimming", correct: false},
//         ]
//     },
//     {
//         question: "Which famous cyclist was stripped of his seven Tour de France titles due to doping violations?",
//         answers: [
//             {text: "Greg LeMond", correct: false},
//             {text: "Lance Armstrong", correct: true},
//             {text: "Chris Froome", correct: false},
//             {text: "Miguel Indurain", correct: false},
//         ]
//     },
//     {
//         question: "What is Erythropoietin (EPO) primarily used for in doping?",
//         answers: [
//             {text: "To increase muscle mass", correct: false},
//             {text: "To boost red blood cell production", correct: true},
//             {text: "To reduce body fat", correct: false},
//             {text: "To enhance reaction time", correct: false},
//         ]
//     },
//     {
//         question: "Which hormone is often abused by athletes to increase muscle mass and strength?",
//         answers: [
//             {text: "Insulin", correct: false},
//             {text: "Testosterone", correct: true},
//             {text: "Cortisol", correct: false},
//             {text: "Estrogen", correct: false},
//         ]
//     },
//     {
//         question: "What is the purpose of anti-doping testing in sports?",
//         answers: [
//             {text: "To ensure fair play by detecting banned substances", correct: true},
//             {text: "To improve athletes' performance", correct: false},
//             {text: "To monitor athletes' training routines", correct: false},
//             {text: "To manage athletes' health insurance", correct: false},
//         ]
//     }
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");
// const timerElement = document.getElementById("timer");

// let currentQuestionIndex = 0;
// let score = 0;
// let startTime, endTime;
// let questionStartTime, questionTimerInterval;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     startTime = new Date(); // Record the start time of the quiz
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     startQuestionTimer(); // Start the timer for this question
//     let currentQuestion = questions[currentQuestionIndex];
    
//     questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
//     questionElement.classList.remove('fade-out');
//     questionElement.classList.add('fade-in');
    
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
//     questionElement.classList.remove('fade-in');
//     questionElement.classList.add('fade-out');
//     stopQuestionTimer(); // Stop the timer when resetting
// }

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     stopQuestionTimer(); // Stop the timer for the question
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//         score++;
//     } else {
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore() {
//     endTime = new Date(); // Record the end time
//     const totalTimeTaken = Math.floor((endTime - startTime) / 1000); // Calculate total time taken in seconds
//     resetState();
//     questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !<br>Total Time: ${totalTimeTaken} seconds`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
//     timerElement.style.display = "none"; // Hide the timer at the end
// }

// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

// function startQuestionTimer() {
//     let elapsedTime = 0;
//     timerElement.style.display = "block"; // Ensure the timer is visible
//     timerElement.innerHTML = `Time: 0s`;
//     questionStartTime = new Date(); // Record the start time of the question
//     questionTimerInterval = setInterval(() => {
//         elapsedTime = Math.floor((new Date() - questionStartTime) / 1000);
//         timerElement.innerHTML = `Time: ${elapsedTime}s`;
//     }, 1000);
// }

// function stopQuestionTimer() {
//     clearInterval(questionTimerInterval);
// }

// nextButton.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     } else {
//         startQuiz();
//     }
// });

// startQuiz();
const questions = [
    {
        question: "What is doping in sports?",
        answers: [
            {text: "The use of prohibited substances or methods to enhance athletic performance", correct: true},
            {text: "A training technique used to improve endurance", correct: false},
            {text: "A type of injury rehabilitation process", correct: false},
            {text: "A dietary supplement regimen", correct: false},
        ]
    },
    {
        question: "Which organization is primarily responsible for combating doping in sports globally?",
        answers: [
            {text: "IOC", correct: false},
            {text: "FIFA", correct: false},
            {text: "WADA", correct: true},
            {text: "UNESCO", correct: false},
        ]
    },
    {
        question: "Which of the following is a common substance banned in sports due to its performance-enhancing effects?",
        answers: [
            {text: "Aspirin", correct: false},
            {text: "Caffeine", correct: false},
            {text: "Erythropoietin (EPO)", correct: true},
            {text: "Vitamin C", correct: false},
        ]
    },
    {
        question: "Which of these is NOT considered a doping method?",
        answers: [
            {text: "Blood doping", correct: false},
            {text: "Gene doping", correct: false},
            {text: "Nutritional supplementation", correct: true},
            {text: "The use of anabolic steroids", correct: false},
        ]
    },
    {
        question: "What is the biological passport in the context of anti-doping?",
        answers: [
            {text: "A document athletes carry during competitions", correct: false},
            {text: "A record of an athlete's biological markers over time", correct: true},
            {text: "A certification of drug-free status", correct: false},
            {text: "A travel document for international events", correct: false},
        ]
    },
    {
        question: "In which sport is the use of beta blockers banned due to their calming effects?",
        answers: [
            {text: "Basketball", correct: false},
            {text: "Archery", correct: true},
            {text: "Soccer", correct: false},
            {text: "Swimming", correct: false},
        ]
    },
    {
        question: "Which famous cyclist was stripped of his seven Tour de France titles due to doping violations?",
        answers: [
            {text: "Greg LeMond", correct: false},
            {text: "Lance Armstrong", correct: true},
            {text: "Chris Froome", correct: false},
            {text: "Miguel Indurain", correct: false},
        ]
    },
    {
        question: "What is Erythropoietin (EPO) primarily used for in doping?",
        answers: [
            {text: "To increase muscle mass", correct: false},
            {text: "To boost red blood cell production", correct: true},
            {text: "To reduce body fat", correct: false},
            {text: "To enhance reaction time", correct: false},
        ]
    },
    {
        question: "Which hormone is often abused by athletes to increase muscle mass and strength?",
        answers: [
            {text: "Insulin", correct: false},
            {text: "Testosterone", correct: true},
            {text: "Cortisol", correct: false},
            {text: "Estrogen", correct: false},
        ]
    },
    {
        question: "What is the purpose of anti-doping testing in sports?",
        answers: [
            {text: "To ensure fair play by detecting banned substances", correct: true},
            {text: "To improve athletes' performance", correct: false},
            {text: "To monitor athletes' training routines", correct: false},
            {text: "To manage athletes' health insurance", correct: false},
        ]
    }
];

// DOM Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const progressIndicator = document.getElementById("progress-indicator");

// Optional Sound Effects
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let startTime, endTime;
let questionStartTime, questionTimerInterval;

// Initialize Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.classList.remove("play-again");
    startTime = new Date(); // Record the start time of the quiz
    updateProgress();
    showQuestion();
}

// Show Current Question
function showQuestion() {
    resetState();
    animateQuestionIn();
    startQuestionTimer(); // Start the timer for this question
    let currentQuestion = questions[currentQuestionIndex];
    
    questionElement.innerHTML = currentQuestion.question;
    progressIndicator.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    updateProgressBar();

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset State for New Question
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    questionElement.classList.remove('fade-in', 'slide-in');
    questionElement.classList.add('fade-out', 'slide-out');
    stopQuestionTimer(); // Stop the timer when resetting
    timerElement.innerHTML = `Time: 0s`;
}

// Handle Answer Selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    stopQuestionTimer(); // Stop the timer for the question
    disableAnswers();

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        // Play correct sound
        if (correctSound) correctSound.play();
    } else {
        selectedBtn.classList.add("incorrect");
        // Play incorrect sound
        if (incorrectSound) incorrectSound.play();
    }

    // Highlight correct answer
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
    nextButton.classList.remove("play-again");
    // If it's the last question, change button text to "Show Score"
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Show Score";
    }
}

// Disable All Answer Buttons
function disableAnswers() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        button.classList.add("disabled");
    });
}

// Show Final Score
function showScore() {
    endTime = new Date(); // Record the end time
    const totalTimeTaken = Math.floor((endTime - startTime) / 1000); // Calculate total time taken in seconds
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !<br>Total Time: ${totalTimeTaken} seconds`;
    questionElement.classList.remove('slide-out');
    questionElement.classList.add('fade-in', 'slide-in');
    nextButton.innerHTML = "Play Again";
    nextButton.classList.add("play-again");
    nextButton.style.display = "block";
    timerElement.style.display = "none"; // Hide the timer at the end
    progressIndicator.style.display = "none";
    progressBar.style.display = "none";
}

// Handle Next Button Click
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Start Timer for Each Question
function startQuestionTimer() {
    let elapsedTime = 0;
    timerElement.style.display = "block"; // Ensure the timer is visible
    timerElement.innerHTML = `Time: 0s`;
    questionStartTime = new Date(); // Record the start time of the question
    questionTimerInterval = setInterval(() => {
        elapsedTime = Math.floor((new Date() - questionStartTime) / 1000);
        timerElement.innerHTML = `Time: ${elapsedTime}s`;
    }, 1000);
}

// Stop Timer for Each Question
function stopQuestionTimer() {
    clearInterval(questionTimerInterval);
}

// Update Progress Bar
function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Update Progress Indicator
function updateProgress() {
    progressIndicator.style.display = "block";
    progressBar.style.display = "block";
}

// Animate Question In
function animateQuestionIn() {
    questionElement.classList.remove('fade-out', 'slide-out');
    questionElement.classList.add('fade-in', 'slide-in');
}

// Animate Question Out
function animateQuestionOut() {
    questionElement.classList.remove('fade-in', 'slide-in');
    questionElement.classList.add('fade-out', 'slide-out');
}

// Event Listener for Next Button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the Quiz on Page Load
startQuiz();
