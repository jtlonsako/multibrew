<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";
	import WaterDropIcon from "$lib/components/icons/WaterDropIcon.svelte";

    let {data} = $props()
    let {name, route, selectionLists, operation} = data.brewData

    //Declare an array of reactive selectors whose names correspond to the MIDDLE value of each selectionList level array
    let selectionVars = $state(
        selectionLists.map((list) => {
            let selectionOptions = list.levels[list.defaultPicker]
            return selectionOptions[selectionOptions.length % 2].Value
        }))

    //Declare an array of selectionTypes that track what "type" the current SelectionList
    //represents (ie. "water" or "g/L" or "coffee grounds")
    let selectionTypes = $state(selectionLists.map((list) => list.defaultPicker))

    //DO LATER: add a third parameter, "water/coffee", that tells the function whether size is seleced
    // via coffee ground amounts or water amounts
    let finalRecipeResults = $derived(operation(selectionVars[0], selectionVars[1], selectionTypes[1]))

</script>
<div class="mt-10 flex flex-col place-items-center">
    {#each selectionLists as itemList, i}
        <SelectionList
            selectorName={itemList.name}
            selectorLevels={itemList.levels[itemList.defaultPicker]}
            bind:selectedLevelValue={selectionVars[i]}
            bind:defaultPicker={selectionTypes[i]}
            selectorLevelDescription={itemList.levelDescription}
        />
    {/each}
</div>

<FinalRecipeComponent 
    totalCoffeeGrounds={finalRecipeResults[0]} 
    totalWaterAmount={finalRecipeResults[1]}
/>

<WaterDropIcon />