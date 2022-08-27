<script lang="ts">
import { login_store , database } from '../src/stores';
import { Game, GameCanvas } from '../src/gomoku'
import { onMount } from 'svelte';
let canvasElement: HTMLCanvasElement
let gameState: string = 'initial'
onMount( () => {
     let gc = new GameCanvas(10, canvasElement, gameState)


 });

</script>


<canvas bind:this={canvasElement}/>


<button >Restart</button>
<button >Leave</button>
