<style>
    details {
        padding-bottom: unset;
        border-bottom: unset;
    }
</style>

<main class="container" style="padding-top: 8rem; grid-column-gap: 5rem; display: grid; grid-template-columns: 10rem auto;">
    <aside style="overflow-y: auto; overflow-x: hidden; display: inline-block;">
        <nav style="position: fixed;">
            <details open="true">
                <summary>Installation</summary>
                <ul>
                    <li>
                        <a class="secondary" href="/docs">MultiMC</a>
                    </li>
                    <li>
                        <a class="secondary" href="/docs/modsarchive">Mods Archive</a>
                    </li>
                </ul>
            </details>
            <details>
                <summary>Mods</summary>
                <ul>
                    <li>
                        <a class="secondary" href="/docs/mods">Mod List</a>
                    </li>
                    <li>
                        <a class="secondary" href="/docs/mods/Sodium">Sodium</a>
                    </li>
                </ul>
            </details>
        </nav>
    </aside>
    <div role="document" style="display: inline-block;">
        <slot />
    </div>
</main>