<script>
    import CoffeeBeanIcon from "$lib/components/icons/CoffeeBeanIcon.svelte";

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

<div id="StrengthContainer" class="w-5/6 text-slate-100 place-content-center mt-10 mb-12">
    <p class="text-base font-thin text-center mb-1"> Strength </p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="StrengthValuesContainer" class="flex flex-row justify-center mt-4">
        <button id="Light" on:click={() => selectedStrength = "Light"} class="px-10 font-extralight transition ease-in-out duration-200 {selectedStrength == "Light" ? "scale-150 mt-2": "text-zinc-500 mt-4"}
             grid grid-cols-1 justify-items-center">
            <p class="font-serif tracking-wide">Light</p>
            <p class="font-thin text-xs italic transition ease-in-out {selectedStrength == "Light" ? "-mt-2" : ""}">1:{strengthLevels["Light"]}</p>
        </button>        
        
        <button id="Medium" on:click={() => selectedStrength = "Medium"} class="px-10 font-extralight transition ease-in-out duration-200 {selectedStrength == "Medium" ? "scale-150 mt-2": "text-zinc-500 mt-4"}
             grid grid-cols-1 justify-items-center">
            <p class="font-serif tracking-wide">Medium</p>
            <p class="font-thin text-xs italic transition ease-in-out {selectedStrength == "Medium" ? "-mt-2" : ""}">1:{strengthLevels["Medium"]}</p>
        </button>
        
        <button id="Strong" on:click={() => selectedStrength = "Strong"} class="px-10 font-extralight transition ease-in-out duration-200 {selectedStrength == "Strong" ? "scale-150 mt-2": "text-zinc-500 mt-4"}
             grid grid-cols-1 justify-items-center">
            <p class="font-serif tracking-wide">Strong</p>
            <p class="font-thin text-xs italic transition ease-in-out {selectedStrength == "Strong" ? "-mt-2" : ""}">1:{strengthLevels["Strong"]}</p>
        </button>
    </div>

</div>

<div id="SizeContainer" class="w-5/6 text-slate-100 place-content-center mb-14">
    <p class="text-base font-thin text-center mb-2">Size</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="SizeValuesContainer" class="flex flex-row justify-center mt-4">
        <button id="Short" on:click={() => selectedSize = "Short"} class="px-10 font-extralight transition ease-in-out duration-200 {selectedSize == "Short" ? "scale-150 pt-2": "text-zinc-500 mt-4"}
             grid grid-cols-1 justify-items-center">
             <p class="font-serif tracking-wide">{sizeLevels["Short"]}ml</p>
             <p class=" text-xs font-thin italic transition ease-in-out {selectedSize == "Short" ? "-mt-2" : ""}">Short</p>
        </button>        
        
        <button id="Tall" on:click={() => selectedSize = "Tall"} class="px-10 font-extralight transition ease-in-out duration-200 {selectedSize == "Tall" ? "scale-150 pt-2": "text-zinc-500 mt-4"}
             grid grid-cols-1 justify-items-center">
             <p class="font-serif tracking-wide">{sizeLevels["Tall"]}ml</p>
             <p class=" text-xs font-thin italic transition ease-in-out {selectedSize == "Tall" ? "-mt-2" : ""}">Tall</p>
        </button>
        
        <button id="Grande" on:click={() => selectedSize = "Grande"} class="px-10 font-extralight transition ease-in-out duration-200 {selectedSize == "Grande" ? "scale-150 pt-2": "text-zinc-500 mt-4"}
             grid grid-cols-1 justify-items-center">
             <p class="font-serif tracking-wide">{sizeLevels["Grande"]}ml</p>
             <p class=" text-xs font-thin italic transition ease-in-out {selectedSize == "Grande" ? "-mt-2" : ""}">Grande</p>
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
        <p class="text-5xl font-light font-mono">{sizeLevels[selectedSize]}ml</p>
        <div class="flex flex-row justify-center place-items-center mt-2">
            <p class="px-2 font-extralight text-sm italic">Water</p>
        </div>
    </div>
</div>