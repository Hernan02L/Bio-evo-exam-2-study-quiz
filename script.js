
const questions = [
    {
        question: "What is the Cambrian Explosion known for?",
        choices: [
            "Dinosaur extinction",
            "The rise of mammals",
            "Sudden appearance of modern animal phyla",
            "First hominin migration"
        ],
        answer: 2
    },
    {
        question: "What trait characterizes the Theropoda?",
        choices: [
            "Plant eating with horny bills",
            "Bipedal predators",
            "Long necks and massive size",
            "Large brain size"
        ],
        answer: 1
    },
    {
        question: "What does the term exaptation mean?",
        choices: [
            "A failed adaptation",
            "A mutation with no effect",
            "An old trait reused for a new purpose",
            "The extinction of a species"
        ],
        answer: 2
    },
    {
        question: "What did early Homo species evolve to protect against UV radiation?",
        choices: [
            "Hair growth",
            "Fat layers",
            "Sweating",
            "Increased melanin"
        ],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    q.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.className = "choice-btn";
        btn.onclick = () => checkAnswer(index);
        choicesDiv.appendChild(btn);
    });
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("total").textContent = questions.length;
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
    if (selected === q.answer) {
        score++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect.";
        feedback.style.color = "red";
    }
    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").style.display = "inline";
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = "<h2>Quiz complete!</h2><p>Your score: " + score + "/" + questions.length + "</p>";
    }
}

window.onload = loadQuestion;
