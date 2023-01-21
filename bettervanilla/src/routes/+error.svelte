<script>
  import { page } from '$app/stores';
</script>

<center>
    <hgroup>
        <h1><code>{$page.status} ({$page.error.message})</code></h1>
        <h2>Looks like an error occured</h2>
    </hgroup>
    <small>Go back to the <a href="/">homepage</a></small>
</center>