const allQuestions = [
    // ========== LECTURE 10 ==========
    {
        lecture: "10",
        type: "mcq",
        question: "What is significant about the Cambrian Explosion?",
        choices: ["Dinosaur extinction", "Rise of mammals", "Appearance of modern animal phyla", "Origin of plants"],
        answer: 2,
        explanation: "The Cambrian Explosion marks the sudden appearance of most major animal groups in the fossil record."
    },
    {
        lecture: "10",
        type: "mcq",
        question: "When did dinosaurs first appear on Earth?",
        choices: ["Cambrian Period (~540 mya)", "Triassic Period (~230 mya)", "Jurassic Period (~200 mya)", "Cretaceous Period (~145 mya)"],
        answer: 1,
        explanation: "Dinosaurs first appeared during the Triassic Period, about 230 million years ago."
    },
    // Add remaining Lecture 10 questions...

    // ========== LECTURE 11 ==========
    {
        lecture: "11",
        type: "multi-select",
        question: "Which characterize primates? (Select all)",
        choices: ["Opposable thumbs", "Postorbital bar", "Rhinarium (wet nose)", "Color vision"],
        answers: [0, 1, 3],
        explanation: "Primates have opposable thumbs, postorbital bars, and color vision (except nocturnal species)."
    },
    // Add remaining Lecture 11 questions...

    // Continue adding questions for Lectures 12-17...
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
    
    if (q.type === "mcq") {
        q.choices.forEach((choice, index) => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice;
            btn.onclick = () => checkAnswer(index, btn);
            choicesDiv.appendChild(btn);
        });
    }
    
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("total").textContent = filteredQuestions.length;
    updateProgress();
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
        feedback.textContent = `✅ Correct! ${q.explanation}`;
        feedback.style.color = "green";
    } else {
        buttonEl.classList.add("incorrect");
        feedback.innerHTML = `<span style='color:red'>❌ Incorrect.</span> ${q.explanation}`;
    }

    feedback.classList.add("show");
    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").style.display = "inline-flex";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < filteredQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your score: ${score}/${filteredQuestions.length}</p>
            <button onclick="resetQuiz()" class="btn-primary">
                <i class="fas fa-redo"></i> Try Again
            </button>
        `;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    filterQuestions();
}

function filterQuestions() {
    const selected = document.getElementById("lecture-select").value;
    filteredQuestions = selected === "all" 
        ? shuffle([...allQuestions]) 
        : shuffle(allQuestions.filter(q => q.lecture === selected));
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
    document.querySelector(".progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-text").textContent = 
        `${currentQuestion + 1}/${filteredQuestions.length}`;
}

window.onload = () => {
    document.getElementById("lecture-select").value = "all";
    filteredQuestions = shuffle([...allQuestions]);
    loadQuestion();
};
