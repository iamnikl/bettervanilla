<style>
    .mc-section {
        width: 100%;
        height: 50vh;
        background-color: transparent;
        position: absolute;
        bottom: 0;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .mc-item {
        width: 45%;
        height: 45%;
        background-color: var(--primary-hover);
        margin: 10px;
        font-size: 2rem;
        text-align: center;
        vertical-align:bottom;

        display: grid;
        place-content: center;
        color: white;
        border-radius: 10px;
    }
    .mc-item:hover {
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        transform: scale(1.01, 1.01);
        cursor: pointer;
    }
    .mc-item:active {
        background-color: rgb(0, 255, 179);
    }
</style>
<div>
    <h1></h1>
    <section class="mc-section">
        <div class="mc-item possible-answer">Ein Auto</div>
        <div class="mc-item possible-answer">Ein Tier</div>
        <div class="mc-item possible-answer">Eine Erweiterung</div>
        <div class="mc-item possible-answer">Ein Gericht</div>
    </section>
</div>