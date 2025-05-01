// [Previous question array with ALL your questions implemented]
// [Previous helper functions like shuffle()]

// Enhanced question handling
function loadQuestion() {
    const q = filteredQuestions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    
    // Progress update
    updateProgress();
    
    switch(q.type) {
        case "mcq":
            q.choices.forEach((choice, i) => {
                const btn = document.createElement("button");
                btn.className = "choice-btn";
                btn.textContent = choice;
                btn.onclick = () => checkAnswer(i, btn);
                choicesDiv.appendChild(btn);
            });
            break;
            
        case "multi-select":
            q.choices.forEach((choice, i) => {
                const container = document.createElement("div");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `choice-${i}`;
                checkbox.value = i;
                
                const label = document.createElement("label");
                label.htmlFor = `choice-${i}`;
                label.textContent = choice;
                
                container.appendChild(checkbox);
                container.appendChild(label);
                choicesDiv.appendChild(container);
            });
            break;
            
        case "truefalse":
            const trueBtn = document.createElement("button");
            trueBtn.className = "choice-btn";
            trueBtn.textContent = "True";
            trueBtn.onclick = () => checkAnswer(true, trueBtn);
            
            const falseBtn = document.createElement("button");
            falseBtn.className = "choice-btn";
            falseBtn.textContent = "False";
            falseBtn.onclick = () => checkAnswer(false, falseBtn);
            
            choicesDiv.appendChild(trueBtn);
            choicesDiv.appendChild(falseBtn);
            break;
            
        case "shortanswer":
            const textarea = document.createElement("textarea");
            textarea.placeholder = "Type your explanation here...";
            textarea.id = "short-answer-input";
            choicesDiv.appendChild(textarea);
            
            const hint = document.createElement("div");
            hint.className = "keyword-hint";
            hint.textContent = `Keywords to include: ${q.keywords.join(", ")}`;
            choicesDiv.appendChild(hint);
            break;
    }
    
    document.getElementById("feedback").className = "feedback-box";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("total").textContent = filteredQuestions.length;
}

// Enhanced answer checking with partial credit
function checkAnswer(selected, element) {
    const q = filteredQuestions[currentQuestion];
    const feedback = document.getElementById("feedback");
    let pointsEarned = 0;
    let maxPoints = 1;
    let isCorrect = false;
    let feedbackMessage = "";

    switch(q.type) {
        case "mcq":
            isCorrect = (selected === q.answer);
            pointsEarned = isCorrect ? 1 : 0;
            feedbackMessage = q.explanation;
            break;
            
        case "truefalse":
            isCorrect = (selected === q.answer);
            pointsEarned = isCorrect ? 1 : 0;
            feedbackMessage = q.explanation;
            break;
            
        case "multi-select":
            const selectedBoxes = Array.from(
                document.querySelectorAll('#choices input:checked')
            ).map(el => parseInt(el.value));
            
            const correctSelected = selectedBoxes.filter(val => q.answers.includes(val)).length;
            const incorrectSelected = selectedBoxes.filter(val => !q.answers.includes(val)).length;
            const missedCorrect = q.answers.filter(val => !selectedBoxes.includes(val)).length;
            
            pointsEarned = Math.max(0, correctSelected - incorrectSelected);
            maxPoints = q.answers.length;
            isCorrect = (pointsEarned === maxPoints);
            
            feedbackMessage = `${pointsEarned}/${maxPoints} points. ${q.explanation}`;
            if (incorrectSelected > 0) {
                feedbackMessage += ` You selected ${incorrectSelected} incorrect option(s).`;
            }
            if (missedCorrect > 0) {
                feedbackMessage += ` You missed ${missedCorrect} correct option(s).`;
            }
            break;
            
        case "shortanswer":
            const answerText = document.getElementById("short-answer-input").value.toLowerCase();
            const matchedKeywords = q.keywords.filter(keyword => 
                answerText.includes(keyword.toLowerCase())
            ).length;
            
            pointsEarned = matchedKeywords / q.keywords.length;
            maxPoints = 1;
            isCorrect = (pointsEarned >= 0.7); // 70% threshold for "correct"
            
            feedbackMessage = `${Math.round(pointsEarned * 100)}% match. ${q.explanation}`;
            if (pointsEarned < 1) {
                const missingKeywords = q.keywords.filter(keyword => 
                    !answerText.includes(keyword.toLowerCase())
                );
                feedbackMessage += ` Missing: ${missingKeywords.join(", ")}`;
            }
            break;
    }

    // Update score and display
    score += pointsEarned;
    document.getElementById("score").textContent = score.toFixed(1);
    
    // Show feedback
    feedback.innerHTML = feedbackMessage;
    feedback.classList.add(isCorrect ? "correct" : 
                         (pointsEarned > 0) ? "partial" : "incorrect");
    feedback.classList.add("show");
    
    // Disable interactions and show next button
    disableQuestionInteractions(q.type);
    document.getElementById("next-btn").style.display = "inline-flex";
}

// [Rest of your existing functions (filterQuestions, nextQuestion, etc.)]
