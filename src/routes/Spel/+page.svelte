<script>
    let row = [0,50,100,150,200,250,300,350,400,450]

    let apples = []

    let dropInterval

	let top = 450
	let left = 0

    let score = 0
    let endScore = 0
    let highscore

    let tempTime

    let startScreen = true
    
    let playing = false

    let visible = "flex"

    let cooldown = true

    let health = 3

    let hearts = []

    let hit = "rgb(128, 128, 0)"

	// up = 38
	// down = 40
	// right = 39
	// left = 37
	function onKeyDown(e) {
        if(playing){
            switch(true) {
                case e.keyCode == 37 && cooldown == true || e.keyCode == 65 && cooldown == true:
                    if(left > 0){
                        left -= 50;
                        cooldown = false
                    }
                    break;

                case e.keyCode == 39 && cooldown == true || e.keyCode == 68 && cooldown == true:
                    if(left < 450){
                        left += 50;
                        cooldown = false
                    }
                    break;
            }}
	}

    function onKeyUp(e){
        if(playing){
            switch(true) {
                case e.keyCode == 37 || e.keyCode == 65:
                    cooldown = true
                    break;

                case e.keyCode == 39 || e.keyCode == 68:
                    cooldown = true
                    break;
            }
        }
    }

    function gameStart(){
        if (startScreen == true){
            visible = "none"
            apples = []

            top = 450
            left = 0

            startScreen = false

            health = 3

            updateHearts()

            startDropInterval()

            playing = true
        }
        else{
            startScreen = true
        }
        
    }

    function gameOver(){
        endScore = score
        if(typeof window !== "undefined") {
            if(localStorage.getItem("highscore") < endScore){
                localStorage.setItem("highscore", endScore)
            }

            highscore = localStorage.getItem("highscore")
        }
        

        visible = "flex"
        playing = false
        score = 0

        clearInterval(dropInterval)
    }

    function startDropInterval(){
        clearInterval(dropInterval)

        tempTime = 500*(0.97**score)

        if (tempTime < 125){
            tempTime = 125
        }

        dropInterval = setInterval(() => {
            if(playing){
                for(let apple of apples){
                    apple.top += 50
                }
                apples = [...apples]
            }
        }, tempTime)
    }
	
    setInterval(() => {
        if(playing){
            let i = 0
            let templeft = row[Math.floor(Math.random()*row.length)]
            if(apples.filter(apple => templeft === apple.left).length > 0){
                do{
                    i ++
                    templeft = row[Math.floor(Math.random()*row.length)]
                } while(apples.filter(apple => templeft === apple.left).length > 0 && i<20)
            }
            
            let tempColor
            if(Math.random() > 0.30){
                tempColor = "blue"
            }
            else{
                tempColor = "red"
            }
            apples.push({color: tempColor, top: 0, left: templeft})
            apples = apples
            }
    }, Math.floor((Math.random()*500)+1000))

    setInterval(() => {
        if(playing){
            for(let apple of apples){
                if(apple.top >= 500){
                    apples.splice(apples.indexOf(apple), 1)
                    if(apple.color == "blue"){
                        health -= 1
                        updateHearts()
                        if(health <= 0){
                            gameOver()
                        }
                    }
                }
                if(apple.top == top && apple.left == left){
                    if(apple.color == "blue"){
                        apples.splice(apples.indexOf(apple), 1)
                        score += 1
                        startDropInterval()
                    }
                    else{
                        apples.splice(apples.indexOf(apple), 1)
                        health -= 1
                        updateHearts()
                        if(health <= 0){
                            gameOver()
                        }
                        
                    }
                }
            }
        apples = apples
        }
    }, 1)

    async function updateHearts(){
        hearts = []
        for(let i = 0; i < health; i++){
            hearts.push({img: "https://static.vecteezy.com/system/resources/thumbnails/041/453/828/small/ai-generated-heart-clipart-design-illustration-free-png.png"})
        }
        for(let i = 0; i < 3-health; i++){
            hearts.push({img: "https://static.thenounproject.com/png/4590951-200.png"})
        }
        hearts = hearts
        if(playing == true){
            hit = "red"
            await new Promise(r => setTimeout(r, 100))
            hit = "rgb(128, 128, 0)"
        }
    }

</script>


<div class="border">
    <main style="background-color: {hit};">
        {#if (startScreen == true)}
            <div class="GameOver" style="display: {visible};">
                <h1 class="GameOverText">Welcome to the "Apple" game</h1>
                <h2>Use the arrow keys or A and D to move</h2>
                <h3>Blue apples give you points, red apples end the game</h3>
                <h3>Good luck!</h3>
                
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <button class="newGame" on:mousedown={gameStart}>
                    <p>Start Game</p>
                </button>
            </div>
        {/if}
        {#if (startScreen == false)}
            <div class="GameOver" style="display: {visible}">
                <h1 class="GameOverText">Game Over</h1>
                <h2>Your score: {endScore} </h2>
                <h3>Highscore: {highscore}</h3>      
                
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <button class="newGame" on:mousedown={gameStart}>
                    <p>New Game</p>
                </button>
            </div>
        {/if}

        <div class="heartcontainer">
            {#each hearts as heart}
                <img src="{heart.img}" alt="heart" class="heart">
            {/each}
        </div>
    
        <h1 class="score">Score: {score}</h1>

        <img src="https://images.vexels.com/media/users/3/212671/isolated/preview/d21b04f6c3b25f122d825d960970961f-beige-basket-flat-illustration.png" alt="player" class="player" style="left: {left}px; top: {top}px">
    
        {#each apples as apple}
            {#if (apple.color == "blue")}
            <img src="https://clipart-library.com/new_gallery/90-903474_red-apple-emoji-icon.png" alt="apple" class="apple" style="left: {apple.left}px; top: {apple.top}px" >
            {/if}
            {#if (apple.color == "red")}
                <img src="https://www.pngkey.com/png/full/95-952795_clipart-cartoon-bomb-clipart.png" alt="bomb" class="apple" style="left: {apple.left}px; top: {apple.top}px">
            {/if}
        {/each}
    </main>
</div>


<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup|preventDefault={onKeyUp}/>

<style>
    .border{
        width: 520px;
        height: 520px;
        margin: 10px auto;
        border: solid rgb(26, 26, 26) 2px;
        background-color: rgb(26, 26, 26);
    }

	main {
		width: 500px;
		height: 500px;
        
        background-color: rgb(128, 128, 0);
		margin: 10px auto;
		position: relative;

        overflow: hidden;}

    .score{
        position: absolute;
        z-index: 1;
    }

	.player {
        scale: 1.5;
		width: 50px;
		height: 50px;
		position: absolute;
	}

    .apple {
        width: 50px;
        height: 50px;
        position: absolute;
    }

    .GameOver{
        flex-direction: column;
        justify-content:center; 
        align-items:center;

        
        width: 100%; 
        height: 100%; 
        position:absolute; 
        z-index: 2; 
        background-color: black; 
        opacity: 0.7;
    }

    .GameOverText{
        font-size: xx-large;
    }
    h2{
        padding-top: 5%;
        font-size: large;
    }
    h3{
        font-size: medium;
        padding-bottom: 5%;
    }

    .newGame{
        text-align: center;
        background-color: green; 
        width:25%; 
        height: 5%;
    }

    .heartcontainer{
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0px;
        left: 425px;
        z-index: 1;
    }
    .heart{
        width: 25px;
        height: 25px;
    }
</style>