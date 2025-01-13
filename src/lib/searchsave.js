import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const search = browser ? window?.sessionStorage.getItem('search') ?? "" : ""

export const search_store = writable(search)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        search_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.sessionStorage.setItem('search', value);
        })
}