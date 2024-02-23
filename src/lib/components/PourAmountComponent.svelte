<script>
    import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";
    import WaterDropIcon from "./icons/WaterDropIcon.svelte";
    
        let {totalCoffeeGrounds, totalWaterAmount} = $props()
        // let individualPourAmount = $derived(totalWaterAmount / 5)'
        let firstPourAmount = $derived(Math.floor(totalWaterAmount / 5))
        let divisiblePourAmount = $derived((totalWaterAmount - firstPourAmount) / 4)

    </script>
    
    <div id="RecipeContainer" class="w-full text-slate-100 grid justify-items-center font-medium font-mono text-5xl">
        <p class="text-base font-thin text-center mb-2">Final Recipe</p>
        <hr class="w-48 h-0 mx-auto opacity-30 rounded">

        <div id="MiniRecipeDisplay" class="w-full flex justify-center text-base mt-2">
            <div class=" w-80 grid grid-cols-12">
                <div class="col-span-1 font-mono flex">
                    <i class=""><CoffeeBeanIcon size="extrasmall" /></i>
                    <p class="ml-1">{totalCoffeeGrounds}g</p>
                </div>
                <div class="col-span-1 col-end-12 font-mono flex">
                    <i class=""><WaterDropIcon displaySize="small" /></i>
                    <p class="">{totalWaterAmount}ml</p>
                </div>
            </div>
        </div>
        
        <div class="w-full flex justify-center py-6">
            <p class="text-base font-extrabold bg-zinc-700 px-2 rounded-md">James Hoffmann: Simple Method</p>
        </div>
    
        <div id="PourAmountContainer" class="w-full grid justify-items-center text-xl font-mono">
            <div class="flex">
                <p class="pt-1">Pour 1: {firstPourAmount}ml</p>
                <p class="ml-5 text-green-400">+{firstPourAmount}ml</p>
            </div>
            {#each Array(4) as item, i}
                <div class="flex">
                    <p class="pt-1">Pour {i + 2}: {firstPourAmount + divisiblePourAmount * (i + 1)}ml</p>
                    <p class="ml-5 text-green-400">+{divisiblePourAmount}ml</p>
                </div>
            {/each}
        </div>
    </div>
