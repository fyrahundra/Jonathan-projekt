<script>    
    import {users_store} from "$lib/user";
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    let users = [];
    let colors = [{name: "Blå", value: "blue"},{name: "Röd", value: "red"}]
    let färg = "black"
    let namn 
    let lösenord 
    let epost 

    onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
    });

    function handleSubmit(){
        if(namn && lösenord && epost)
            if(users.filter(users => users.username === namn).length > 0){
                alert("Kontot finns redan!")
            }
            else{
                alert("Välkommen " + namn + "\nDin favoritfärg är: " + färg + "\nDin E-post är: " + epost + "\nDitt lösenord är: " + lösenord)
                let new_user = {username: namn, password: lösenord, email: epost, color: färg};
                users = [...users, new_user];
                $users_store = JSON.stringify(users);
                
            }
        else{
            alert("Du har glömt att fylla i något fält")
        }

    }
</script>

<main>
    <div class="container">
        <h1>Registrering</h1>
        <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{färg};">
        </div>
        <form action="" on:submit|preventDefault={handleSubmit}>
            <label for="name">Namn:</label>
            <input type="text" id="name" class="text" bind:value={namn}>

            
            <label for="e-post">E-post:</label>
            <input type="email" id="e-post" class="text" bind:value={epost}>

            
            <label for="lösenord">Lösenord:</label>
            <input type="password" id="lösenord" class="text" bind:value={lösenord}>



            <label for="favoritFärg">Favorit färg</label>
            <select name="" id="favoritFärg" bind:value={färg} class="text">
                {#each colors as color}
                    <option value={color.value}>{color.name}</option>
                {/each}
            </select>

            <input type="submit" value="Registrera">
        </form>
        <h1>Har du redan ett konto? <a href="{base}/login" class="linkText">Logga in!</a></h1>
    </div>

</main>

<style>
    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;

        min-height: 500px;
        min-height: 500px;
    }
    
    .container{
            border: solid 5px rosybrown;
            border-radius: 10px;
            width: 35%;
            height: 80%;
            background-color: #3a2e3b;
            margin: auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            min-height: 500px;
            min-width: 300px;
    } 
    
    .text{
        color: black;
    }
    .linkText{
        color: aqua;
    }

</style>
