<script>
    import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";
    import WaterDropIcon from "./icons/WaterDropIcon.svelte";
    
        let {totalCoffeeGrounds, totalWaterAmount} = $props()
        let individualPourAmount = $derived(totalWaterAmount / 5)
    </script>
    
    <div id="RecipeContainer" class="w-full text-slate-100 grid justify-center font-medium font-mono text-5xl">
        <p class="text-base font-thin text-center mb-2">Final Recipe</p>
        <hr class="w-48 h-0 mx-auto opacity-30 rounded">

        <div id="MiniRecipeDisplay" class="w-full flex justify-center text-base mt-2">
            <div class=" w-80 grid grid-cols-12">
                <div class="col-span-1 font-mono flex">
                    <i class=""><WaterDropIcon displaySize="small" /></i>
                    <p class="">{totalWaterAmount}ml</p>
                </div>
                <div class="col-span-1 col-end-12 font-mono flex">
                    <i class=""><CoffeeBeanIcon size="extrasmall" /></i>
                    <p class="ml-1">{totalCoffeeGrounds}g</p>
                </div>
            </div>
        </div>
        
        <div class="w-full flex justify-center py-6">
            <p class="text-base font-extrabold bg-zinc-700 px-2 rounded-md">James Hoffmann: Simple Method</p>
        </div>
    
        <div id="PourAmountContainer" class="w-full grid justify-items-center text-xl font-mono">
            {#each Array(5) as item, i}
                <p class="pt-1">Pour {i + 1}: {individualPourAmount * (i + 1)}ml</p>
            {/each}
        </div>
    </div>
