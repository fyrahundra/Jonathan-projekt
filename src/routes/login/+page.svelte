<script>
    import {users_store} from "$lib/user";
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    
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
        <h1 >Har du inte ett konto? <a href="{base}/register" class="linkText">Skapa ett!</a></h1>
    </div>

</main>

<style>
    main{
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1061%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1062%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1536 560L0 560 L0 301.74Q43.13 272.87%2c 72 315.99Q78.97 250.96%2c 144 257.92Q210.52 204.44%2c 264 270.96Q329.32 264.28%2c 336 329.6Q382.5 256.11%2c 456 302.61Q539.62 266.23%2c 576 349.84Q604.69 258.52%2c 696 287.21Q744.89 264.11%2c 768 313Q796.56 269.56%2c 840 298.11Q914.6 252.71%2c 960 327.31Q962.15 257.47%2c 1032 259.62Q1061.84 217.45%2c 1104 247.29Q1200.66 223.95%2c 1224 320.62Q1262.49 239.11%2c 1344 277.6Q1392.47 254.08%2c 1416 302.55Q1491.24 257.8%2c 1536 333.04z' fill='rgba(19%2c 50%2c 112%2c 1)'%3e%3c/path%3e%3cpath d='M1464 560L0 560 L0 354.89Q89.81 324.7%2c 120 414.52Q143.94 318.46%2c 240 342.4Q291.4 273.8%2c 360 325.21Q410.8 304.01%2c 432 354.81Q498.63 301.44%2c 552 368.07Q619.65 363.72%2c 624 431.37Q638.57 325.94%2c 744 340.51Q809.39 285.9%2c 864 351.3Q945.81 313.11%2c 984 394.91Q1037.66 328.58%2c 1104 382.24Q1179.55 337.79%2c 1224 413.34Q1257.95 327.29%2c 1344 361.25Q1423 320.25%2c 1464 399.25z' fill='rgba(20%2c 65%2c 139%2c 1)'%3e%3c/path%3e%3cpath d='M1464 560L0 560 L0 470.16Q46.98 445.14%2c 72 492.13Q72.31 420.44%2c 144 420.74Q198.51 355.25%2c 264 409.76Q359.98 385.74%2c 384 481.71Q417.77 395.48%2c 504 429.24Q584.86 390.1%2c 624 470.96Q698.66 425.63%2c 744 500.29Q755.95 392.25%2c 864 404.2Q907.09 375.29%2c 936 418.38Q1017.71 380.09%2c 1056 461.79Q1112.14 445.94%2c 1128 502.08Q1137.37 439.45%2c 1200 448.82Q1239.74 368.56%2c 1320 408.29Q1365.2 381.49%2c 1392 426.69Q1457.57 420.25%2c 1464 485.82z' fill='rgba(76%2c 140%2c 220%2c 1)'%3e%3c/path%3e%3cpath d='M1560 560L0 560 L0 541.89Q67.46 489.35%2c 120 556.81Q157.35 474.16%2c 240 511.51Q264.4 463.91%2c 312 488.32Q370.04 474.36%2c 384 532.4Q426.63 503.02%2c 456 545.65Q513.59 531.24%2c 528 588.82Q556.05 544.88%2c 600 572.93Q630.86 483.79%2c 720 514.65Q739.87 462.52%2c 792 482.39Q859.99 430.38%2c 912 498.36Q993.23 507.59%2c 984 588.81Q982.15 514.96%2c 1056 513.11Q1084.45 469.56%2c 1128 498.02Q1219.62 469.64%2c 1248 561.26Q1269.56 510.82%2c 1320 532.38Q1356.37 448.75%2c 1440 485.11Q1516.92 442.04%2c 1560 518.96z' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1061'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1062'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(8%2c 53%2c 111%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
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
