<script>
    import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";
    import WaterDropIcon from "./icons/WaterDropIcon.svelte";
    
    let {totalCoffeeGrounds, totalWaterAmount} = $props()
    let divisibleByFourOffset = $state(0)
    let firstPourAmount = $derived(Math.floor(totalWaterAmount / 5) - divisibleByFourOffset)
    let divisiblePourAmount = $derived((totalWaterAmount - firstPourAmount) / 4)

    let pourAmountArray = $derived(Array(5).fill(0).map((trash, i) => firstPourAmount + (divisiblePourAmount * i)))
    

    $effect(() => {
        divisibleByFourOffset = 0
        let fakevar = totalWaterAmount
    })

    $effect(() => {
        if((totalWaterAmount - firstPourAmount) % 4 !== 0) divisibleByFourOffset++
    })

    </script>
    
    <div id="PourAmountContainer" class="w-full text-slate-100 grid justify-items-center font-medium font-mono text-5xl">
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
            {#each pourAmountArray as pourAmount, i}
                <div class="w-60 grid grid-cols-12">
                    <div class="col-span-1"></div>
                    <div class="w-full col-span-8 grid grid-cols-2 justify-items-center">
                        <p class="pt-1">Pour {i + 1}: </p>
                        <p>{pourAmount}ml</p>
                    </div>
                    <p class="ml-2 lg:ml-5 text-green-400 col-span-2">+{pourAmount > firstPourAmount ? divisiblePourAmount : firstPourAmount}ml</p>
                </div>
            {/each}
        </div>
    </div>
