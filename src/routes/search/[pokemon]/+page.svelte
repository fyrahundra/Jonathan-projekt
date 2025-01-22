<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { base } from '$app/paths';
    import {search_store} from "$lib/searchsave";
    import { onMount } from 'svelte';
	import { page } from '$app/stores';

    let searchedItem = []

    onMount(() => {
        if($search_store.length > 2){
            searchedItem = JSON.parse($search_store)
        }
    });

    async function addLink(weightInfo, nameInfo, idInfo){
        await onMount
        let searchTarget = nameInfo
        searchedItem = searchedItem.filter(item => item.name !== searchTarget)  //filtrerar bort alla återkommande sökningar

        if (searchedItem.length == 5){
                searchedItem.shift()
                searchedItem = searchedItem
            }

        searchedItem = [...searchedItem, {link: base + "/search/" + $page.params.pokemon.toLowerCase(), name: nameInfo, weight: weightInfo, id: idInfo}]
        $search_store = JSON.stringify(searchedItem);
        console.log(base)
    }

</script>
        
{#await data}
    <p>.. waiting</p>
    {:then pokemon}
    <div style="display: none;">
        {addLink(pokemon.response.weight, pokemon.response.name,pokemon.response.id)}
    </div>
    <a href="{base}/search/" class="home">← Home</a>
    <p style="color: black;" class="name">{pokemon.response.name} #{pokemon.response.id}</p>
    <article style="overflow: scroll;">
        {#each Object.entries(pokemon.response.sprites) as sprites}
            {#if typeof sprites[1] == "string"}
                <img src={sprites[1]} alt="bild"/>
            {/if}
        {/each}
    </article>

        <h1 style="color: black;">Type(s):</h1>

        <div class="types">
            {#each pokemon.response.types as types}
                <p>{types.type.name}</p>
            {/each}
        </div>

        <h1 style="color: black;">Weight:</h1>
        <div>
            <p style="color: black;">{pokemon.response.weight/10} kg</p>
        </div>
    
    
    <h1 style="color: black;">Moves:</h1>
    <section class="grid">
            {#each pokemon.response.moves as moves}
            <article style="color: black;" class="moves">
                <p>{moves.move.name}</p>
            </article>
        {/each}
    </section>
    
{/await}  


<style>
    .home{
        color: black;
        position: absolute;
        margin-right: 75%;
        margin-bottom: 50%;
    }
    .home:hover{
        color: rgb(124, 123, 123);
    }
    .name{
        color: black;
        font-size: xx-large;
    }
    article{
        display: flex;

        width: 90%;
        height: 30%;

        gap: 1em;
    }

    section{
        width: 50%;
        height: 30%;
    }

    .grid{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 20%);
        overflow-y: scroll;
    }

    .moves{
        background-color: rgb(83, 83, 192);
        padding: 15px;
        border-radius: 10px;   
        justify-content: center;
        align-items: center;
    }

    .types{
        display: flex;
        justify-content: space-evenly;

        width: 10%;
        
        color: black;
    }

    p{
        text-transform: capitalize;
    }
</style>
