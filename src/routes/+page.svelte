<script>
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte";
    import { coffeeData } from "$lib/coffeeData";
</script>

<div class=" mt-10 grid justify-items-center font-serif text-3xl">
    <p class="font-serif text-2xl text-white">Select Brew Type</p>
    <hr class="w-52 mx-auto opacity-30 rounded my-3">
    {#each coffeeData as brewMethod}
        <a href="/measurement/{brewMethod.route}" class="grid justify-center rounded-lg bg-zinc-700 hover:bg-zinc-500 my-2 w-60 h-48">
            <div class="mt-4">
                <PourOverIcon size="xl" />
            </div>
            <p class="font-mono text-base text-zinc-50">{brewMethod.name}</p>
        </a> 
    {/each}
</div>

