<script lang="js">
    import Saos from "saos";
</script>

<svelte:head>
    <title>BetterVanilla</title>
    <meta name="description" content="A light vanilla modpack for minecraft" />
</svelte:head>

<style>
    @keyframes -global-from-left {
        0% {
            transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
            opacity: 1;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }

    @keyframes -global-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>

<br/>
<br/>
<br/>

<center>
    <hgroup>
        <h1 style="font-size: 3rem">A light vanilla modpack<br/>for Minecraft</h1>
        <h2>this modpack <code>enchances</code> only client-side aspects of the game allowing you to play on unmodded servers</h2>
    </hgroup>
    <div>
        <a href="#optimization" role="button">More info</a>
        <a href="https://www.dropbox.com/s/lu9iex9xhpfk9gb/BetterVanilla-1.19.3.zip?dl=1" role="button" class="outline">Download latest</a>
    </div>
</center>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<Saos animation={'from-left 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <main class="container" id="optimization">
        <article class="grid">
            <div>
                <img src="/img/sodium.png" alt="sodium">
            </div>
            <div>
                <p style="line-height:2;">This modpack includes various optimization mods:<br/>
                    <a href="https://modrinth.com/mod/sodium" target="_blank" rel="noopener noreferrer">
                        <kbd>Sodium</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/sodium-extra" target="_blank" rel="noopener noreferrer">
                        <kbd>Sodium Extra</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/starlight" target="_blank" rel="noopener noreferrer">
                        <kbd>Starlight</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/cull-leaves" target="_blank" rel="noopener noreferrer">
                        <kbd>Cull Leaves</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/lithium" target="_blank" rel="noopener noreferrer">
                        <kbd>Lithium</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/smoothboot-fabric" target="_blank" rel="noopener noreferrer">
                        <kbd>Smooth Boot</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/ferrite-core" target="_blank" rel="noopener noreferrer">
                        <kbd>Ferrite Core</kbd>
                    </a> 
                    <a href="https://modrinth.com/mod/dynamic-fps" target="_blank" rel="noopener noreferrer">
                        <kbd>Dynamic FPS</kbd>
                    </a>
                </p>
            </div>
        </article>
    </main>
</Saos>

<br/>

<Saos animation={'from-left 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <main class="container" id="utility">
        <article class="grid">
            <div>
                <img src="/img/bettercmdblui.png" alt="bettercommandblockui">
            </div>
            <div>
                <p style="line-height:2;">There are some utility mods too:<br/>
                    <a href="https://modrinth.com/mod/bettercommandblockui" target="_blank" rel="noopener noreferrer">
                        <kbd>BetterCommandBlockUi</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/appleskin" target="_blank" rel="noopener noreferrer">
                        <kbd>Apple Skin</kbd>
                    </a>
                    <a href="https://github.com/cabaletta/baritone" target="_blank" rel="noopener noreferrer">
                        <kbd>Baritone</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/clickthrough" target="_blank" rel="noopener noreferrer">
                        <kbd>ClickThrough</kbd>
                    </a>
                    <a href="https://github.com/8bitFra/JustIRC" target="_blank" rel="noopener noreferrer">
                        <kbd>JustIRC</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/modmenu" target="_blank" rel="noopener noreferrer">
                        <kbd>Mod Menu</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/roughly-enough-items" target="_blank" rel="noopener noreferrer">
                        <kbd>Roughly Enough Items</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/no-chat-reports" target="_blank" rel="noopener noreferrer">
                        <kbd>No Chat Reports</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/ok-zoomer" target="_blank" rel="noopener noreferrer">
                        <kbd>Ok Zoomer</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/portals-gui" target="_blank" rel="noopener noreferrer">
                        <kbd>Portals Gui</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/notebook" target="_blank" rel="noopener noreferrer">
                        <kbd>Vanilla Notebook</kbd>
                    </a>
                </p>
            </div>
        </article>
    </main>
</Saos>

<br/>

<Saos animation={'from-left 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <main class="container" id="visual">
        <article class="grid">
            <div>
                <img src="/img/firstpersonmodel.jpg" alt="lambdynamiclights">
            </div>
            <div>
                <p style="line-height:2;">Visual and audio mods:<br/>
                    <a href="https://modrinth.com/mod/first-person-model" target="_blank" rel="noopener noreferrer">
                        <kbd>Firest-person Model</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/lambdynamiclights" target="_blank" rel="noopener noreferrer">
                        <kbd>LambDynamicLights</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/3dskinlayers" target="_blank" rel="noopener noreferrer">
                        <kbd>3D Skin Layers</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/ambientsounds" target="_blank" rel="noopener noreferrer">
                        <kbd>Ambient Sounds</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/chunks-fade-in" target="_blank" rel="noopener noreferrer">
                        <kbd>Chunks fade in</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/eating-animation" target="_blank" rel="noopener noreferrer">
                        <kbd>Eating Animation</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/iris" target="_blank" rel="noopener noreferrer">
                        <kbd>Iris Shaders</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/make_bubbles_pop" target="_blank" rel="noopener noreferrer">
                        <kbd>Make Bubbles Pop</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/no-night-vision-flickering" target="_blank" rel="noopener noreferrer">
                        <kbd>No Night Vision Flickering</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/not-enough-animations" target="_blank" rel="noopener noreferrer">
                        <kbd>Not Enough Animations</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/sound-physics-remastered" target="_blank" rel="noopener noreferrer">
                        <kbd>Sound Physics Remastered</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/telepistons" target="_blank" rel="noopener noreferrer">
                        <kbd>Telepistons</kbd>
                    </a>
                    <a href="https://modrinth.com/mod/why-am-i-on-fire" target="_blank" rel="noopener noreferrer">
                        <kbd>Why Am I On Fire?</kbd>
                    </a>
                </p>
            </div>
        </article>
    </main>
</Saos>