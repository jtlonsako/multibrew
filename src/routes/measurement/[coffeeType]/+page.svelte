<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";

    let {data} = $props()
    let {name, route, selectionLists, operation} = data.brewData

    //Declare an array of reactive selectors whose names correspond to the MIDDLE value of each selectionList level array
    let selectionVars = $state(selectionLists.map((list) => Object.keys(list.levels)[Object.keys(list.levels).length % 2]))

    let selectedStrength = $state("Normal")
    let totalCoffeeGrounds = $derived(
        operation == "div" ?
        Math.floor(selectionLists[1].levels[selectionVars[1]] / selectionLists[0].levels[selectionVars[0]])
        : selectionLists[1].levels[selectionVars[1]]
    )

    let totalWaterAmount = $derived(
        operation == "mult" ?
        selectionLists[1].levels[selectionVars[1]] * selectionLists[0].levels[selectionVars[0]]
        : selectionLists[1].levels[selectionVars[1]]
    )

</script>

<div class="mt-10 flex flex-col place-items-center">
    {#each selectionLists as itemList, i}
        <SelectionList
            selectorName={itemList.name}
            selectorLevels={itemList.levels}
            bind:selectedLevel={selectionVars[i]}
            keyNaming={itemList.keyNaming}
            addSubstring={itemList.addSubstring}
            preString={itemList.preString}
            postString={itemList.postString}
        />
    {/each}
</div>

<FinalRecipeComponent 
    totalCoffeeGrounds={totalCoffeeGrounds} 
    totalWaterAmount={totalWaterAmount}
/>