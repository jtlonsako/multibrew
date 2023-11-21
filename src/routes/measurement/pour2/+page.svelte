<script>
    import FinalRecipeComponent from "$lib/components/FinalRecipeComponent.svelte";
    import SelectionList from "$lib/components/SelectionList.svelte";

    const strengthLevels = {
        "Light": 18,
        "Medium": 16,
        "Strong": 15
    }

    const sizeLevels = {
        "Short": 227,
        "Tall": 320,
        "Grande": 424
    }

    let selectedStrength = $state("Medium") //selectedStrength = index of current selection in strength level
    let selectedSize = $state("Tall") //selectedSize = index of current selection of size level
    let totalCoffeeGrounds = $derived(Math.floor(sizeLevels[selectedSize] / strengthLevels[selectedStrength]))
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
    totalWaterAmount={sizeLevels[selectedSize]}
/>