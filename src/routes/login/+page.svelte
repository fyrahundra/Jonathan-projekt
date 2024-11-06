<script>
    import {users_store} from "$lib/user";
    import { onMount } from 'svelte';
    
    let users = [];

    let lösenord
    let epost
    
    onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
    });

    function handleSubmit(){
        if(lösenord && epost){
            let userInfo = users.filter(users => users.email === epost)
            if(userInfo.length > 0 && userInfo[0].password === lösenord){ 
                /*hittar ett konto*/
                    alert("Välkommen " + userInfo[0].username)
            }
            else{
                /*hittar inget konto*/
                alert("Fel lösenord eller epost-adress")
            }
        }
        else{
            alert("Du har glömt att fylla i något fält")
        }
    }
</script>

<main>
    <div class="container">
        <h1>Inloggning</h1>
        <form action="" on:submit|preventDefault={handleSubmit}>

            <label for="e-post">E-post:</label>
            <input type="email" id="e-post" class="text" bind:value={epost}>

            
            <label for="lösenord">Lösenord:</label>
            <input type="password" id="lösenord" class="text" bind:value={lösenord}>

            <input type="submit" value="Logga in">
        </form>
        <h1 >Har du inte ett konto? <a href="/register" class="linkText">Skapa ett!</a></h1>
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
            width: 20%;
            height: 25%;
            background-color: #3a2e3b;
            margin: auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            min-height: 300px;
            min-width: 300px;

    } 
    
    .text{
        color: black;
    }
    .linkText{
        color: aqua;
    }

</style>
