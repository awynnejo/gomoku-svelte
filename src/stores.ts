
import { writable } from 'svelte/store';


// Create store for user
export const login_store = writable(null);

// Create store for game
export const game_store = writable(null);
// Create store for game history
export const gamehistory_store = writable(null);

export const database = [
     {
        username: 'admin',
        password: 'admin'
     }
 ]
