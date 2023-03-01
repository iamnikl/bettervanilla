<svelte:head>
    <title>About</title>
    <meta name="description" content="About this website" />
</svelte:head>

<style>
    details ul {
        cursor: default;
    }
</style>

<center>
    <hgroup class="marginToHeader">
        <h1>About</h1>
        <h2>Informationen über unsere Website</h2>
    </hgroup>
    <p>Unsere Gruppe beschäftigt sich mit dem Minecraft Modpack <code>BetterVanilla</code></p>
    <h4>Diese Website wurde erstellt von</h4>
    <section id="developersContainer">
        <a href="#a">
            <article>
                <h2>HACCKKER</h2>
                <h3>&nbsp;</h3>
            </article>
        </a>
        <a href="#leonie">
            <article>
                <h2>Leonie</h2>
                <h3>Ø.</h3>
            </article>
        </a>
        <a href="#niklas">
            <article>
                <h2>Niklas</h2>
                <h3>P.</h3>
            </article>
        </a>
    </section>
    <!-- <small>Go back to the <a href="/">homepage</a></small> -->
</center>
<div id="personWorkInformations">
    <p id="a" style="position: relative; top: -3.7rem; visibility: hidden;"></p>
    <article>
        <h3><a href="https://github.com/HACCKKER">HACCKKER</a></h3>
        <p>Klasse VK - Informatik Diff 9</p>

        <details open>
            <summary>
                <h4 class="header-gray-light">Seine Arbeit</h4>
            </summary>
            <ul>
                <li>Header & Footer</li>
                <li>Project structure</li>
                <li>Deployment</li>
                <li>Modpack</li>
                <li>Docs</li>
                <li>Downloads</li>
                <li>Main page</li>
            </ul>
        </details>
    </article>
    <p id="leonie" style="position: relative; top: -3.7rem; visibility: hidden;"></p>

    <article>
        <h3>Leonie</h3>
        <p>Klasse 9B - Informatik Diff 9</p>
        <details open>
            <summary>
                <h4 class="header-gray-light">Ihre Arbeit</h4>
            </summary>
            <ul>
                <li>Modpack Informationsseite</li>
                <li>Mod Informationsseite</li>
                <li>Impressum</li>
                <li>Style</li>
            </ul>
        </details>
    </article>
    <p id="niklas" style="position: relative; top: -3.7rem; visibility: hidden;"></p>
    <article>
        <h3>Niklas</h3>
        <p>Klasse 9C - Informatik Diff 9</p>
        <details open>
            <summary>
                <h4 class="header-gray-light">Seine Arbeit</h4>
            </summary>
            
            <ul>
                <li>About-Seite</li>
                <li>Impressum</li>
                <li>Quellen-Seite</li>
                <li>"Warum Bettervanilla"-Seite</li>
                <li>Mod / Modpack Seite (Erweitert)</li>
                <li>Style (SCSS)</li>
                <li><strong>Quiz</strong></li>
                <br>
                <a href="https://github.com/iamnikl/bettervanilla" role="button" target="_blank" rel="noreferrer">Quellcode</a>
            </ul>
        </details>
    </article>
</div>