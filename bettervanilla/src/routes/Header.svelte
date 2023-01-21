<script lang="js">
    function themeAuto() {
        document.documentElement.setAttribute('data-theme', 'auto');
        document.getElementById("themeSelector").removeAttribute("open");
    }

    function themeDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("themeSelector").removeAttribute("open");
    }

    function themeLight() {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("themeSelector").removeAttribute("open");
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
                    <li><a href={'#'} on:click={themeAuto}>Auto</a></li>
                    <li><a href={'#'} on:click={themeDark}>Dark</a></li>
                    <li><a href={'#'} on:click={themeLight}>Light</a></li>
                </ul>
            </details>
        </li>
        <li><a href="/Downloads">Downloads</a></li>
    </ul>
</nav>
<hr/>