<script lang="js">
    import Saos from "saos";
</script>

<svelte:head>
    <title>BetterVanilla✨</title>
    <meta name="description" content="A light vanilla modpack for minecraft" />
</svelte:head>

<center>
    <hgroup style="padding-top: 10rem;">
        <h1 style="font-size: 3rem">A light vanilla modpack<br/>for Minecraft</h1>
        <h2>this modpack <code>enchances</code> only client-side aspects of the game allowing you to play on unmodded servers</h2>
    </hgroup>
    <div style="padding-bottom: 18rem;">
        <a href="#optimization" role="button" class="box-shadow">More info</a>
        <a href="https://www.dropbox.com/s/oc8s9c9g77eif3b/BetterVanilla-1.19.3.zip?dl=1" role="button" class="outline box-shadow">Download latest</a>
    </div>
</center>

<p id="optimization" style="position: relative; top: -3.7rem; visibility: hidden;"></p>

<Saos once={true} animation={'from-left 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <main class="container" style="padding-bottom: 1.5rem;">
        <article class="grid box-shadow">
            <div>
                <img src="/img/sodium.png" alt="sodium">
            </div>
            <div>
                <p class="startpage-modlist">This modpack includes various optimization mods:<br/><br/>
                    <a href="/docs/mods/Sodium">
                        <kbd class="box-shadow">Sodium</kbd>
                    </a> 
                    <a href="/docs/mods/SodiumExtra">
                        <kbd class="box-shadow">Sodium Extra</kbd>
                    </a> 
                    <a href="/docs/mods/Starlight">
                        <kbd class="box-shadow">Starlight</kbd>
                    </a> 
                    <a href="/docs/mods/CullLeaves">
                        <kbd class="box-shadow">Cull Leaves</kbd>
                    </a> 
                    <a href="/docs/mods/Lithium">
                        <kbd class="box-shadow">Lithium</kbd>
                    </a> 
                    <a href="/docs/mods/SmoothBoot">
                        <kbd class="box-shadow">Smooth Boot</kbd>
                    </a> 
                    <a href="/docs/mods/FerriteCore">
                        <kbd class="box-shadow">FerriteCore</kbd>
                    </a> 
                    <a href="/docs/mods/DynamicFps">
                        <kbd class="box-shadow">Dynamic FPS</kbd>
                    </a>
                </p>
            </div>
        </article>
    </main>
</Saos>

<Saos once={true} animation={'from-left 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <main class="container" id="utility" style="padding-bottom: 1.5rem;">
        <article class="grid box-shadow">
            <div>
                <img src="/img/bettercmdblui.png" alt="bettercommandblockui">
            </div>
            <div>
                <p class="startpage-modlist">There are some utility mods too:<br/><br/>
                    <a href="/docs/mods/BetterCommandBlockUI">
                        <kbd class="box-shadow">BetterCommandBlockUi</kbd>
                    </a>
                    <a href="/docs/mods/Appleskin">
                        <kbd class="box-shadow">Apple Skin</kbd>
                    </a>
                    <a href="/docs/mods/Baritone">
                        <kbd class="box-shadow">Baritone</kbd>
                    </a>
                    <a href="/docs/mods/ClickThrough">
                        <kbd class="box-shadow">ClickThrough</kbd>
                    </a>
                    <a href="/docs/mods/JustIRC">
                        <kbd class="box-shadow">JustIRC</kbd>
                    </a>
                    <a href="/docs/mods/ModMenu">
                        <kbd class="box-shadow">Mod Menu</kbd>
                    </a>
                    <a href="/docs/mods/REI">
                        <kbd class="box-shadow">Roughly Enough Items</kbd>
                    </a>
                    <a href="/docs/mods/NoChatReports">
                        <kbd class="box-shadow">No Chat Reports</kbd>
                    </a>
                    <a href="/docs/mods/OkZoomer">
                        <kbd class="box-shadow">Ok Zoomer</kbd>
                    </a>
                    <a href="/docs/mods/PortalsGUI">
                        <kbd class="box-shadow">Portals Gui</kbd>
                    </a>
                    <a href="/docs/mods/VanillaNotebook">
                        <kbd class="box-shadow">Vanilla Notebook</kbd>
                    </a>
                </p>
            </div>
        </article>
    </main>
</Saos>

<Saos once={true} animation={'from-left 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <main class="container" id="visual" style="padding-bottom: 1rem;">
        <article class="grid box-shadow">
            <div>
                <img src="/img/firstpersonmodel.jpg" alt="lambdynamiclights">
            </div>
            <div>
                <p class="startpage-modlist">Visual and Audio mods:<br/><br/>
                    <a href="/docs/mods/FirstPersonModel">
                        <kbd class="box-shadow">Firest-person Model</kbd>
                    </a>
                    <a href="/docs/mods/LambDynamicLights">
                        <kbd class="box-shadow">LambDynamicLights</kbd>
                    </a>
                    <a href="/docs/mods/3DSkinLayers">
                        <kbd class="box-shadow">3D Skin Layers</kbd>
                    </a>
                    <a href="/docs/mods/AmbientSounds">
                        <kbd class="box-shadow">Ambient Sounds</kbd>
                    </a>
                    <a href="/docs/mods/ChunksFadeIn">
                        <kbd class="box-shadow">Chunks fade in</kbd>
                    </a>
                    <a href="/docs/mods/EatingAnimation">
                        <kbd class="box-shadow">Eating Animation</kbd>
                    </a>
                    <a href="/docs/mods/Iris">
                        <kbd class="box-shadow">Iris Shaders</kbd>
                    </a>
                    <a href="/docs/mods/MakeBubblesPop">
                        <kbd class="box-shadow">Make Bubbles Pop</kbd>
                    </a>
                    <a href="/docs/mods/NoNightVisionFlickering">
                        <kbd class="box-shadow">No Night Vision Flickering</kbd>
                    </a>
                    <a href="/docs/mods/NotEnoughAnimations">
                        <kbd class="box-shadow">Not Enough Animations</kbd>
                    </a>
                    <a href="/docs/mods/SoundPhysicsRemastered">
                        <kbd class="box-shadow">Sound Physics Remastered</kbd>
                    </a>
                    <a href="/docs/mods/Telepistons">
                        <kbd class="box-shadow">Telepistons</kbd>
                    </a>
                    <a href="/docs/mods/WhyAmIOnFire">
                        <kbd class="box-shadow">Why Am I On Fire?</kbd>
                    </a>
                </p>
            </div>
        </article>
    </main>
</Saos>

<div>
    <hr />
    <footer class="container-fluid" style="text-align: right;">
        <small>Built with <a href="https://picocss.com" target="_blank" rel="noopener noreferrer">Pico</a> and <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer">SvelteKit</a> <strong>•</strong> <a href="https://github.com/HACCKKER/bettervanilla" target="_blank" rel="noopener noreferrer">Source code</a> <strong>•</strong> <a href="/about">About</a></small>
    </footer>
</div>