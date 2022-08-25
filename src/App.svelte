<script lang="ts">
	export let name: string;
 import Router, {location, link} from 'svelte-spa-router';
 import Home from '../components/Home.svelte'
 import Login from '../components/Login.svelte'
 import Game from '../components/Game.svelte'
 import Games from '../components/Games.svelte'
 import GameLog from '../components/GameLog.svelte'

</script>

<nav>
	<a href="/">Gomoku</a>
	<a href="/#/Login">Login</a>
	<a href="/#/Game">Game</a>
	<a href="/#/Games">Games</a>
	<a href="/#/GameLog">GameLog</a>


</nav>

<Router routes={{
			   '/':Home,
			   '/Login':Login,
			   '/Game':Game,
			   '/Games':Games,
			   '/GameLog':GameLog
			   }}/>

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
