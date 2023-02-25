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
        "answerIsRight": false,
        "user-answer": "",
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
        "answerIsRight": false,
        "user-answer": "",
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
        "answerIsRight": false,
        "user-answer": "",
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
        "answerIsRight": false,
        "user-answer": "",
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
        "answerIsRight": false,
        "user-answer": "",
    },
    {
        "question": `Wo können Mods in der Regel gefunden werden?`,
        "possibleAnswers": [
            "In offiziellen Online-Shops für Videospiele",
            "In den offiziellen Foren des Spiels",
            "Auf Social-Media-Plattformen wie Facebook oder Instagram",
            "In Modellbau-Läden"
        ],
        "correctAnswer": "In den offiziellen Foren des Spiels",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
    },
    {
        "question": "Welche Probleme können bei der Verwendung von Mods auftreten?",
        "possibleAnswers": [
            "Keine, sie sind immer völlig stabil und ohne Probleme",
            "Sie können das Spiel schneller machen, was zu Überhitzungsproblemen führen kann",
            "Sie können das Spiel instabil machen oder zu Fehlern führen",
            "Sie können das Spiel einfrieren lassen und unspielbar machen"
        ],
        "correctAnswer": "Sie können das Spiel instabil machen oder zu Fehlern führen",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
    },
    {
        "question": "Was bedeutet es, wenn eine Mod Open-Source ist?",
        "possibleAnswers": [
        "Dass sie illegal heruntergeladen werden kann",
        "Dass sie nur von bestimmten Benutzern verwendet werden kann",
        "Dass sie ausschließlich kostenpflichtig ist",
        "Eine Art von Software, deren Quellcode für jeden zugänglich und veränderbar ist"
        ],
        "correctAnswer": "Eine Art von Software, deren Quellcode für jeden zugänglich und veränderbar ist",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
    },
    // modpack questions:
    {
        "question": "Was sind Modpacks?",
        "possibleAnswers": [
        "Eine Sammlung von Mods, die von einem Entwickler oder einer Gruppe von Entwicklern zusammengestellt wurden.",
        "Ein einzelner Mod, der das Spielerlebnis verbessert.",
        "Ein spezieller Server, auf dem Spieler zusammen spielen können.",
        "Eine besondere Version eines Videospiels."
        ],
        "correctAnswer": "Eine Sammlung von Mods, die von einem Entwickler oder einer Gruppe von Entwicklern zusammengestellt wurden.",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
    },
    {
        "question": "Was können Modpacks in Minecraft hinzufügen?",
        "possibleAnswers": [
        "Neue Gegenstände, Blöcke, Tiere, Feinde, Biome und Spielmechaniken.",
        "Eine bessere Grafik.",
        "Neue Levels.",
        "Mehr Speicherplatz auf dem Computer."
        ],
        "correctAnswer": "Neue Gegenstände, Blöcke, Tiere, Feinde, Biome und Spielmechaniken.",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
    },
    {
        "question": "Was für verschiedene Ausführungen von Modpacks gibt es?",
        "possibleAnswers": [
        "Nur kleine und einfache Packs.",
        "Nur riesige und komplexe Packs mit Hunderten von Mods.",
        "Eine große Vielfalt von kleinen und einfachen bis hin zu riesigen und komplexen Packs mit Hunderten von Mods.",
        "Nur Packs, die speziell für bestimmte Spielstile oder Ziele ausgelegt sind."
        ],
        "correctAnswer": "Eine große Vielfalt von kleinen und einfachen bis hin zu riesigen und komplexen Packs mit Hunderten von Mods.",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
    },
    {
        "question": "Was sind potenzielle Nachteile von Modpacks?",
        "possibleAnswers": [
        "Sie können das Spiel instabil machen oder zu Abstürzen führen.",
        "Sie benötigen eine leistungsstarke Hardware, um reibungslos zu funktionieren.",
        "Sie haben keine starke Community von Entwicklern und Nutzern.",
        "Sie sind immer einfach zu installieren."
        ],
        "correctAnswer": "Sie können das Spiel instabil machen oder zu Abstürzen führen.",
        "answerType": "mc",
        "points": 10,
        "answerIsRight": false,
        "user-answer": "",
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