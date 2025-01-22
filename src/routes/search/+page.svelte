<script>
    import { base } from '$app/paths';
    import {search_store} from "$lib/searchsave";
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'
	import { error } from '@sveltejs/kit';

    let search
    let searchedItem = []

    let visible = "none"
    let show = false

    let pokemons = []
    let filter = []
    let finalResult = []

    $: searchedItem.sort(function(a,b){
            return b.id - a.id
    })

    onMount(() => {
        if($search_store.length > 2){
            searchedItem = JSON.parse($search_store);
        }
        getNames()
    });

    if(typeof window !== "undefined"){
        window.addEventListener("click", toggleShow);
    }

    function toggleSearch(){
        show = true
    }

    function toggleShow(){
        if (show == true){
            visible = "block"
            show = false
        }
        else{
            visible = "none"
        }
    }

    function reset(){
        searchedItem = []
        $search_store = JSON.stringify(searchedItem)
    }

    //Jag har använt https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2 för att lära mig det här i kombination av att titta på +page.js
    async function getNames() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302')
        
        if (response.status != 200){
            throw error(response.status, {message: response.statusText})
        }

        pokemons = await response.json()


        pokemons.results.forEach(pokemon => {
            filter.push(pokemon.name)
        });
    }

    function filterSearch(){
        finalResult = filter.filter(name => name.toLowerCase().includes(search.toLowerCase()))
        if(!search.trim()){
            finalResult = []
        }
    }
</script>

<img src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png" alt="Pokemon logo" class="img">
<main>
    <div class="layerCorrect">
        <div style="color: black;">Suggestion: <ahref="{base}/search/{finalResult[0]}">{finalResult[0]}</a></div>
        <form on:submit|preventDefault={()=> goto(base+'/search/' + search) } class="searchbox">
            <input type="text" placeholder="Sök upp en pokemon" bind:value={search} on:click={toggleSearch} on:input={filterSearch}/>
        </form>
        <div>
            <footer style="display: {visible};">
                <div class="dropdown">
                    {#each searchedItem as link}
                        <a href="{link.link}" class="link">
                            {link.name}
                            #{link.id}
                        </a>
                    {/each} 
                    <button on:click={reset} class="reset">Reset</button>
                </div> 
            </footer>
        </div>
    </div>

    
</main>

<style>
    .layerCorrect{
        z-index: 1;
    }
    main{
        display: flex;
        flex-direction: column;
    }
    .img{
        position: absolute;
        margin-bottom: 20%;
        height: 70%;
        z-index: 0;
    }

    .dropdown{
        width: 14%;
        display: flex;
        flex-direction: column;
    }

    .searchbox{
        color: black;
    }

    footer{
        width: 100%;
        position: absolute;
    }

    .link{
        width: 100%;
        background-color: brown;
        text-transform: capitalize;
    }

    .link:hover{
        transform: scale(1.1);
        background-color: rgb(201, 49, 49);
    }

    .reset{
        background-color: red;
        border: solid burlywood 2px;
        border-radius: 10px;
    }

    .reset:hover{
        transform: scale(1.1);
        background-color: red;

        border: solid burlywood 2px;
        border-radius: 10px;
    }
</style>