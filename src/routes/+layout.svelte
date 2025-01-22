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
</script>

<nav class="navBar">
	<a href="{base}/">Hem</a>
	<a href="{base}/photoapp">Photo App</a>
	<a href="{base}/register">Register</a>
	<a href="{base}/login">Login</a>
	<a href="{base}/shopinglist">Shoppinglist</a>
	<a href="{base}/memory">Memory</a>
	<a href="{base}/chat">Chat</a>
	<a href="{base}/search">Search</a>
</nav>

<style>
	:global(body), :global(html){
	margin: 0%;
	padding: 0%;
	height: 100vh;
	width: 100vw;
	}   
	
	.navBar{
		display: flex;
		justify-content: space-evenly;
		background-color: black;
	}

	.navBar a:hover{
		font-size:larger;
		font-style:italic;
		color: rgb(75, 106, 132);
	}
	.navBar a:active{
		color: rgb(112, 159, 200);
	}

</style>

<slot />
