<script>
    import { base } from '$app/paths';


    let kottar = [
        {name: "Tallkotte", price: 60, img: "https://img.fruugo.com/product/5/27/1700472275_0340_0340.jpg", amount: 1},
        {name: "Stor Tallkotte", price: 100, img: "https://www.kransmakaren.se/bilder/artiklar/7133.jpg?m=1710277924", amount: 1},
        {name: "Grankotte", price: 80, img: "https://www.floristik24.se/media/images/popup/Fichtenzapfen-Natur-10kg-503_1.jpg", amount: 1},
        {name: "Lärkkotte", price: 90, img: "https://kristinasscrapbooking.se/images/zoom/50250_5.jpg", amount: 1},
        {name: "Lyx kotte", price: 30000, img: "https://eldabutiken.cdn.storm.io/a5ba665a-2de4-4011-b0e3-99039c2a2fef/hem%20och%20inredning-tommre-kotte-lykta-sandgr-eldabutiken.png?w=1000", amount: 1},
        {name: "Sequoia kotte", price: 80, img: "https://03.cdn37.se/mL/images/2.272500/zqare-sequoiatradkottar-300-g-ca-15-st.jpeg", amount: 1},
        {name: "Farlig kotte", price: 500, img: "https://nycdn.nyehandel.se/store_a8bb5895-4daf-4735-8c62-c71aa5a01004/images/sfUWsNz7m27D9kw1682325029.jpeg?width=800&height=800", amount: 1},
        {name: "Cypress kotte", price: 70, img: "https://www.floristik24.se/media/images/popup/Zypressen-Zapfen-Natur-3cm-500g-2271.jpg", amount: 1},
        {name: "Ängel kotte", price: 2000, img: "https://www.lekolar.se/globalassets/inriver/resources/pt_1590_114387.jpg", amount: 1},
        {name: "Igelkotte", price: 1000, img: "https://a.1stdibscdn.com/walter-bosse-hedgehog-stackable-ashtray-set-for-bertha-baller-1955-for-sale/f_61002/f_408653421722439396188/f_40865342_1722439396874_bg_processed.jpg?width=768", amount: 1},
        {name: "Hemlock-kotte", price: 90, img: "https://cdn.pixabay.com/photo/2021/09/01/15/39/pine-cone-6591668_640.jpg", amount: 1},
        {name: "Douglas kotte", price: 70, img: "https://www.floristik24.se/media/images/popup/Douglas-Zapfen-1kg-57241.jpg", amount: 1},
        {name: "Rosa kotte", price: 100, img: "https://images.nexusapp.co/assets/92/81/38/186029216.jpg", amount: 1},
        {name: "Kotte lampa", price: 500, img: "https://miljogarden.se/wp-content/uploads/2022/02/belysning-ph-84-kotte-taklampa-koppar-louis-poulsen.jpg", amount: 1},
        {name: "Sockertallskotte", price: 80, img: "https://03.cdn37.se/mL/images/2.204113/sockertallskotte-xl-20-28-cm.jpeg", amount: 1},
        {name: "Glad kotte", price: 1000000, img: "https://www.barnkalaset.se/pub_images/original/A3PCN.jpg", amount: 1},
    ]

    let cart = []

    let total = 0
    let totalAmount = 0

    let bought = false

    let visibleList = false

    function showCart(){
        visibleList = !visibleList
    }

    function buy(){
        cart = []
        total = 0
        totalAmount = 0
        kottar.forEach(kotte => {
            kotte.bought = false
            kotte.amount = 1
        });
    }

    function updateList(target){
            total = 0
            totalAmount = 0

            bought = true

            setTimeout(() => {
                bought = false
            }, 500)

            console.log(target.bought)
            if(cart.includes(target)){
                cart[cart.indexOf(target)].amount++
            }
            else{
                cart.push(target)
            }
            for(let i = 0; i<cart.length; i++){
                total += cart[i].price * cart[i].amount
                totalAmount += cart[i].amount
            }
            cart = cart
    }

    function updateAmount(){
        total = 0
        totalAmount = 0
        for(let i = 0; i<cart.length; i++){
                total += cart[i].price * cart[i].amount
                totalAmount += cart[i].amount
            }
        cart = cart
    }

    function add(target){
        target.amount++
        updateAmount()
    }

    function subtract(target){
        if(target.amount > 1){
            target.amount--
        }
        else{
            cart.splice(cart.indexOf(target), 1)
        }
        updateAmount()
    }
</script>

<main class="backdrop">
    <div class="shop">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="bar">
            <h1 class="title">Pinecone Emporium</h1>
            <p class="divider1">|</p>
            <div class="info">
                <a href="{base}/pinecone-about-us">About us</a>
            </div>
            <p class="divider2">|</p>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button on:click={() => showCart()}>
                <img src="https://blogg.loopia.se/wp-content/uploads/2020/01/shopping-cart@4x.png" alt="Shopping cart" class="shoppingCart">
            </button>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button class="cartAmount" class:bought = {bought} on:click={() => showCart()}>
                {#if (totalAmount <= 9)}
                <p>{totalAmount}</p>
                {/if}
                {#if (totalAmount > 9)}
                    <p>9+</p>
                {/if}
            </button>
        </div>

        <div class="shoppingList" style="display: {visibleList ? 'block' : 'none'};">
            <div style="height: 75%; overfill-y: scroll; margin-top: 10px; position:absolute;">
                {#each cart as item}
                    <div style="display:flex; flex-direction:row; justify-content: space-around;">
                        <img src={item.img} alt={item.name} style="width: 50px; height: 50px;">
                        <div style="display: flex; flex-direction: column;">
                            <p>{item.name} x{item.amount}</p>
                            <p>{item.price}kr</p>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <button class="change" on:click={add(item)}>+</button>
                            <button class="change" on:click={subtract(item)}>-</button>
                        </div>
                    </div>
                    
                {/each}
            </div>
            
            <div class="checkout">
                <h1>Total: 
                    <p>{total}kr</p>
                </h1>
                <button style="background-color:green;" on:click={() => buy()}>Checkout</button>
            </div>
        </div>

        <div class="container">
            {#each kottar as kotte}
                <div>
                    <p>
                        <img src={kotte.img} alt={kotte.name} class="kotte">
                        {kotte.name} - {kotte.price}kr
                    </p>
                    <button on:click={() => updateList(kotte)} style="background-color:green;" class="buy">Add to cart</button>
                </div>
            {/each}
        </div>
    </div>
</main>


<style>
    .backdrop{
        width: 100%;
        height: 100%;
        background-image: url(https://wallpapers.com/images/featured/cartoon-skog-bakgrund-0xhrzw9zvozynyqh.jpg);
        background-size:auto;
        position: absolute;
    }

    .shop{
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;

        overflow-y: scroll;
        overflow-x: hidden;

        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .bar{
        background-color: rgb(1, 98, 1);
        height: 5%;
        width: 100%;
        display: grid;
        grid-template-columns: 10fr 0.3fr 1fr 0.5fr 2fr 0.25fr;
        align-items: center;

        position: relative;
    }

    .title{
        text-align: center; 

        position:absolute;
        left: 30%;
    }

    .divider1{
        position: absolute;
        left:65%;
    }
    .divider2{
        position: absolute;
        left:80%;
    }

    .info{
        position: absolute;
        left: 70%;
    }

    .shoppingCart{
        width: 3%;
        height: 99%;

        position: absolute;

        left: 89%;
        top: 2%;
    }

    .shoppingList{
        display: flex;
        justify-content: center;
        flex-direction: column;

        text-align: center;

        width: 50%;
        height: 41%;
        max-width: 300px;
        min-height: 41%;
        max-height: 300px;

        right: 1%;
        top: 4%;

        margin-left: 60%;

        background-color: rgb(64, 91, 113);

        border-radius: 10px;
        border: solid 2px white;

        position: absolute;
        z-index: 2;
    }

    .checkout{
        background-color: rgb(64, 111, 113); 
        border-radius: 0px 0px 10px 10px; 
        position:absolute; 
        width: 100%;
        top: 75%;
        height: 25%;
    }

    .change{
        border: solid 1px black;
        color: black;
        border-radius: 90%;

        width: 20px;
    }

    .change:hover{
        border: solid 1px white;
        color: white;
    }

    .container{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4,1fr);
        gap: 10px;
        margin-top: 10px;
        text-align: center;
        position: relative;

        justify-content: center;
    }

    .kotte{
        width: 100px;
        height: 100px;
        margin: auto;
    }

    .buy{
        background-color: green;
        border-radius: 10px;
        color: white;
        padding: auto;
    }

    .buy:hover{        
        transform: scale(1.1);
    }

    .cartAmount{
        background-color: red;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        left: 90.5%;
        top: 40%;
    }


    .bought{
        animation-name: buyScale;
        animation-duration: 500ms;
        animation-timing-function: linear;
    }

    @keyframes buyScale{
        0%{transform: scale(1);}
        50%{transform: scale(1.3);}
        100%{transform: scale(1);}
    }

    @media screen and (max-width: 1000px){
        .info{
            font-size: small;
            left: 67%;
        }
        .bar{
            background-color: rgb(1, 98, 1);
            height: 7%;
            width: 100vw;
            display: grid;
            grid-template-columns: 10fr 0.3fr 1fr 0.5fr 2fr 0.25fr;
            justify-content: space-evenly;
            align-items: center;

            z-index: 5;

            position: absolute;
        }
        .checkout{
            background-color: rgb(64, 111, 113); 
            border-radius: 0px 0px 10px 10px; 
            position:absolute; 
            width: 100%;
            top: 75%;
            height: 80%;
        }
        .shop{
            background-color: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100%;

            overflow-y: scroll;
            overflow-x: hidden;

            align-items: center;
            display: flex;
            flex-direction: column;
        }
        .container{
            display: grid;
            width: 100%;
            grid-template-columns: repeat(4,1fr);
            gap: 10px;
            margin-top: 10px;
            top: 10%;
            text-align: center;
            position: relative;

            justify-content: center;
        }
    }
    @media screen and (max-width: 700px){
        .bar{
            background-color: rgb(1, 98, 1);
            height: 7%;
            width: 100vw;
            display: grid;
            grid-template-columns: 3fr 0.3fr 1fr 0.5fr 2fr 0.25fr;
            align-items: center;

            z-index: 5;

            position: absolute;
        }
        .checkout{
            background-color: rgb(64, 111, 113); 
            border-radius: 0px 0px 10px 10px; 
            position:absolute; 
            width: 100%;
            top: 75%;
            height: 20%;
        }
        .shop{
            background-color: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100%;

            overflow-y: scroll;
            overflow-x: hidden;

            align-items: center;
            display: flex;
            flex-direction: column;
        }
        .container{
            display: grid;
            width: 100%;
            grid-template-columns: repeat(4,1fr);
            gap: 10px;
            margin-top: 10px;
            top: 10%;
            text-align: center;
            position: relative;

            justify-content: center;
        }
        .shoppingCart{
            width: 10%;
            height: 99%;

            position: absolute;

            left: 85%;
            top: 2%;
        }
        .info{
            font-size: small;
            left: 62%;
        }
        .divider1{
            position: absolute;
            left:59%;
        }
        .divider2{
            position: absolute;
            left:79%;
        }
        .title{
            text-align: center; 

            position:absolute;
            left: 7%;
        }
    }
</style>