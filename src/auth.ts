// Create store for user

import { writable } from 'svelte/store';


const storedLogin = localStorage.getItem("login");

export const login_store = writable(storedLogin);
login_store.subscribe(val => localStorage.setItem("login", val));

export const database = [
     {
        username: 'admin',
        password: 'admin'
     }
 ]

