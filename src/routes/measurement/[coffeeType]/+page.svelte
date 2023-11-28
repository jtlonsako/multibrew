<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";

    let {data} = $props()
    let {name, route, selectionLists, operation} = data.brewData

    //Declare an array of reactive selectors whose names correspond to the MIDDLE value of each selectionList level array
    let selectionVars = $state(
        selectionLists.map((list) => list.levels[list.levels.length % 2].Value)
        )

    let totalCoffeeGrounds = $derived(
        operation == "div" ?
        (selectionVars[1] / selectionVars[0]).toFixed(1)
        : selectionVars[1]
    )

    let totalWaterAmount = $derived(
        operation == "mult" ?
        (selectionVars[1] * selectionVars[0]).toFixed(1)
        : selectionVars[1]
    )

</script>
<div class="mt-10 flex flex-col place-items-center">
    {#each selectionLists as itemList, i}
        <SelectionList
            selectorName={itemList.name}
            selectorLevels={itemList.levels}
            bind:selectedLevelValue={selectionVars[i]}
            selectorLevelDescription={itemList.levelDescription}
        />
    {/each}
</div>

<FinalRecipeComponent 
    totalCoffeeGrounds={totalCoffeeGrounds} 
    totalWaterAmount={totalWaterAmount}
/>