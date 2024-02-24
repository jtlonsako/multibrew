<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import PourAmountComponent from "$lib/components/PourAmountComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";
    import Icon from "@iconify/svelte";
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
    let finalDisplayType = $state("pourInstruction")

    const ChangeSelectionType = (event, i) => {
        let chosenSelectedType = event.detail
        selectionTypes[i] = chosenSelectedType
        let itemListLevels = selectionLists[i].levels[chosenSelectedType]
        selectionVars[i] = itemListLevels[itemListLevels.length % 2].Value
    }

</script>
<div class="mt-7 md:mt-10 grid w-full justify-center">
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
{#if route === "pour"}
    {#if finalDisplayType === "quantity"}
        <div class="w-full grid grid-cols-11 md:grid-cols-5">
            <div class="col-span-2 md:col-span-1"></div>
            <div class="col-span-7 md:col-span-3 col-start-3">
                <FinalRecipeComponent 
                    totalCoffeeGrounds={finalRecipeResults[0]} 
                    totalWaterAmount = {finalRecipeResults[1]}
                /> 
            </div>
            <button class="w-full flex col-span-2 col-start-10 md:col-start-5 place-items-center justify-center" onclick={() => finalDisplayType='pourInstruction'}>
                <Icon icon="ic:outline-arrow-forward-ios" color="white" width="32" height="32" />
            </button>
        </div>
    {:else}
        <div class="w-full grid grid-cols-11 md:grid-cols-5">
            <button class=" w-full flex col-span-2 md:col-span-1 items-center justify-center" onclick={() => finalDisplayType='quantity'}>
                <Icon icon="ic:outline-arrow-back-ios" color="white" width="32" height="32" />
            </button>
            <div class="col-span-7 md:col-span-3 col-start-3">
                <PourAmountComponent 
                    totalCoffeeGrounds={finalRecipeResults[0]} 
                    totalWaterAmount={finalRecipeResults[1]}
                /> 
            </div>

        </div>
    {/if}

{:else}
    <FinalRecipeComponent 
        totalCoffeeGrounds={finalRecipeResults[0]} 
        totalWaterAmount = {finalRecipeResults[1]}
    />
{/if}
