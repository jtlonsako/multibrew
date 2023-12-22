<script>
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte";
    import VietnamesePhin from "$lib/components/icons/VietnamesePhin.svelte";
    import FrenchPress from "$lib/components/icons/FrenchPress.svelte";
    import { coffeeData } from "$lib/coffeeData";

</script>

<div class=" mt-3 grid justify-items-center font-serif text-3xl">
    <p class="font-serif text-2xl text-white">Select Brew Type</p>
    <hr class="w-52 mx-auto opacity-30 rounded my-3">
    {#each coffeeData as brewMethod, i}
        <a href="/measurement/{brewMethod.route}" class="grid justify-center justify-items-center rounded-lg bg-zinc-700 hover:bg-zinc-500 my-2 w-60 h-48">
            <div class="mt-4">
                {#if i == 0}
                    <PourOverIcon size="xl" />                    
                {:else if i == 1}
                    <VietnamesePhin />
                {:else}
                    <FrenchPress />
                {/if}
            </div>
            <p class="font-mono text-base text-zinc-50">{brewMethod.name}</p>
        </a> 
    {/each}
</div>

