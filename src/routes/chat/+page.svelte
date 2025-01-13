<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
    import {chat_store} from "$lib/chatsave";
    import { onMount } from 'svelte';

    const eliza = new ElizaBot();

    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];

    let answer = ""

    onMount(() => {
        chat = JSON.parse($chat_store);
    });

    async function write(message) {
    //TODO: Add the new message to the chat

    chat = [...chat, {user:"You", message: answer}]

    answer = ""
    
    //Hämta HTML-elementet med id:et visible
    var element = document.getElementById("visible");
    //Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex"; // Visa elementet

    // random delay for Eliza's response time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    
    element.style.display = "none"; //göm elementet

    //TODO: Add Eliza's response to the chat
    chat = [...chat, {user:"Eliza", message:eliza.transform(answer)}]

    $chat_store = JSON.stringify(chat);

    }

    function reset(){
        answer = ""
        chat = [{ user: 'Eliza', message: eliza.getInitial() }]
        $chat_store = JSON.stringify(chat)
    }

</script>

<main>
    <div class="chat">
        <section>
            {#each chat as text}
                <article class:You = {text.user == "You"}>
                    <p>{text.message}</p>
                </article>
            {/each}
            <article id="visible">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </article>
        </section>
        <form method="post" use:enhance={({ formElement, formData, action, cancel }) => {
            cancel(); //don't post anything to server
            const text = formData.get("text");
            write(text);


        // TODO: reset the form using form.reset()
            formData.reset()

        }}>
        <input type="text" bind:value={answer}>
        </form>
        <input type="submit" value = "Reset" on:click={reset}>
    </div>
    
</main>

<style>
    main{
        display: flex;

        justify-content: center;

        padding-top: 10vh;
    }

    .chat{
        width: 60vw;
        height: 70vh;

        padding: 10px;

        background-color: rgb(29, 29, 29);
    }

    section{
        height: 77%;
        overflow-y: scroll;
    }

    article, input{
        margin: 10px;
        padding: 10px;
        border-radius: 10px;

        width: 90%;
        justify-self: flex-start;
    }

    article{
        background-color: red;
    }

    input{
        background-color: rgb(55, 54, 54);
    }

    #visible{
        display: none;

        height: 60px;
        width: 100px;
        padding: 0px;

        justify-content: space-evenly;
        align-items: center;
    }

    .circle{
        width: 10px;
        height: 10px;

        border-radius: 50%;

        background-color: azure;

        animation-name: typing;
        animation-duration: 1000ms;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }

    
    /* CSS-stilar för .circle med index 1 (den första cirkeln) */
    .circle:nth-child(1) {
        animation-delay: 0ms; /* Ingen fördröjning */
    }
    /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
    .circle:nth-child(2) {
        animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
    }
    /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
    .circle:nth-child(3) {
        animation-delay: 666ms; /* Starta animationen efter 666 ms */
    }
    

    @keyframes typing{
        0% {transform: scale(1);}
        25% {transform: scale(1);}
        50% {transform: scale(1.4);}
        100% {transform: scale(1);}
    }

    .You{
        background-color: blue;

        text-align: right;

        margin-left: 8%;
    }
</style>