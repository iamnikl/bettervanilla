//Niklas - 22.2.23 | IF Diff Projektarbeit: BETTERVANILLA MODPACK
const questions = [
    {
        "question": "Was ist eine Mod in Videospielen?",
        "possibleAnswers": [
            "Ein neues Spiel",
            "Eine Modifikation des Spiels",
            "Ein Entwickler-Tool",
            "Eine Spielkonsole"
        ],
        "correctAnswer": "Eine Modifikation des Spiels",
        "answerType": "mc",
        "points": 10,
    },
    {
        "question": "Was ist der Zweck einer Mod in Videospielen?",
        "possibleAnswers": [
            "Um das Spiel einfacher zu machen",
            "Um das Spiel schwieriger zu machen",
            "Um neue Funktionen hinzuzufügen",
            "Um das Spiel schneller zu machen"
        ],
        "correctAnswer": "Um neue Funktionen hinzuzufügen",
        "answerType": "mc",
        "points": 10,
    },
    {
        "question": `Was ist eine Texture Mod`,
        "possibleAnswers": [
            "Eine Mod, die die Farben des Spiels ändert",
            "Eine Mod, die neue Texturen hinzufügt",
            "Eine Mod, die die Kameraeinstellungen ändert",
            "Eine Mod, die das Spiel schneller macht"
        ],
        "correctAnswer": "Eine Mod, die neue Texturen hinzufügt",
        "answerType": "mc",
        "points": 10,
    },
    {
        "question": `Was ist ein Script Mod?`,
        "possibleAnswers": [
            "Eine Mod, die das Spiel verändert, indem sie neue Skripte hinzufügt",
            "Eine Mod, die das Spiel einfacher macht, indem sie die Gegner schwächt",
            "Eine Mod, die das Spiel schneller macht, indem sie unnötige Funktionen entfernt",
            "Eine Mod, die das Spiel schwieriger macht, indem sie neue Skripte hinzufügt"
        ],
        "correctAnswer": "Eine Mod, die das Spiel verändert, indem sie neue Skripte hinzufügt",
        "answerType": "mc",
        "points": 10,
    },
    {
        "question": `Was ist ein "Total Conversion Mod"?`,
        "possibleAnswers": [
            "Eine Mod, die das gesamte Spiel komplett verändert",
            "Eine Mod, die nur die Grafik des Spiels verbessert",
            "Eine Mod, die neue Waffen hinzufügt",
            "Eine Mod, die neue Level hinzufügt"
        ],
        "correctAnswer": "Eine Mod, die das gesamte Spiel komplett verändert",
        "answerType": "mc",
        "points": 10,
    },
]
var totalQuestions = questions.length;
var currentQuestionIndex;
var points = 0;
var rightAnswerCount = 0;

export function startQuiz() {
    const quizArea = document.querySelector("#quizArea");
    const headers = document.querySelector("#mainCenteredHeader");
    const counterEl = document.querySelector("#questionCounter");
    const resultArea = document.querySelector("#resultArea");

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
        counterEl.innerHTML = `${currentQuestionIndex + 1}/${totalQuestions}` // +1 , um den Index Wert (startet bei 0 statt bei 1) umzuwandeln
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

    quizArea.style.display = "none";
    resultArea.style.display = "block";
    document.querySelector("#question-result-area").style.display = "none";


    resultArea.querySelector("h2").innerHTML = `Du hast ${rightAnswerCount} von ${totalQuestions} Fragen richtig beantwortet!`
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
        answerElementMain.classList.replace("falseAnswer-action", "rightAnswer-action") || answerElementMain.classList.add("rightAnswer-action")
    }else {
        //FALSCHE ANTWORT
        answerTextElement.textContent = "Falsch!";
        answerElementMain.classList.replace("rightAnswer-action", "falseAnswer-action") || answerElementMain.classList.add("falseAnswer-action")
    }

    if(currentQuestionIndex == (totalQuestions - 1)){
        document.querySelector("#question-result-btn").addEventListener("click", () => {
            //document.querySelector("#question-result-area").style.display = "none";
            endQuiz();
        })
    }
}
const setElementToDisabled = (el) => {
    document.querySelector(el).classList.add("no-user-interaction");
    console.log("disabled!")
}
const setElementToEnabled = (el) => {
    document.querySelector(el).classList.remove("no-user-interaction")
    console.log("enabled!")
}