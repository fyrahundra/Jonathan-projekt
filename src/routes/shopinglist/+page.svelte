<script>
    import { fade } from "svelte/transition";

    $: varor.sort(function(a,b){
        return a.priority - b.priority
    })

    let varor = []
    let item

    function addBuyItem(){
        item = item.trim()
        if (item.length !== 0){
            varor = [...varor,{name:item, type:"Köpa", priority: varor.length+1}]
            item = ""
        }
    }

    function removeItem(target){
        varor.splice(varor.indexOf(target),1)
        varor = varor
    }

    function moveItem(target){
        if(target.type === "Köpt"){
            target.type = "Köpa"
        }
        else{
            target.type = "Köpt"
        }
        varor = varor
    }

    function changePriorityDown(target){
        let remember = varor[varor.indexOf(target)+1].priority
        varor[varor.indexOf(target)+1].priority = target.priority
        target.priority = remember
        varor = varor
    }

    function changePriorityUp(target){
        let remember = varor[varor.indexOf(target)-1].priority
        varor[varor.indexOf(target)-1].priority = target.priority
        target.priority = remember
        varor = varor
    }
</script>

<main class="container">
    <h1>Shoppinglist</h1>
    <div class="catagories_container">
        <section>
            <h2>Varor att köpa</h2>
                <ol>
                    {#each varor as vara}
                        {#if (vara.type == "Köpa")}
                            <li transition:fade>                        
                                <input class="remove" type="submit" value= X on:click={removeItem(vara)}>
                                {vara.name}
                                <input class="move" type="submit" value= "-->" on:click={moveItem(vara)}>
                                
                                <input class = "a" type="submit" value="↑" on:click={changePriorityUp(vara)}>
                                <input type="submit" value="↓" on:click={changePriorityDown(vara)}>
                                
                                {vara.priority}

                            </li>
                        {/if }
                    {/each}
                </ol>
            <form on:submit|preventDefault={addBuyItem} class="text">
                <input type="text" bind:value={item}>
                <input type="submit" value="Add">
            </form>

        </section>

        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each varor as vara}
                    {#if (vara.type == "Köpt")}
                    <form action="">
                        <li transition:fade>
                            <input class="move" type="submit" value= "<--" on:click={moveItem(vara)}>
                            {vara.name}
                            <input class="remove" type="submit" value= X on:click={removeItem(vara)}>
                        </li>
                    </form>
                    {/if }
                {/each}
            </ul>
        </section>
    </div>
</main>

<style>
    .container{
        background-color:blueviolet;
        width: 90vw;
        height: 90vh;
        border-radius: 20px;
        
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;  

        margin-left: 7vw;
        margin-top: 2.5vh;
    }
    .catagories_container{
        height: 100%;
        background-color: aqua;

        display: grid;
        grid-template-columns: repeat(2,1fr);

        column-gap: 10px;

        overflow: hidden;
    }

    .a{
        margin-left: 2.5vh;
    }

    .catagories_container section{
        size: 100%;
    }

    .catagories_container section ol{
        list-style:disc;
    }

    .catagories_container section ul{
        list-style: disc;
    }

    li{
        list-style-position:inside;

        border-bottom: 1px dotted white;
    }

    .remove {
        color: rgb(172, 0, 0);
    }

    .remove:hover{
        color: red;
    }

    .move:hover{
        color:aqua;
    }
    
    .catagories_container section:last-child{  /* vilket barn vill vi styla? */
        background-color: rgba(0, 0, 0, 0.1); /* svart bakgrund med 10% opacitet */
        overflow-y: scroll;
    }

    .catagories_container section:first-child{  /* vilket barn vill vi styla? */
        background-color: rgba(0, 0, 0, 0.3); /* svart bakgrund med 30% opacitet */
        overflow-y: scroll;
    }

    .catagories_container section h2{
        text-align: center;
        font-size: medium;
        margin: 10px 0px;
    }

    .catagories_container section h2:last-child{
        background-color: rgba(0, 0, 0, 0.3)
    }

    .catagories_container section h2:first-child{
        background-color: rgba(0, 0, 0, 0.1)
    }

    .container h1{
        background-color: red;
        border-radius: 20px;

        justify-self: center;
        align-self: center;
    }

    .text{
        color: black;
    }
</style>