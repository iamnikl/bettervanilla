<style>
    details {
        padding-bottom: unset;
        border-bottom: unset;
    }
</style>

<main class="container" style="padding-top: 8rem; grid-column-gap: 5rem; display: grid; grid-template-columns: 10rem auto;">
    <aside style="display: inline-block; overflow-y: auto; overflow-x: hidden;">
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
                        <a class="secondary" href="/docs/mods">List</a>
                    </li>
                </ul>
            </details>
        </nav>
    </aside>
    <div role="document" style="display: inline-block;">
        <slot />
    </div>
</main>