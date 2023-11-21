<script>
import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";

    let {totalCoffeeGrounds, totalWaterAmount} = $props()
</script>

<div id="RecipeContainer" class="w-5/6 text-slate-100 place-content-center mb-14 font-medium text-5xl font-mono">
    <p class="text-base font-thin text-center mb-2">Final Recipe</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="CoffeeGroundValue" class="text-center mt-6">
        <p class="">{totalCoffeeGrounds}g</p>
        <div class="flex flex-row justify-center place-items-center mt-2">
            <CoffeeBeanIcon /> 
            <p class="px-2 font-extralight text-sm italic">Grounds</p>
        </div>
    </div>

    <div id="WaterValue" class="text-center mt-6">
        <p class="">{totalWaterAmount}ml</p>
        <div class="flex flex-row justify-center place-items-center mt-2">
            <p class="px-2 font-extralight text-sm italic">Water</p>
        </div>
    </div>
</div>