const questions = [
    {
        "question": "Testfrage diodqw dqwodwdoo",
        "possibleAnswers": [
            "1028",
            "2002",
            "1928",
            "1988"
        ],
        "correctAnswer": "2002",
        "answerType": "mc",
        "points": 10,
    },
    {
        "question": "Testfrage Numero2 dqwodwdoo",
        "possibleAnswers": [
            "2",
            "2002",
            "19228",
            "Hallo du"
        ],
        "correctAnswer": "2002",
        "answerType": "mc",
        "points": 10,
    },
]
var totalQuestions;
var currentQuestionIndex;
var points = 0;
var rightAnswerCount = 0;

export function startQuiz() {
    const quizArea = document.querySelector("#quizArea");
    const headers = document.querySelector("#mainCenteredHeader");
    const counterEl = document.querySelector("#timeCounter");
    const resultArea = document.querySelector("#resultArea");

    totalQuestions = questions.length;
    quizArea.style.display = "block";
    headers.style.display = "none";
    resultArea.style.display = "none";

    document.querySelector(".mc").style.display = "block"
    startCounter();
    runQuiz();
}
const startCounter = () => {
    const counterEl = document.querySelector("#timeCounter");
    let timePassed = 0;

    setInterval(() => {
        timePassed++;
        counterEl.textContent = timePassed;
    }, 1000);

}
function runQuiz() {
    const questionTitleEl = document.querySelector('#crnt-question');
    const answerElements = document.querySelector(".mc-section");
    
    const quizLoop = () => {
        questionTitleEl.textContent = questions[currentQuestionIndex].question;
        
        for(let index in questions[currentQuestionIndex].possibleAnswers){
            answerElements.children[index].textContent = questions[currentQuestionIndex].possibleAnswers[index];
        }
        console.log(currentQuestionIndex);
        document.querySelectorAll(".possible-answer").forEach( el => {
            el.addEventListener("click", () => {
                if(currentQuestionIndex != totalQuestions){
                    handleAnswer(el.textContent)
                    currentQuestionIndex++;
                    quizLoop();
                }else {
                    endQuiz();
                }
            })
        })
    }
    currentQuestionIndex = 0

    quizLoop();
}
function endQuiz(){
    const quizArea = document.querySelector("#quizArea");
    const headers = document.querySelector("#mainCenteredHeader");
    const counterEl = document.querySelector("#timeCounter");
    const resultArea = document.querySelector("#resultArea");

    quizArea.style.display = "none";
    resultArea.style.display = "block";
    console.log(points)

    resultArea.querySelector("h2").innerHTML = `Du hast ${rightAnswerCount} von ${totalQuestions} Fragen richtig beantwortet!`
}
function handleAnswer(answer){
    if(answer == questions[currentQuestionIndex].correctAnswer){
        alert("Richtig!")
        points += questions[currentQuestionIndex].points;
        rightAnswerCount++;
    }else {
        alert("Falsch!")
    }
}