<script lang="js">
    // redundancy for mobile devices compatibility
    function themeswitcherCloseAuto() {
        document.getElementById('themeSelector').removeAttribute('open');
        document.documentElement.setAttribute('data-theme', 'auto');
    }

    function themeswitcherCloseDark() {
        document.getElementById('themeSelector').removeAttribute('open');
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function themeswitcherCloseLight() {
        document.getElementById('themeSelector').removeAttribute('open');
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // main switcher functions
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
                    <li><a href={'#'} on:mouseover={setthemeAuto} on:focus={themeswitcherCloseAuto}>Auto</a></li>
                    <li><a href={'#'} on:mouseover={setthemeDark} on:focus={themeswitcherCloseDark}>Dark</a></li>
                    <li><a href={'#'} on:mouseover={setthemeLight} on:focus={themeswitcherCloseLight}>Light</a></li>
                </ul>
            </details>
        </li>
        <li><a href="/downloads">Downloads</a></li>
    </ul>
</nav>
<hr/>