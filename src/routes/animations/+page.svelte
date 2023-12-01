<script>
	import { quintInOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";


    let value = $state(0)
    let stringArray = ['One', 'Two', 'Three', 'Four']
    let adding = $state(true)

</script>

<div class="h-screen w-screen flex flex-row place-items-center text-slate-100 justify-around text-5xl">
    <button on:click={() => {--value; adding = false}} disabled={value == 0} class="p-20 {value == 0 ? 'text-zinc-500' : 'hover:bg-zinc-600'} rounded-lg">-</button>
    {#key value}
        <p in:fly={{x:adding ? 50 : -50, y:50, opacity:0}} out:fly={{x:adding ? -50 : 50, y:50, opacity:0, duration:350, easing:quintInOut}} class="absolute">{stringArray[value]}</p>
    {/key}
    <button on:click={() =>{ ++value; adding = true}} disabled={value == stringArray.length - 1} class="p-20 {value == 3 ? 'text-zinc-500' : 'hover:bg-zinc-600'} rounded-lg">+</button>
</div>