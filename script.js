
const allQuestions = [
    {
        lecture: "10",
        question: "What is significant about the Cambrian Explosion?",
        choices: ["Dinosaur extinction", "Rise of mammals", "Appearance of modern animal phyla", "Origin of plants"],
        answer: 2,
        explanation: "The Cambrian Explosion marks the sudden appearance of most major animal groups in the fossil record."
    },
    {
        lecture: "10",
        question: "What is an example of exaptation?",
        choices: ["Feathers used originally for insulation", "Lactase persistence", "Tool use", "Language development"],
        answer: 0,
        explanation: "Exaptation is when a trait evolves for one purpose and is later co-opted for another, like feathers originally for warmth."
    },
    {
        lecture: "11",
        question: "What did Purgatorius fossils tell us?",
        choices: ["They were aquatic", "They were carnivores", "They were early arboreal primates", "They had tails like lemurs"],
        answer: 2,
        explanation: "Purgatorius fossils are some of the earliest known primates and suggest arboreal adaptations."
    },
    {
        lecture: "11",
        question: "What do most apes eat?",
        choices: ["Meat", "Leaves", "Fruits", "Roots"],
        answer: 2,
        explanation: "Most apes are frugivorous and primarily eat fruit."
    },
    {
        lecture: "12",
        question: "Why is it incorrect to say humans evolved from chimps?",
        choices: ["Chimps are older", "We share a common ancestor", "Chimps are not primates", "Chimps are not bipedal"],
        answer: 1,
        explanation: "Humans and chimps share a common ancestor; neither evolved from the other."
    },
    {
        lecture: "12",
        question: "What species is 'Lucy'?",
        choices: ["Homo erectus", "Australopithecus afarensis", "Ardipithecus", "Sahelanthropus"],
        answer: 1,
        explanation: "'Lucy' is one of the most famous Australopithecus afarensis fossils, showing clear evidence of bipedalism."
    },
    {
        lecture: "13",
        question: "What does FOXP2 influence?",
        choices: ["Vision", "Brain size", "Language ability", "Vitamin D metabolism"],
        answer: 2,
        explanation: "FOXP2 is a gene associated with speech and language development."
    },
    {
        lecture: "14",
        question: "What does lactase persistence allow?",
        choices: ["Digestion of meat", "Continued lactose digestion in adulthood", "Skin tanning", "Resistance to malaria"],
        answer: 1,
        explanation: "Lactase persistence allows adults to digest milk, especially in populations with dairy agriculture."
    },
    {
        lecture: "15",
        question: "What are helminths?",
        choices: ["Fungi", "Bacteria", "Worm-like parasites", "Viruses"],
        answer: 2,
        explanation: "Helminths are parasitic worms that co-evolved with humans and can influence immune function."
    },
    {
        lecture: "16",
        question: "Why is skin lighter at higher latitudes?",
        choices: ["Cooler climate", "Protection from wind", "To synthesize more Vitamin D", "To reflect heat"],
        answer: 2,
        explanation: "Lighter skin allows more UV absorption for vitamin D production in low-UV environments."
    },
    {
        lecture: "17",
        question: "Who showed most genetic variation is within populations?",
        choices: ["Mary-Claire King", "Richard Lewontin", "Rebecca Cann", "Louis Agassiz"],
        answer: 1,
        explanation: "Lewontin showed that most human genetic variation exists within populations, not between them."
    },
    {
        lecture: "17",
        question: "Where is the most human genetic variation found?",
        choices: ["Europe", "Asia", "Africa", "South America"],
        answer: 2,
        explanation: "Africa contains the most human genetic diversity due to being the origin of modern humans."
    }
];
 = [];
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
    filteredQuestions = shuffle([...allQuestions]);
    loadQuestion();
};


window.onload = () => {
    document.getElementById("lecture-select").value = "all";
    filteredQuestions = shuffle([...allQuestions]);
    loadQuestion();
};
