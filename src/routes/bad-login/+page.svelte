<script>
    let stringLetters = "QWERTYUIOPÅÄÖLKJHGFDSAZXCVBNMx"
    let letters = []

    let userName = ""
    let eMail = ""
    let passWord = ""

    let target = ""

    let visible = "none"


    let maxWidth = 80;
    let maxHeight = 80;

    let realDice = Math.floor((Math.random()*6)+1)
    let dice
    let total = 0
    let dots = []
    let months = ["Jan", "Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]
    let currentMonth = ""

    randomizeLetters()

    function addLetter(index){
        let letter = letters[index]
        if(letter.letter == "x"){
            visible = "none"
        }
        else{
            if(target == "Username"){
            userName += letter.letter
            }
            if(target == "E-mail"){
                eMail += letter.letter
            }
            if(target == "Password"){
                passWord += letter.letter
            }
        }
        letter.top = Math.random()*80
        letter.left = Math.random()*80

        letters = letters
    }

    function randomizeLetter(letter){
        let tempLeft;
        let tempTop;
        let leftRad;
        let topRad;
        let i = 0;

        //random left
        tempLeft = maxWidth*Math.random()
        // Find all letters within 5% radius of left
        leftRad = letters.filter((value)=> Math.abs(value.left-tempLeft)<10)
        // Try for 10 iterations to get unique position
        do{
            i++
            tempTop = maxHeight*Math.random() 
            // Find alla letters from leftRad which is also within 5% radius of top 
            topRad = leftRad.filter((value)=> Math.abs(value.top-tempTop)<5)
        
        } while(topRad.length>0 && i<20)

        return {letter:letter,top:tempTop,left:tempLeft}
    }

    function randomizeLetters(){
        letters = []

        for(let letter of stringLetters){
            letters.push(randomizeLetter(letter))
        }
    }

    setInterval(() => {
        randomizeLetters()
    }, 1750)

    function toggleTyping(clickedItem){
        if(visible = "none"){
            visible = "block"
        }
        target = clickedItem
    }

    function roll(){
        dots = []
        realDice = Math.floor((Math.random()*6)+1)
        for(let i = 0; i<realDice; i++){
            dots.push("dot")
        }
        console.log(dots)
        console.log(realDice, dice)
    }

    function add(){
        if((total + (realDice-1)) >= 12){
            total = 0
        }
        else{
            if((total + (realDice-1)) <= 0){
                total = 12
            }
        }
        total += realDice-1
        currentMonth = months[total]
        console.log(total, currentMonth)
    }

    function sub(){
        if((total - (realDice-1)) >= 12){
            total = 0
        }
        else{
            if((total - (realDice-1)) <= 0){
                total = 12
            }
        }
        total -= realDice-1
        currentMonth = months[total]
        console.log(total, currentMonth)
    }
</script>

<svg width="100vw" height="100vh" style="position: absolute; opacity:0.5; z-index:1; display:{visible};">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <rect width="100%" height="100%" style="fill:#000000;"/>
</svg>

<main style="position: relative;">
    <div style="display: {visible}; z-index: 2; position: absolute; left:40%; bottom:100%;">
        {#if (target == "Username")}
            <p>{target}: {userName}</p>
        {/if}
        {#if (target == "E-mail")}
            <p>{target}: {eMail}</p>
        {/if}
        {#if (target == "Password")}
            <p>{target}: {passWord}</p>
        {/if}
    </div>
    <section style="display: {visible};">
        {#each letters as {letter,top,left}, i }
            <button class="letter" style="top:{top}%; left:{left}%" on:mousedown={()=> addLetter(i)}>{letter}</button>
        {/each}
    </section>
    
    <div class="container">
        <h1>Inloggning</h1>

        <p>Username: {userName}</p>
        <svg width="50%" height="40" style="position: relative;">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <rect width="100%" height="40" style="fill:#FFFFFF;" on:click={() => toggleTyping("Username")}/>
        </svg>

        <p>Birth month: {currentMonth}</p>
        <svg width="50" height="50" style="position: relative;">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <rect width="90%" height="90%" style="fill:#FFFFFF;" on:click={roll}/>
        </svg>

        <p style="color: black; position:absolute; top:35%; left:49.55%; z-index:1;">{realDice}</p>

        <svg width="50%" height="40" style="position: relative;">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <rect width="100%" height="40" style="fill:#000000;" on:click={add}/>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <rect width="50%" height="40" style="fill:#FFFFFF;" on:click={sub}/>
        </svg>

        <p style="color:black; position: absolute; top: 45%; left:47%;">-</p>
        <p style="color:white; position: absolute; top: 45%; left:52%;">+</p>

        <p>E-mail: {eMail}</p>
        <svg width="50%" height="40" style="position: relative;">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <rect width="100%" height="40" style="fill:#FFFFFF;" on:click={() => toggleTyping("E-mail")}/>
        </svg>
        
        <p>Password: {passWord}</p>
        <svg width="50%" height="40" style="position: relative;">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <rect width="100%" height="40" style="fill:#FFFFFF;" on:click={() => toggleTyping("Password")}/>
        </svg>

        <input type="submit" value="Logga in">
    </div>

    
</main>


<style> 
    main{
        top:20%;
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

    .letter{
        position: absolute;
        padding: 1em;
    }

    @keyframes fader{
        0%{opacity: 30%; transform: scale(0.3);}
        50%{opacity: 70%; transform: scale(0.6);}
        100%{opacity: 100%; transform: scale(1.0);}
    }

    .letter:active{
        animation: fader 600ms linear;
        animation-iteration-count: initial;
    }
    section{
        position: absolute;
        background-color: black;
        width: 20vw;
        height: 20vw;
        margin: auto;

        border: solid 5px rgb(34, 34, 34) ;
        border-radius: 10px;

        left: 40%;
        top: 0.5%;

        z-index: 2;
    }

</style>