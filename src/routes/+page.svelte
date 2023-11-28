<script>
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte";
    import { coffeeData } from "$lib/coffeeData";
</script>

<div class="h-screen text-white">
    {#each coffeeData as brewMethod}
        <a href="/measurement/{brewMethod.route}" class=" grid justify-center rounded-sm bg-zinc-700 hover:bg-zinc-500 transition-all py-10 my-4">
            <p class="font-mono text-2xl text-zinc-50 ml-3">{brewMethod.name}</p>
        </a> 
    {/each}
</div>
