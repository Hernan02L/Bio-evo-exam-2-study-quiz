
const allQuestions = [
    {
        lecture: "10",
        question: "What is significant about the Cambrian Explosion?",
        choices: ["Dinosaur extinction", "Rise of mammals", "Appearance of modern animal phyla", "Origin of plants"],
        answer: 2,
        explanation: "The Cambrian Explosion marks the sudden appearance of most major animal groups in the fossil record."
    },
    {
        lecture: "14",
        question: "What does lactase persistence allow?",
        choices: ["Digestion of meat", "Continued lactose digestion in adulthood", "Skin tanning", "Resistance to malaria"],
        answer: 1,
        explanation: "Lactase persistence allows adults to digest milk, especially in populations with dairy agriculture."
    },
    {
        lecture: "17",
        question: "Where is the most human genetic variation found?",
        choices: ["Europe", "Asia", "Africa", "South America"],
        answer: 2,
        explanation: "Africa contains the most human genetic diversity due to being the origin of modern humans."
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
        btn.onclick = () => checkAnswer(index, btn);
        choicesDiv.appendChild(btn);
    });
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("total").textContent = filteredQuestions.length;
}

function checkAnswer(selected, buttonEl) {
    const q = filteredQuestions[currentQuestion];
    const feedback = document.getElementById("feedback");
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add("correct");
    });

    if (selected === q.answer) {
        score++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        buttonEl.classList.add("incorrect");
        feedback.innerHTML = "<span style='color:red'>Incorrect.</span> " + q.explanation;
    }

    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").style.display = "inline";
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
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    loadQuestion();
}

window.onload = () => {
    document.getElementById("lecture-select").value = "all";
    filteredQuestions = shuffle([...allQuestions]);
    loadQuestion();
};
