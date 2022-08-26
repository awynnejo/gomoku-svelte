<script lang="ts">
	export let name: string;
 import Router, {location, link} from 'svelte-spa-router';
 import { wrap } from 'svelte-spa-router/wrap';
 import Home from '../components/Home.svelte'
 import Login from '../components/Login.svelte'
 import Game from '../components/Game.svelte'
 import Games from '../components/Games.svelte'
 import GameLog from '../components/GameLog.svelte'
 import { login_store } from './stores'

 const routes: any = {
				'/': wrap({
					component: Home,
					conditions: [(detail) => {
						return true
					}]
					}),
				'/Login': wrap({
					component: Login,
					conditions: [(detail) => {
						return true
					}]
					}),
				'/Game': wrap({
					component: Game,
					conditions: [(detail) => {
						if ($login_store == null) {
							return false
						}
						else {
							return true
						}
					}]
					}),
				'/Games': wrap({
					component: Games,
					conditions: [(detail) => {
						if ($login_store == null) {
							return false
						}
						else {
							return true
						}
					}]
					}),
				'/GameLog': wrap({
					component: GameLog,
					conditions: [(detail) => {
						if ($login_store == null) {
							return false
						}
						else {
							return true
						}
					}]
					})
			}



</script>

<nav>
	<a href="/">Gomoku</a>
	<a href="/#/Login">Login</a>
	<a href="/#/Game">Game</a>
	<a href="/#/Games">Games</a>
	<a href="/#/GameLog">GameLog</a>
	<br>
	{#if $login_store != null}
	<h3> User: {JSON.stringify($login_store.username, null, 2)}</h3>
	{/if}
</nav>

<Router {routes}/>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
