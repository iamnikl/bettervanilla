<script lang="js">
    const storageKey = 'theme-preference';
    import { onMount } from "svelte";

    var themeTitle = "Theme";
    
    onMount (() => {
        setthemePreference();
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            themeTitle = "Theme🌙";
        } else if (document.documentElement.getAttribute('data-theme') === 'light') {
            themeTitle = "Theme☀️";
        }
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

    function getPreference() {
        return document.documentElement.getAttribute('data-theme')
    }

    function setPreference() {
        localStorage.setItem(storageKey, getPreference())
    }
    
    function setthemePreference() {
        if (localStorage.getItem(storageKey)) {
                document.documentElement.setAttribute('data-theme', localStorage.getItem(storageKey));
                if (localStorage.getItem(storageKey) === 'dark') {
                    themeTitle = "Theme🌙";
                } else if (localStorage.getItem(storageKey) === 'light') {
                    themeTitle = "Theme☀️";
                } else {
                    themeTitle = "Theme";
                }
        } else {
            setthemeAuto();
        }
    }

    function setthemeAuto() {
        document.documentElement.setAttribute('data-theme', 'auto');
        themeTitle = "Theme";
    }

    function setthemeDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeTitle = "Theme🌙";
    }

    function setthemeLight() {
        document.documentElement.setAttribute('data-theme', 'light');
        themeTitle = "Theme☀️";
    }
</script>

<nav class="container-fluid">
    <ul>
        <li><a href="/"><strong>BetterVanilla✨</strong></a></li>
    </ul>
    <ul>
        <li>
            <details role="list" dir="rtl" id="themeSelector">
                <summary aria-haspopup="listbox" role="link">{themeTitle}</summary>
                <ul role="listbox">
                    <li><a href={'#'} on:mouseover={setthemeAuto} on:mouseleave={setthemePreference} on:focus={themeswitcherCloseAuto} on:click={themeswitcherCloseAuto}>Auto</a></li>
                    <li><a href={'#'} on:mouseover={setthemeDark} on:mouseleave={setthemePreference} on:focus={themeswitcherCloseDark} on:click={themeswitcherCloseAuto}>Dark</a></li>
                    <li><a href={'#'} on:mouseover={setthemeLight} on:mouseleave={setthemePreference} on:focus={themeswitcherCloseLight} on:click={themeswitcherCloseAuto}>Light</a></li>
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