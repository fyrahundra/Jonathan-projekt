<script>
	import '../app.postcss';
	import { base } from '$app/paths';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	console.log(base)

	let visible = false;

	function toggle(){
		visible = !visible
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<button on:click={toggle} class="arrow">
	{#if visible}
	↑
	{/if}
	{#if !visible}
	↓
	{/if}
</button>

<nav id="Bar" class="navBar" style="display: {visible ? "flex" : "none"};">
	<a href="{base}/">Hem</a>
	<a href="{base}/photoapp">Photo App</a>
	<a href="{base}/register">Register</a>
	<a href="{base}/login">Login</a>
	<a href="{base}/shopinglist">Shoppinglist</a>
	<a href="{base}/memory">Memory</a>
	<a href="{base}/chat">Chat bot</a>
	<a href="{base}/search">Search</a>
	<a href="{base}/bad-login">Bad Login</a>
	<a href="{base}/Spel">Spel</a>
	<a href="{base}/pinecone-emporium">Pinecone Emporium</a>
</nav>

<style>
	:global(body), :global(html){
	margin: 0%;
	padding: 0%;;
	height: 100%;
	width: 100%;
	}   
	
	.navBar{
		display: flex;
		width: 100%;
		height: 4.5%;
		align-items: center;
		justify-content: space-evenly;
		background-color: black;

		position: absolute;
		top: 0%;
		z-index: 10;
	}

	.navBar a:hover{
		font-size:larger;
		font-style:italic;
		color: rgb(75, 106, 132);
	}
	.navBar a:active{
		color: rgb(112, 159, 200);
	}

	.arrow{
		height:max-content;
		width:25px; 
		top: 0.7%;
		border-radius:50%; 
		background-color:black; 
		position:absolute; 
		z-index:12;
	}

</style>

<slot />
