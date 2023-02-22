<svelte:head>
    <title>Mod Quiz | Bettervanilla</title>
</svelte:head>

<link rel="stylesheet" href="../css/scss/mod-infos/modinfos.css">
<link rel="stylesheet" href="../css/scss/quiz/quiz.css">

<script>
    import { startQuiz } from "./quiz";

    import MultipleChoise from "./components/multiple-choise.svelte";
    import QuestionAnswer from "./components/question-answer.svelte";
</script>

<center id="mainCenteredHeader">
    <hgroup>
        <h1>Teste dein Wissen</h1>
        <h2>Wie gut kennst du dich jetzt aus?</h2>
    </hgroup>
    <button on:click={startQuiz}>Starten!</button>
</center>

<div id="quizArea">
    <h3 id="questionCounter">0</h3>
    <h1 id="crnt-question"></h1>
    <div class="quiz-components mc"><MultipleChoise /></div>
    <div class="quiz-components userinput"></div>
</div>
<center>
    <div id="resultArea">
    <h1>Dein Ergebnis</h1>
    <h2 style="font-weight: 400;"></h2>
    <button onclick="window.location.reload()">Nochmal Spielen!</button>
</div>
</center>
<div id="question-result-area">
    <QuestionAnswer />
</div>
