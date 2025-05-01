document.addEventListener('DOMContentLoaded', function() {
    // Sample questions (replace with your full list)
    const allQuestions = [
        {
            lecture: "10",
            type: "mcq",
            question: "What is significant about the Cambrian Explosion?",
            choices: ["Dinosaur extinction", "Rise of mammals", "Appearance of modern animal phyla", "Origin of plants"],
            answer: 2,
            explanation: "The Cambrian Explosion marks the sudden appearance of most major animal groups."
        },
        {
            lecture: "10",
            type: "mcq",
            question: "When did dinosaurs first appear?",
            choices: ["Cambrian", "Triassic", "Jurassic", "Cretaceous"],
            answer: 1,
            explanation: "Dinosaurs appeared in the Triassic (~230 mya)."
        }
        // Add ALL your questions here
    ];

    // Quiz state
    let filteredQuestions = [];
    let currentQuestion = 0;
    let score = 0;

    // DOM elements
    const quizBox = document.getElementById('quiz-box');
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const feedbackEl = document.getElementById('feedback');
    const scoreEl = document.getElementById('score');
    const totalEl = document.getElementById('total');
    const nextBtn = document.getElementById('next-btn');
    const lectureSelect = document.getElementById('lecture-select');

    // Initialize quiz
    function initQuiz() {
        lectureSelect.addEventListener('change', filterQuestions);
        nextBtn.addEventListener('click', nextQuestion);
        filterQuestions(); // Load initial questions
    }

    // Filter questions by lecture
    function filterQuestions() {
        const selectedLecture = lectureSelect.value;
        filteredQuestions = selectedLecture === "all" 
            ? [...allQuestions] 
            : allQuestions.filter(q => q.lecture === selectedLecture);
        
        currentQuestion = 0;
        score = 0;
        updateScore();
        loadQuestion();
    }

    // Load current question
    function loadQuestion() {
        if (filteredQuestions.length === 0) {
            quizBox.innerHTML = `<p class="error">No questions found for this selection.</p>`;
            return;
        }

        const q = filteredQuestions[currentQuestion];
        questionEl.textContent = q.question;
        choicesEl.innerHTML = '';
        feedbackEl.innerHTML = '';
        feedbackEl.className = 'feedback-box';
        nextBtn.disabled = true;

        // Load choices based on question type
        if (q.type === 'mcq') {
            q.choices.forEach((choice, index) => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = choice;
                btn.onclick = () => checkAnswer(index);
                choicesEl.appendChild(btn);
            });
        }
        // Add handling for other question types here...

        totalEl.textContent = filteredQuestions.length;
    }

    // Check answer
    function checkAnswer(selectedIndex) {
        const q = filteredQuestions[currentQuestion];
        const isCorrect = selectedIndex === q.answer;

        // Disable all buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
            if (parseInt(btn.textContent) === q.answer) {
                btn.classList.add('correct');
            }
        });

        // Show feedback
        feedbackEl.textContent = isCorrect 
            ? `✅ Correct! ${q.explanation}` 
            : `❌ Incorrect. ${q.explanation}`;
        feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');

        // Update score
        if (isCorrect) score++;
        updateScore();
        nextBtn.disabled = false;
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < filteredQuestions.length) {
            loadQuestion();
        } else {
            quizBox.innerHTML = `
                <h2>Quiz Complete!</h2>
                <p>Your score: ${score}/${filteredQuestions.length}</p>
                <button onclick="location.reload()" class="btn-primary">
                    <i class="fas fa-redo"></i> Restart Quiz
                </button>
            `;
        }
    }

    function updateScore() {
        scoreEl.textContent = score;
    }

    // Start the quiz
    initQuiz();
});
