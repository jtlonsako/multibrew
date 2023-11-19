<script>
    import CoffeeBeanIcon from "$lib/components/CoffeeBeanIcon.svelte";

const strengthLevels = {
    "Light": 18,
    "Medium": 16,
    "Strong": 15
}


const sizeLevels = {
    "Short": 227,
    "Tall": 320,
    "Grande": 454
}

let selectedStrength = $state(1) //selectedStrength = index of current selection in strength level
let selectedSize = $state(1) //selectedSize = index of current selection of size level
let totalCoffeeGrounds = $derived(Math.floor(Object.values(sizeLevels)[selectedSize] / Object.values(strengthLevels)[selectedStrength]))

</script>

<div id="StrengthContainer" class="w-5/6 text-slate-100 place-content-center mt-10 mb-14">
    <p class="text-base font-thin text-center mb-1"> Strength </p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="StrengthValuesContainer" class="flex flex-row justify-center mt-4">
        <button id="Light" on:click={() => selectedStrength = 0} class="px-10 font-extralight {selectedStrength == 0 ? "text-3xl": "text-zinc-500 text-base mt-4"}
             grid grid-cols-1 justify-items-center">
            <p>Light</p>
            <p class="text-sm font-thin italic">1:{strengthLevels["Light"]}</p>
        </button>        
        
        <button id="Medium" on:click={() => selectedStrength = 1} class="px-10 font-extralight {selectedStrength == 1 ? "text-3xl": "text-zinc-500 text-base mt-4"}
             grid grid-cols-1 justify-items-center">
            <p>Medium</p>
            <p class="text-sm font-thin italic">1:{strengthLevels["Medium"]}</p>
        </button>
        
        <button id="Strong" on:click={() => selectedStrength = 2} class="px-10 font-extralight {selectedStrength == 2 ? "text-3xl": "text-zinc-500 text-base mt-4"}
             grid grid-cols-1 justify-items-center">
            <p>Strong</p>
            <p class="text-sm font-thin italic">1:{strengthLevels["Strong"]}</p>
        </button>
    </div>

</div>

<div id="SizeContainer" class="w-5/6 text-slate-100 place-content-center mb-14">
    <p class="text-base font-thin text-center mb-2">Size</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="SizeValuesContainer" class="flex flex-row justify-center mt-4">
        <button id="Short" on:click={() => selectedSize = 0} class="px-10 font-extralight {selectedSize == 0 ? "text-3xl": "text-zinc-500 text-base mt-4"}
             grid grid-cols-1 justify-items-center">
             <p>{sizeLevels["Short"]}ml</p>
             <p class="text-sm font-thin italic">Short</p>
        </button>        
        
        <button id="Tall" on:click={() => selectedSize = 1} class="px-10 font-extralight {selectedSize == 1 ? "text-3xl": "text-zinc-500 text-base mt-4"}
             grid grid-cols-1 justify-items-center">
             <p>{sizeLevels["Tall"]}ml</p>
             <p class="text-sm font-thin italic">Tall</p>
        </button>
        
        <button id="Grande" on:click={() => selectedSize = 2} class="px-10 font-extralight {selectedSize == 2 ? "text-3xl": "text-zinc-500 text-base mt-4"}
             grid grid-cols-1 justify-items-center">
             <p>{sizeLevels["Grande"]}ml</p>
             <p class="text-sm font-thin italic">Grande</p>
        </button>
    </div>
</div>

<div id="RecipeContainer" class="w-5/6 text-slate-100 place-content-center mb-14">
    <p class="text-base font-thin text-center mb-2">Final Recipe</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="CoffeeGroundValue" class="text-center mt-6">
        <p class="text-5xl font-light font-mono">{totalCoffeeGrounds}g</p>
        <div class="flex flex-row justify-center place-items-center mt-2">
            <CoffeeBeanIcon /> 
            <p class="px-2 font-extralight text-sm italic">Grounds</p>
        </div>
    </div>

    <div id="WaterValue" class="text-center mt-8">
        <p class="text-5xl font-light font-mono">{Object.values(sizeLevels)[selectedSize]}ml</p>
        <div class="flex flex-row justify-center place-items-center mt-2">
            <p class="px-2 font-extralight text-sm italic">Water</p>
        </div>
    </div>
</div>