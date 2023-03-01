<svelte:head>
    <title>Sources</title>
    <meta name="description" content="Modpack sources-list page" />
</svelte:head>

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
            <th>Beschreibung</th>
            <th>Link</th>
        </thead>
        <tbody>
            <!-- Development -->
            <tr>
                <td colspan="2"><span data-undercategory="All">Development</span></td>
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
            <!-- IMAGES - MODS -->
            <tr>
                <td colspan="2"><span data-undercategory="Mods">Images</span></td>
            </tr>
            <tr>
                <td>Before / After Mods Bild</td>
                <td>
                    <a href="https://www.reddit.com/r/PewdiepieSubmissions/comments/ceco3m/pls_tell_felix_to_use_thisshaders_mod/">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>"Better Minecraft" Bild</td>
                <td>
                    <a href="https://www.pcgamesn.com/minecraft/twenty-best-minecraft-mods">&nbsp;</a>
                </td>
            </tr>
            <!-- IMAGES - WHY BETTERVANILLA -->
            <tr>
                <td colspan="2"><span data-undercategory="Warum BetterVanilla">Images</span></td>
            </tr>
            <tr>
                <td>lambdynamiclights Skelett Bild</td>
                <td>
                    <a href="https://modrinth.com/mod/lambdynamiclights">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>3DSkinLayers Avatare Foto</td>
                <td>
                    <a href="https://modrinth.com/mod/3dskinlayers">&nbsp;</a>
                </td>
            </tr>
            <tr>
                <td>First Person Model</td>
                <td>
                    <a href="https://modrinth.com/mod/first-person-model">&nbsp;</a>
                </td>
            </tr>
            <!-- ... -->
            <tr>
                <td colspan="2"><span data-undercategory="All">Texte</span></td>
            </tr>
            <tr>
                <td>ChatGPT</td>
                <td>
                    <a href="https://chat.openai.com/">&nbsp;</a>
                </td>
            </tr>
        </tbody>
    </table>
</center>

<script lang="js">
    const headerContent = "Externe Quellen";
    const sencondlyHeaderContent = "Hier befinden sich die Links zu allen externen Quellen ";
</script>
