<script>
    import { page } from "$app/stores";
</script>

<section>

    <h1>{"You searched for: " + $page.params.pokemon}</h1>
    <hr />
    <h2>{$page.status}: {$page.error.message}</h2>
</section>
    