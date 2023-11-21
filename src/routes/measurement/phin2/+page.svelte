<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";

    const strengthLevels = {
        "Light": 7,
        "Normal": 8,
        "Strong": 9
    }

    const sizeLevels = {
        "Small": 12,
        "Medium": 14,
        "Large": 16
    }

    let selectedStrength = $state("Normal") //selectedStrength = index of current selection in strength level
    let selectedSize = $state("Medium") //selectedSize = index of current selection of size level
    let totalWaterAmount = $derived(sizeLevels[selectedSize] * strengthLevels[selectedStrength])
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
        postString="g"
    />
</div>

<FinalRecipeComponent 
    totalCoffeeGrounds={sizeLevels[selectedSize]} 
    totalWaterAmount={totalWaterAmount}
/>