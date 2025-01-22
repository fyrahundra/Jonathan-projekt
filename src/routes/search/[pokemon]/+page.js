    
import { error } from '@sveltejs/kit';


/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = false;
export const prerender = false

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    /* params.pokemon matches to the [pokemon] in the filesystem */
    /* for example navigating to /search/pikachu in this example will put pikachu in params.pokemon */
    params.pokemon = params.pokemon.toLowerCase();

    console.log(params.pokemon);

    /* Perform a networked HTTP GET request to an external API  */
    /* Documentation: https://pokeapi.co */
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+params.pokemon, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc. 
    });
    /* If the response status is not 200, meaning did not find a pokemon, throw an error  */
    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }
    
    let data = await response.json(); // parses JSON response into native JavaScript objects
    //console.log(data);
    return { params, response: data }; 

}