<script lang="ts">
import { login_store , gamesize_store, gamestate_store, database } from '../src/stores';
import { Game, GameCanvas } from '../src/gomoku'
import { onMount } from 'svelte';
let canvasElement: HTMLCanvasElement
let gc: GameCanvas

onMount( () => {
    gc = new GameCanvas($gamesize_store, canvasElement)
 });

</script>
<h1>{$gamestate_store}</h1>
<canvas bind:this={canvasElement}/>
<button >Restart</button>
<button >Leave</button>
