<script lang="js">
    const storageKey = 'theme-preference'
    import { onMount } from "svelte"
    
    onMount (() => {
        setthemePreference();
    });

    // using click functions to close theme switcher for mobile devices compatibility
    function themeswitcherCloseAuto() {
        themeSwitcherClose();
        setthemeAuto();
        setPreference();
    }

    function themeswitcherCloseDark() {
        themeSwitcherClose();
        setthemeDark();
        setPreference();
    }

    function themeswitcherCloseLight() {
        themeSwitcherClose();
        setthemeLight();
        setPreference();
    }

    // main switcher functions
    function themeSwitcherClose() {
        document.getElementById('themeSelector').removeAttribute('open');
    }

    function setPreference() {
        localStorage.setItem(storageKey, document.documentElement.getAttribute('data-theme'))
    }
    
    function setthemePreference() {
        if (localStorage.getItem(storageKey))
            document.documentElement.setAttribute('data-theme', localStorage.getItem(storageKey));
        else
            setthemeAuto();
    }

    function setthemeAuto() {
        document.documentElement.setAttribute('data-theme', 'auto');
    }

    function setthemeDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function setthemeLight() {
        document.documentElement.setAttribute('data-theme', 'light');
    }
</script>

<nav class="container-fluid">
    <ul>
        <li><a href="/"><strong>Better Vanilla</strong></a></li>
    </ul>
    <ul>
        <li>
            <details role="list" dir="rtl" id="themeSelector">
                <summary aria-haspopup="listbox" role="link">Theme</summary>
                <ul role="listbox">
                    <li><a href={'#'} on:mouseover={setthemeAuto} on:mouseleave={setthemePreference} on:focus={themeswitcherCloseAuto}>Auto</a></li>
                    <li><a href={'#'} on:mouseover={setthemeDark} on:mouseleave={setthemePreference} on:focus={themeswitcherCloseDark}>Dark</a></li>
                    <li><a href={'#'} on:mouseover={setthemeLight} on:mouseleave={setthemePreference} on:focus={themeswitcherCloseLight}>Light</a></li>
                </ul>
            </details>
        </li>
        <li>
            <a href="/docs">Docs</a>
        </li>
        <li>
            <a href="/downloads">Downloads</a>
        </li>
    </ul>
</nav>
<hr/>