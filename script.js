
const allQuestions = [
    {
        lecture: "10",
        question: "What does the Cambrian Explosion mark?",
        choices: [
            "Appearance of reptiles",
            "Sudden appearance of modern animal phyla",
            "Extinction of dinosaurs",
            "First human ancestors"
        ],
        answer: 1
    },
    {
        lecture: "10",
        question: "Which group were bipedal predators?",
        choices: [
            "Ornithischia",
            "Theropoda",
            "Sauropodomorpha",
            "Cenozoans"
        ],
        answer: 1
    },
    {
        lecture: "16",
        question: "Why is folate important in human reproduction?",
        choices: [
            "It aids in digestion",
            "It helps absorb calcium",
            "It is necessary for DNA synthesis during early development",
            "It promotes testosterone"
        ],
        answer: 2
    },
    {
        lecture: "17",
        question: "Who showed most genetic variation is within populations?",
        choices: [
            "Mary-Claire King",
            "Richard Lewontin",
            "Rebecca Cann",
            "Louis Agassiz"
        ],
        answer: 1
    },
    {
        lecture: "17",
        question: "What does polygenism claim?",
        choices: [
            "That all humans came from one region",
            "That different races have separate evolutionary origins",
            "That humans evolved from chimps",
            "That genes have no racial link"
        ],
        answer: 1
    },
    {
        lecture: "14",
        question: "What does lactase persistence allow?",
        choices: [
            "Digestion of meat",
            "Continued lactose digestion in adulthood",
            "Skin tanning",
            "Resistance to malaria"
        ],
        answer: 1
    }
];

let filteredQuestions = [];
let currentQuestion = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    const q = filteredQuestions[currentQuestion];
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
    document.getElementById("total").textContent = filteredQuestions.length;
}

function checkAnswer(selected) {
    const q = filteredQuestions[currentQuestion];
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
    document.querySelectorAll(".choice-btn").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < filteredQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = "<h2>Quiz complete!</h2><p>Your score: " + score + "/" + filteredQuestions.length + "</p>";
    }
}

function filterQuestions() {
    const selected = document.getElementById("lecture-select").value;
    filteredQuestions = selected === "all"
        ? shuffle([...allQuestions])
        : shuffle(allQuestions.filter(q => q.lecture === selected));
    resetQuiz();
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("quiz-box").innerHTML = `
        <div id="question"></div>
        <div id="choices"></div>
        <div id="feedback"></div>
        <button id="next-btn" onclick="nextQuestion()">Next Question</button>
    `;
    loadQuestion();
}

window.onload = () => {
    filteredQuestions = shuffle([...allQuestions]);
    loadQuestion();
};
