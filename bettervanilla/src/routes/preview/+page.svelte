<svelte:head>
    <title>Vorschau</title>
    <meta name="description" content="Modpack preview page" />
</svelte:head>
<style>
    .videoSect {
        height: fit-content;
        width: 95%;

        padding: 25px;
        margin: 0;

        border-radius: var(--border-radius);
        background: var(--card-background-color);
        box-shadow: var(--card-box-shadow);
    }
    .videoSect h1 {
        font-size: 1.4rem;
        color: var(--primary);

        text-align: start;
    }
    .videoSect p {
        text-align: start;
    }
    #videoSectFlex {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }
    iframe {
        display: block;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 5px var(--primary-focus);
    }
</style>

<center>
    <hgroup style="padding-top: 8rem;">
        <h1>Videos</h1>
        <h2>Vorschau Videos zu dem Modpack <code>BetterVanilla</code></h2>
    </hgroup>
    <div id="videoSectFlex">
        <section class="videoSect">
            <h1>Modpack</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores explicabo eligendi expedita quod delectus, maxime molestiae commodi illo, eos nihil dignissimos animi quibusdam harum aliquid. Libero officia cupiditate soluta.</p>
            <iframe src="https://www.youtube.com/embed/UsAkdNiYjCM" title="Entspannungsmusik - HD Video Landschaften, Meer, Natur..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section class="videoSect">
            <h1>Modpack</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores explicabo eligendi expedita quod delectus, maxime molestiae commodi illo, eos nihil dignissimos animi quibusdam harum aliquid. Libero officia cupiditate soluta.</p>
            <iframe src="https://www.youtube.com/embed/UsAkdNiYjCM" title="Entspannungsmusik - HD Video Landschaften, Meer, Natur..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section class="videoSect">
            <h1>Modpack</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores explicabo eligendi expedita quod delectus, maxime molestiae commodi illo, eos nihil dignissimos animi quibusdam harum aliquid. Libero officia cupiditate soluta.</p>
            <iframe src="https://www.youtube.com/embed/UsAkdNiYjCM" title="Entspannungsmusik - HD Video Landschaften, Meer, Natur..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section class="videoSect">
            <h1>Modpack</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores explicabo eligendi expedita quod delectus, maxime molestiae commodi illo, eos nihil dignissimos animi quibusdam harum aliquid. Libero officia cupiditate soluta.</p>
            <iframe src="https://www.youtube.com/embed/UsAkdNiYjCM" title="Entspannungsmusik - HD Video Landschaften, Meer, Natur..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section class="videoSect">
            <h1>Modpack</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores explicabo eligendi expedita quod delectus, maxime molestiae commodi illo, eos nihil dignissimos animi quibusdam harum aliquid. Libero officia cupiditate soluta.</p>
            <iframe src="https://www.youtube.com/embed/UsAkdNiYjCM" title="Entspannungsmusik - HD Video Landschaften, Meer, Natur..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section class="videoSect">
            <h1>Modpack</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores explicabo eligendi expedita quod delectus, maxime molestiae commodi illo, eos nihil dignissimos animi quibusdam harum aliquid. Libero officia cupiditate soluta.</p>
            <iframe src="https://www.youtube.com/embed/UsAkdNiYjCM" title="Entspannungsmusik - HD Video Landschaften, Meer, Natur..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    </div>
</center>
