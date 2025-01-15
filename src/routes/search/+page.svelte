<script>
    import { base } from '$app/paths';
    import {search_store} from "$lib/searchsave";
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'

    let search
    let searchedItem = []

    let visible = "none"
    let show = false

    $: searchedItem.sort(function(a,b){
        return b.weight - a.weight
    })

    onMount(() => {
        if($search_store.length > 2){
            searchedItem = JSON.parse($search_store);
        }
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

</script>

<img src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png" alt="Pokemon logo" class="img">
<main>
    <div class="a">
        <form on:submit|preventDefault={()=> goto(base+'/search/'+search)} class="searchbox">
            <input type="text" placeholder="Sök upp en pokemon" bind:value={search} on:click={toggleSearch}/>
        </form>
        
            <div style="position: relative;">
                <footer style="display: {visible};">
                    <div class="dropdown">
                        {#each searchedItem as link}
                            <a href="{link.link}" class="link">
                                {link.name}
                            </a>
                        {/each} 
                    </div> 
                </footer>
            </div>
    </div>

    <div class="reset">
        <button on:click={reset}>Reset</button>
    </div>
    
</main>

<style>
    .a{
        position: relative;
        margin-top: 100%;
    }
    main{
        display: flex;
        flex-direction: column;
    }
    .img{
        position: absolute;
        margin-bottom: 20%;
        height: 70%;
    }
    .dropdown{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .searchbox{
        color: black;
    }

    footer{
        position: absolute;
        width: 100%;
    }

    .link{
        align-self: center;
        background-color: brown;
        width: 100%;
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

        position: absolute;
        left: 58%;
        bottom: 25.7%;
    }

    .reset :hover{
        transform: scale(1.1);
        background-color: red;
    }
</style>