<script lang="ts">
    import { fly } from 'svelte/transition';
    import { sineIn, sineOut } from 'svelte/easing';
    import Icon from "@iconify/svelte";
    import { currentBrewMethod } from '$lib/globalState'
    import { coffeeData } from "$lib/coffeeData";
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import PourAmountComponent from "$lib/components/PourAmountComponent.svelte";
    import StopwatchComponent from "$lib/components/StopwatchComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";
    import { page } from "$app/stores";
	import WaterDropIcon from "$lib/components/icons/WaterDropIcon.svelte";
	import { onMount } from 'svelte';

    //let {data} = $props()

    let tempVar = $derived(coffeeData.find((brewMethod) => brewMethod.route === $currentBrewMethod))

    // let {name, route, selectionLists, operation} = data.brewData
    let route = $derived(tempVar.route)
    let selectionLists = $derived(tempVar.selectionLists)
    let operation = $derived(tempVar.operation)

    //Declare an array of selectionTypes that track what "type" the current SelectionList
    //represents (ie. "water" or "g/L" or "coffee grounds")
    let selectionTypes = $derived(selectionLists.map((list) => list.defaultPicker))
    let featureSwitchButton = $state("");

    //Declare an array of reactive selectors whose names correspond to the MIDDLE value of each selectionList level array
    let selectionVars = $derived(
        selectionLists.map((list, i) => {
            let selectionOptions = list.levels[selectionTypes[i]]
            return selectionOptions[selectionOptions.length % 2].Value
        }))

    let finalRecipeResults = $derived(operation(selectionVars[0], selectionVars[1], selectionTypes[1]))
    // let finalDisplayType = $state("quantity")
    let finalDisplayType = $state("quantity")

    const ChangeSelectionType = (event, i) => {
        let chosenSelectedType = event.detail
        selectionTypes[i] = chosenSelectedType
        let itemListLevels = selectionLists[i].levels[chosenSelectedType]
        selectionVars[i] = itemListLevels[itemListLevels.length % 2].Value
    }

</script>
<div class="mt-7 md:mt-10 grid w-full justify-center">
    {#key selectionLists}
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
    {/key}
</div>
{#if route === "pour"}
    {#if finalDisplayType === "quantity"}
        <div class="w-full grid grid-cols-10 md:grid-cols-5">
            <div class="col-span-1 md:col-span-1"></div>
            <div class="col-span-8 md:col-span-3 col-start-2" in:fly={{x: -500, duration: 350, opacity: 0}} out:fly={{x: -500, duration: 350, easing: sineOut, opacity: 0}}>
                <FinalRecipeComponent 
                    totalCoffeeGrounds={finalRecipeResults[0]} 
                    totalWaterAmount = {finalRecipeResults[1]}
                /> 
            </div>
            <button class="w-full flex col-span-1 col-start-10 md:col-start-5 place-items-center justify-center" onclick={() => {
                finalDisplayType='pourInstruction';
                featureSwitchButton = 'right';
            }}>
                <Icon icon="ic:outline-arrow-forward-ios" color="white" width="32" height="32" />
            </button>
        </div>
    {:else if finalDisplayType === "pourInstruction"}
        <div class="w-full grid grid-cols-10 md:grid-cols-5" >
            <button class=" w-full flex col-span-1 md:col-span-1 items-center justify-center" onclick={() => {
                finalDisplayType='quantity';
                featureSwitchButton = 'left';
            }}>
                <Icon icon="ic:outline-arrow-back-ios" color="white" width="32" height="32" />
            </button>
            <div class="col-span-8 md:col-span-3 col-start-2" in:fly={{x: (featureSwitchButton == "left" ? -500 : 500), duration: 350, easing: sineIn, opacity: 0}} out:fly={{x: (featureSwitchButton == "left" ? 500 : -500), duration: 350, easing: sineOut, opacity: 0}}>
                <PourAmountComponent 
                    totalCoffeeGrounds={finalRecipeResults[0]} 
                    totalWaterAmount={finalRecipeResults[1]}
                /> 
            </div>
            <button class="w-full flex col-span-1 col-start-10 md:col-start-5 place-items-center justify-center" onclick={() => {
                finalDisplayType='stopwatch';
                featureSwitchButton = 'right';
            }}>
                <Icon icon="ic:outline-arrow-forward-ios" color="white" width="32" height="32" />
            </button>
        </div>
    {:else if finalDisplayType === "stopwatch"}
    <div class="w-full grid grid-cols-10 md:grid-cols-5" >
        <button class=" w-full flex col-span-1 md:col-span-1 items-center justify-center" onclick={() => {
            finalDisplayType='pourInstruction';
            featureSwitchButton = 'left';
        }}>
            <Icon icon="ic:outline-arrow-back-ios" color="white" width="32" height="32" />
        </button>
        <div class="col-span-8 md:col-span-3 col-start-2" in:fly={{x: 500, duration: 350, opacity: 0}} out:fly={{x: 500, duration: 350, opacity: 0}}>
            <StopwatchComponent 
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
