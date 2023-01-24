<script lang="js">
    function themeswitcherClose() {
        document.getElementById('themeSelector').removeAttribute('open');
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
                    <li><a href={'#'} on:click={themeswitcherClose} on:mouseover={setthemeAuto} on:focus={setthemeAuto}>Auto</a></li>
                    <li><a href={'#'} on:click={themeswitcherClose} on:mouseover={setthemeDark} on:focus={setthemeAuto}>Dark</a></li>
                    <li><a href={'#'} on:click={themeswitcherClose} on:mouseover={setthemeLight} on:focus={setthemeAuto}>Light</a></li>
                </ul>
            </details>
        </li>
        <li><a href="/downloads">Downloads</a></li>
    </ul>
</nav>
<hr/>