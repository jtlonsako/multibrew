<script>
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte"
    import DownArrowIcon from "$lib/components/icons/DownArrowIcon.svelte";

    let coffeeType = $state("Pour Over")
</script>

<button class="w-1/2 mt-10">
    <div class="flex flex-row py-1 text-slate-100 font-serif text-sm rounded-lg bg-zinc-700 justify-around place-items-center">
        <PourOverIcon />
            {coffeeType}
        <DownArrowIcon />
    </div>
</button>

<slot />

<style>

</style>