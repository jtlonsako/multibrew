<script>
    import { coffeeData } from "$lib/coffeeData";
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte"
    import DownArrowIcon from "$lib/components/icons/DownArrowIcon.svelte";

    let {data} = $props()
    let {name} = data.brewData
    let isOpen = $state(false)

</script>

<button on:click={() => isOpen = !isOpen} class="w-1/2 sm:w-1/3  md:w-1/4 lg:w-1/6 md:pt-5">
    <div class="flex flex-row py-1 text-slate-100 font-serif text-sm rounded-lg bg-zinc-700 justify-around place-items-center">
        <PourOverIcon />
            {name}
        <DownArrowIcon />
    </div>
</button>
{#if isOpen}
    <div class="absolute z-10 grid items-center my-10 md:my-14 bg-zinc-700 rounded-lg shadow-xl" >
        {#each coffeeData as brewType}
            <a href="/measurement/{brewType.route}" target="_self" class="block px-4 py-2 {brewType.route == "pour" ? "rounded-t-lg" : "rounded-b-lg"} text-slate-400 hover:bg-zinc-500 hover:text-white">
                {brewType.name}
            </a>
        {/each}
    </div>
{/if}

<slot />