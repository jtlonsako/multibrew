<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";
	import WaterDropIcon from "$lib/components/icons/WaterDropIcon.svelte";

    let {data} = $props()
    let {name, route, selectionLists, operation} = data.brewData

    //Declare an array of selectionTypes that track what "type" the current SelectionList
    //represents (ie. "water" or "g/L" or "coffee grounds")
    let selectionTypes = $state(selectionLists.map((list) => list.defaultPicker))

    //Declare an array of reactive selectors whose names correspond to the MIDDLE value of each selectionList level array
    let selectionVars = $state(
        selectionLists.map((list, i) => {
            let selectionOptions = list.levels[selectionTypes[i]]
            return selectionOptions[selectionOptions.length % 2].Value
        }))

    let finalRecipeResults = $derived(operation(selectionVars[0], selectionVars[1], selectionTypes[1]))

    const ChangeSelectionType = (event, i) => {
        let chosenSelectedType = event.detail
        selectionTypes[i] = chosenSelectedType
        let itemListLevels = selectionLists[i].levels[chosenSelectedType]
        selectionVars[i] = itemListLevels[itemListLevels.length % 2].Value
    }

</script>
<div class="mt-7 md:mt-10 flex flex-col place-items-center">
    {#each selectionLists as itemList, i}
        {#key selectionTypes[i]}
            <SelectionList
                selectorName={itemList.name}
                selectorLevels={itemList.levels[selectionTypes[i]]}
                bind:selectedLevelValue={selectionVars[i]}
                selectorLevelDescription={itemList.levelDescription}
                bind:selectionListType={selectionTypes[i]}
                on:SwitchSelectionType={(event) => {ChangeSelectionType(event, i)}}
            />
        {/key}
    {/each} 
</div>

<FinalRecipeComponent 
    totalCoffeeGrounds={finalRecipeResults[0]} 
    totalWaterAmount={finalRecipeResults[1]}
/>