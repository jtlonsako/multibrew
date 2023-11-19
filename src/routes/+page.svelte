<script>
    let ratio = $state(15)
    let amountOfWater = $state(320)
    let coffeeGrinds = $derived(Math.floor(amountOfWater / ratio))
</script>

<div class="grid grid-cols-1 justify-items-center bg-slate-500d text-white">
    <div class="py-10">
        <h1>Strength</h1>
        <button on:click={() => (ratio -=1)}>-</button>1:{ratio} <button on:click={() => (ratio += 1)}>+</button>
    </div>
    
    <div class="py-10">
        <h1>Size</h1>
        <button on:click={() => (amountOfWater -= 10)}>-</button>{amountOfWater} <button on:click={() => (amountOfWater += 10)}>+</button>
    </div>
    
    <div class="py-10 grid grid-cols-1 justify-items-center">
        <h1>Coffee Grinds</h1>
        {coffeeGrinds}g
    </div>
</div>
