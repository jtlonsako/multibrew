<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";

    let {data} = $props()
    let {name, strengthLevels, sizeLevels, operation} = data.brewData

    console.log
    let strengthKeys = Object.keys(strengthLevels)
    let sizeKeys = Object.keys(sizeLevels)

    let selectedStrength = $state(strengthKeys[strengthKeys.length % 2])
    let selectedSize = $state(sizeKeys[sizeKeys.length % 2])
    let totalCoffeeGrounds = $derived(
        operation == "div" ?
        Math.floor(sizeLevels[selectedSize] / strengthLevels[selectedStrength])
        : sizeLevels[selectedSize]
    )

    let totalWaterAmount = $derived(
        operation == "mult" ?
        sizeLevels[selectedSize] * strengthLevels[selectedStrength]
        : sizeLevels[selectedSize]
    )

</script>


<div class="mt-10 flex flex-col place-items-center">
    <SelectionList 
        selectorName="Strength" 
        selectorLevels={strengthLevels} 
        bind:selectedLevel={selectedStrength} 
        keyNaming={true}
        addSubstring="secondary"
        preString="1:"
    />

    <SelectionList 
        selectorName="Size" 
        selectorLevels={sizeLevels} 
        bind:selectedLevel={selectedSize} 
        keyNaming={false}
        addSubstring="main"
        postString="ml"
    />
</div>

<FinalRecipeComponent 
    totalCoffeeGrounds={totalCoffeeGrounds} 
    totalWaterAmount={totalWaterAmount}
/>