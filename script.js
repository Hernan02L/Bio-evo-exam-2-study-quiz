
const allQuestions = [
    {
        lecture: "10",
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
        lecture: "10",
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
        lecture: "16",
        question: "What is melanin's function in human skin?",
        choices: [
            "Promotes vitamin C production",
            "Breaks down folate",
            "Protects against UV damage",
            "Helps produce hair"
        ],
        answer: 2
    },
    {
        lecture: "17",
        question: "What did Richard Lewontin's research show?",
        choices: [
            "Humans and chimps share 90% DNA",
            "Most genetic variation is between races",
            "Most genetic variation is within local populations",
            "Races are biologically distinct species"
        ],
        answer: 2
    },
    {
        lecture: "17",
        question: "In which human population is heterozygosity the highest?",
        choices: [
            "Europeans",
            "Africans",
            "Asians",
            "Native Americans"
        ],
        answer: 1
    },
    {
        lecture: "17",
        question: "What does polygenism propose?",
        choices: [
            "All humans evolved from one population",
            "Different races evolved independently",
            "Humans evolved in Asia",
            "Skin color has no genetic basis"
        ],
        answer: 1
    }
];

let filteredQuestions = allQuestions;
let currentQuestion = 0;
let score = 0;

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
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach(btn => btn.disabled = true);
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
    const selectedLecture = document.getElementById("lecture-select").value;
    if (selectedLecture === "all") {
        filteredQuestions = allQuestions;
    } else {
        filteredQuestions = allQuestions.filter(q => q.lecture === selectedLecture);
    }
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    loadQuestion();
}

window.onload = loadQuestion;
