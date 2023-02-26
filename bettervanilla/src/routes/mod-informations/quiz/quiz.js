//Niklas - 22.2.23 | IF Diff Projektarbeit: BETTERVANILLA MODPACK

// importiert "const questions" aus der externen JS Datei

import { questions } from "./data/quiz-questions.js";

var totalQuestions = questions.length;
var currentQuestionIndex;
var points = 0;
var rightAnswerCount = 0;

export function startQuiz() {
    const quizArea = document.querySelector("#quizArea")
    const headers = document.querySelector("#mainCenteredHeader")
    const counterEl = document.querySelector("#questionCounter")
    const resultArea = document.querySelector("#resultArea")
    //spielvariablen zurücksetzten:

    totalQuestions = questions.length;
    currentQuestionIndex;
    points = 0;
    rightAnswerCount = 0;

    quizArea.style.display = "block";
    headers.style.display = "none";
    resultArea.style.display = "none";

    document.querySelector(".mc").style.display = "block";

    displayQuestionCount();
    runQuiz();
}
const displayQuestionCount = () => {
    const counterEl = document.querySelector("#questionCounter");
    counterEl.innerHTML = `1/${totalQuestions}` // bei frage 1 -> direkt Wert setzen, da sonst erst nach 1s angezeigt wird!

    // automatische updates für die anzeige
    setInterval(() => {
        // bug entfernt | NP
        if(currentQuestionIndex + 1 <= totalQuestions) {
            counterEl.innerHTML = `${currentQuestionIndex + 1}/${totalQuestions}` // +1 , um den Index Wert (startet bei 0 statt bei 1) umzuwandeln
        }
    }, 1000);

}
function runQuiz() {
    const questionTitleEl = document.querySelector('#crnt-question');
    const answerElements = document.querySelector(".mc-section");
    currentQuestionIndex = 0;

    document.querySelectorAll(".possible-answer").forEach( el => {
        el.addEventListener("click", () => {
            if(currentQuestionIndex != totalQuestions){
                handleAnswer(el.textContent);
                document.querySelector("#question-result-btn").addEventListener("click", () => {
                    quizLoop();
                    setElementToEnabled(".overlay-answers");
                });
                currentQuestionIndex++;
            }
        })
    })

    function quizLoop() {
        questionTitleEl.textContent = questions[currentQuestionIndex].question;
        document.querySelector("#quizArea").style.display = "block";
        document.querySelector("#question-result-area").style.display = "none";
        
        for(let index in questions[currentQuestionIndex].possibleAnswers){
            answerElements.children[index].textContent = questions[currentQuestionIndex].possibleAnswers[index];
        }
    }

    quizLoop();
}
function endQuiz(){
    const quizArea = document.querySelector("#quizArea");
    const headers = document.querySelector("#mainCenteredHeader");
    const counterEl = document.querySelector("#questionCounter");
    const resultArea = document.querySelector("#resultArea");
    const resultTable = document.querySelector("#final-result-table");

    quizArea.style.display = "none";
    resultArea.style.display = "block";
    document.querySelector("#question-result-area").style.display = "none";
    resultArea.querySelector("h2").innerHTML = `Du hast ${rightAnswerCount} von ${totalQuestions} Fragen richtig beantwortet!`;

    questions.forEach((qu) => {
        resultTable.innerHTML += `
        <tr>
            <td>${qu.question}</td>
            <td data-answerisright="${qu.answerIsRight}" title="Richtige Antwort: ${qu.correctAnswer}">${qu["user-answer"]}<td>
        </tr>
        `
    })
}
function handleAnswer(answer){
    const answerTextElement = document.querySelector("#q-a-display-msg");
    const answerElementMain = document.querySelector("#answer-msg-main");

    setElementToDisabled(".overlay-answers");
    document.querySelector("#question-result-area").style.display = "block";

    if(answer == questions[currentQuestionIndex].correctAnswer){
        // RICHTIGE ANTWORT:
        points += questions[currentQuestionIndex].points;
        rightAnswerCount++;

        answerTextElement.textContent = "Richtig!";
        answerElementMain.classList.replace("falseAnswer-action", "rightAnswer-action") || answerElementMain.classList.add("rightAnswer-action");

        questions[currentQuestionIndex].answerIsRight = true;
    }else {
        //FALSCHE ANTWORT
        answerTextElement.textContent = "Falsch!";
        answerElementMain.classList.replace("rightAnswer-action", "falseAnswer-action") || answerElementMain.classList.add("falseAnswer-action");
    }

    if(currentQuestionIndex == (totalQuestions - 1)){
        document.querySelector("#question-result-btn").addEventListener("click", () => {
            //document.querySelector("#question-result-area").style.display = "none";
            endQuiz();
        })
    }

    // egal ob richtig oder falsch!
    questions[currentQuestionIndex]["user-answer"] = answer;
}
const setElementToDisabled = (el) => {
    document.querySelector(el).classList.add("no-user-interaction");
    console.log("disabled!")
}
const setElementToEnabled = (el) => {
    document.querySelector(el).classList.remove("no-user-interaction")
    console.log("enabled!")
}