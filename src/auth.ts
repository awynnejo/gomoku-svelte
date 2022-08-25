// Create store for user

import { writable } from 'svelte/store';

export const store = writable(null);

export const database = [
     {
        username: 'admin',
        password: 'admin'
     }
 ]

