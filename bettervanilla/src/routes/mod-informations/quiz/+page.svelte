<link rel="stylesheet" href="../css/scss/mod-infos/modinfos.css">
<script>
    import { startQuiz } from "./quiz";
    import MultipleChoise from "./components/multiple-choise.svelte";
    import UserInput from "./components/user-input.svelte";
    import { onMount } from "svelte";

    // onMount(() => {
    //     startQuiz()
    // })
</script>
<style>
    #quizArea,
    #resultArea {
        margin-top: 5rem;
        display: none;
    }
    #timeCounter,
    #crnt-question {
        text-align: center;
    }
    .quiz-components {
        display: none;
    }
</style>
<center id="mainCenteredHeader">
    <hgroup>
        <h1>Teste dein Wissen</h1>
        <h2>Wie gut kennst du dich jetzt aus?</h2>
    </hgroup>
    <button on:click={startQuiz}>Starten!</button>
</center>
<div id="quizArea">
    <h3 id="timeCounter">0</h3>
    <h1 id="crnt-question"></h1>
    <div class="quiz-components mc"><MultipleChoise /></div>
    <div class="quiz-components userinput"><UserInput /></div>
</div>
<center>
    <div id="resultArea">
    <h1>Dein Ergebnis</h1>
    <h2 style="font-weight: 400;"></h2>
    <button onclick="window.location.reload()">Nochmal Spielen!</button>
</div>
</center>
