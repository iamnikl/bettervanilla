<svelte:head>
    <title>Sources</title>
    <meta name="description" content="Modpack sources-list page" />
</svelte:head>
<!-- <head>
    <link rel="stylesheet" href="../../../static/css/scss/main.css">
    <link rel="stylesheet" href="../../../static/css/global.css">
    
    <link rel="stylesheet" href="../../../static/css/theme-green.css">
    <link rel="stylesheet" href="../../../static/css/pico/pico.css">
</head> -->

<br/>
<br/>
<br/>

<center>
    <hgroup class="slideInAnimation">
        <h1>{headerContent}</h1>
        <h2>{sencondlyHeaderContent}</h2>
    </hgroup>
    
    <table role="grid" class="referenceTable">
        <thead>
            <th>Description</th>
            <th>Reference</th>
        </thead>
        <tbody>
            <!-- Development -->
            <tr>
                <td colspan="2"><span data-undercategory="All">Development</span></td>
            </tr>
            <tr>
                <td>Pico CSS</td>
                <td>
                    <a href="https://picocss.com/">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>SASS / SCSS</td>
                <td>
                    <a href="https://sass-lang.com/">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>SvelteKit</td>
                <td>
                    <a href="https://kit.svelte.dev/">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>NodeJS</td>
                <td>
                    <a href="https://nodejs.org/">&nbsp;</a>
                </td>
            </tr>
            <!-- Images -->
            <tr>
                <td colspan="2"><span data-undercategory="Home">Images</span></td>
            </tr>
            <tr>
                <td>Sodium 0.4</td>
                <td>
                    <a href="https://modrinth.com/mod/sodium">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>BetterCommandBlockUi</td>
                <td>
                    <a href="https://modrinth.com/mod/bettercommandblockui">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>First Person Model</td>
                <td>
                    <a href="https://modrinth.com/mod/first-person-model">&nbsp;</a>
                </td>
            </tr>
            <!-- ... -->
            
        </tbody>
    </table>
</center>

<script lang="js">
    const headerContent = "Externe Quellen";
    const sencondlyHeaderContent = "Hier befinden sich die Links zu allen externen Quellen ";
    
</script>
