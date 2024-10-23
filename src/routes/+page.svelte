<script>
	let mittNamn = "Jonathan Karlgren"
</script>

<!--Delar upp sidan i två delar-->
<main>
	<div>

		<h1 class="name"> {mittNamn} </h1>
		<h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
		<h3>Inspirerade citat för min webbutvecklingsresa:</h3>
		<!--Under denna kommer vi lägga till fler element-->

		
		<p id="inspo">
			"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
		</p>

		<p style="background-color:pink">
			"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
		</p>
	</div>
    <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  

	
	<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
		<path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
	</svg>

</main>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="1" d="M0,128L20,128C40,128,80,128,120,138.7C160,149,200,171,240,154.7C280,139,320,85,360,80C400,75,440,117,480,144C520,171,560,181,600,165.3C640,149,680,107,720,117.3C760,128,800,192,840,213.3C880,235,920,213,960,176C1000,139,1040,85,1080,74.7C1120,64,1160,96,1200,101.3C1240,107,1280,85,1320,96C1360,107,1400,149,1420,170.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>

<style>
	main{
		/*Styling för att dela upp sidan i två delar. */
		/*Vi kommer gå igenom detta i detalj senare*/
		margin: auto;
		width: 80vw;
		height: 70vh;
		display: grid;
		grid-template-columns: repeat(2,50%);
		overflow: hidden;

	}
	div{
		/*Styling för att centrera texten i behållaren*/
		margin: auto;
	}

	#inspo{
		font-family: courier;
		font-size: 160%;
	}

	span{
		color: green;
	}

	h1,h2,h3,p {
		display: inline-block;
		margin: 10px;
	}

	.name {
		font-family:'Gill Sans';
		font-size: 50px; 
	}

	
	h1{
		color:grey;
	}
	h2{
		color: rgb(255, 165, 0);
	}
	h3{
		color: #3cb371;
		font-family: sans-serif;
		font-weight: bold;
	}




</style>
