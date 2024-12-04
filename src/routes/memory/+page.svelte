<script>
    let cards = []
    let targetCards = []

    let cardFront = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKOMW3m108ANPLe1ppBFMTmUduK9i5oJAig&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKOMW3m108ANPLe1ppBFMTmUduK9i5oJAig&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR48LoFHBZXunbYp-PlllTPPEgrgml-paqg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR48LoFHBZXunbYp-PlllTPPEgrgml-paqg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_oBDZHxU52VhXTGY5B3vYRCQGvKDrBF8rA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_oBDZHxU52VhXTGY5B3vYRCQGvKDrBF8rA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LCIGtdqzhcb85qizt8FIeBi0NNQSOix-9Q&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LCIGtdqzhcb85qizt8FIeBi0NNQSOix-9Q&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhFxyF4sN427M3RwN2WEzItUtR97SYqQ5_A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhFxyF4sN427M3RwN2WEzItUtR97SYqQ5_A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GpyEuRcDsXUVvErE7emtF1kyAx56aWXpuA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GpyEuRcDsXUVvErE7emtF1kyAx56aWXpuA&s"]

    let cardBack = "https://store-images.s-microsoft.com/image/apps.56855.13961302732259333.f6b86fd7-3a23-429b-80d6-53f3ff7ce16b.20a32a1f-d91f-49bd-802a-05c4b3f0493d?mode=scale&q=90&h=300&w=300"
    
    let redPoints = 0
    let bluePoints = 0

    let blueTurn = true

    let blueWin = false
    let redWin = false
    let noWin = false

    let flipCount = 0

    function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
    }

    function startGame(){
        blueTurn = true
        bluePoints = 0
        redPoints = 0

        blueWin = false
        redWin = false
        noWin = false

        cards = []
        flipCount = 0

        cardFront = shuffleArray(cardFront)
        
        for(let i = 0; i <cardFront.length; i++){
            let newFront = cardFront[i]
            cards.push({image: newFront, flipped: false, matched: false})
            cards = cards
        }
    }
    startGame()
    
    function flip(target){
        if(flipCount < 2 && target.flipped == false){
            target.flipped = !target.flipped
            targetCards.push(target)
            flipCount += 1
            targetCards = targetCards
        }
        if(flipCount == 2){
            if(targetCards[0].image === targetCards[1].image){
                targetCards[0].matched = true
                targetCards[1].matched = true

                if(blueTurn == true){
                    bluePoints += 1
                }
                else{
                    redPoints += 1
                }
                }

            setTimeout(() => {
                cards.forEach((card) => {
                    card.flipped = card.matched;
                });
                flipCount = 0;
                cards = cards;
                targetCards=[]
                }, 1000);
            
            blueTurn = !blueTurn
            flipCount += 1
            }
        if((bluePoints + redPoints) == 6){
            if(bluePoints > redPoints){
                blueWin = true
            }
            if(bluePoints < redPoints){
                redWin = true
            }
            if(bluePoints == redPoints){
                noWin = true
            }
        }
    }


    function flipCard(target){
        flip(target)
        cards = cards
    }

</script>

<h1 class="header">Memory</h1>

<main class="playArea">
    {#each cards as card}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="card" class:flipped= {card.flipped} on:click={flipCard(card)}>
            <img src={card.image} alt="front" class="front">
            <img src={cardBack} alt="back" class="back">
        </div>
    {/each}
    <input type="submit" value="reset" on:click={startGame} class="reset">
</main>

<aside>
    <p>{redPoints}</p>
</aside>

<aside class="blue">
    <p >{bluePoints}</p>
</aside>

<aside class="turn" class:blue= {blueTurn}></aside>

{#if (blueWin)}
    <div style="background-color: blue;" class="Win">Blå vann</div>
{/if}

{#if (redWin)}
    <div style="background-color: red;" class="Win">Röd vann</div>
{/if}

{#if (noWin)}
    <div style="background-color: green;" class="Win">Oavgjort</div>
{/if}

<style>
    .header{
        display: flex;
        font-size: large;
        justify-content: center;
    }
    .playArea{
        justify-content: center;
        display: grid;
    }

    @media (min-height: 500px){
    main{
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: repeat(3, 100px);
    }
    }
    @media (max-height: 500px){
    main{
        grid-template-columns: repeat(6, 100px);
        grid-template-rows: repeat(2, 100px);
    }
    }

    .card{
        height: 100%;
        width: 100%;
        border: 1px solid black;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }

    .card:not(.flipped) :hover{
        transform: scale(1.1);
    }

    .front{
        height: 100%;
        width: 100%;
        position: absolute;
        transform: rotateY(180deg);
        backface-visibility: hidden;

    }

    .back{
        height: 100%;
        width: 100%;
        position: absolute;
        transform: rotateY(0deg);
        backface-visibility: hidden;

    }

    
    aside{
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blue{
        background-color: blue;
        left: 10px;
    }

    .Win{
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: blue;

        font-size: larger;

        margin-top: 10px;
    }

    .turn{
        z-index: -1;
        box-shadow: 0 0 10px 10px yellowgreen;
    }

    img{
        backface-visibility: hidden;
    }

    p{
        font-size: 30px;
    }

    .flipped{
        transform: rotateY(180deg);
    }

    .reset{
        font-size: larger;
        background-color: red;
        border-radius: 10px;
    }
</style>