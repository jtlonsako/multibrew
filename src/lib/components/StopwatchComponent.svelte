<script lang="ts">
	import { onDestroy } from "svelte";
    import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";
    import WaterDropIcon from "./icons/WaterDropIcon.svelte";    

    let {totalCoffeeGrounds, totalWaterAmount} = $props();
    let divisibleByFourOffset = $state(0);
    let firstPourAmount = $derived(Math.floor(totalWaterAmount / 5) - divisibleByFourOffset);
    let divisiblePourAmount = $derived((totalWaterAmount - firstPourAmount) / 4);
    let pourAmountArray = $derived(Array(5).fill(0).map((trash, i) => firstPourAmount + (divisiblePourAmount * i)));

    let interval: NodeJS.Timeout | undefined = $state<NodeJS.Timeout>();
    let elapsedTimeInMilliseconds = $state(0);
    let elapsedTimeToDisplay = $state('00:00:0');
    let timerIsActive = $state(false);

    function startTimer() {
        if(!timerIsActive) {
            timerIsActive = true;
            let beginning = new Date()
            let beginningTime = beginning.getTime() - elapsedTimeInMilliseconds
            interval = setInterval(() => {
                const current = new Date();
                const currentTime = current.getTime();
                elapsedTimeInMilliseconds = currentTime - beginningTime;
                elapsedTimeToDisplay = formatTime(elapsedTimeInMilliseconds);
            }, 10)
        }
    }

    function clearTimer() {
        elapsedTimeInMilliseconds = 0;
        elapsedTimeToDisplay = '00:00:0';
    }

    function stopTimer() {
        clearInterval(interval);
        timerIsActive = false;
    }

    function formatTime(milliseconds) {
        const mm = zeroPadded(Math.floor(milliseconds / 1000 / 60));
        const ss = zeroPadded(Math.floor(milliseconds / 1000) % 60);
        const t = lastDigit(Math.floor(milliseconds / 100));
        return `${mm}:${ss}.${t}`;
    }

    function zeroPadded(number) {
        return number >= 10 ? number.toString() : `0${number}`;
    }
    // consider the last digit of the input number (used for the tenths of seconds)
    function lastDigit(number) {
        return number.toString()[number.toString().length - 1];
    }

    $effect(() => {
        divisibleByFourOffset = 0
        let fakevar = totalWaterAmount
    })

    $effect(() => {
        if((totalWaterAmount - firstPourAmount) % 4 !== 0) divisibleByFourOffset++
    })

    onDestroy(() => {
        clearInterval(interval);
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

    <div id="StopwatchDisplay" class="w-full grid justify-items-center mt-4 mb-8">
        <p>{elapsedTimeToDisplay}</p>
        <div class="flex w-full justify-center">
            <button on:click={startTimer} class="py-2 px-4 bg-green-800 text-base rounded-lg" hidden={timerIsActive}>
                {elapsedTimeInMilliseconds > 0 ? 'Continue' : 'Start'}
            </button>
            <button on:click={stopTimer} class="py-2 px-4 mx-2 bg-red-800 text-base rounded-lg" hidden={!timerIsActive}>Stop</button>
            {#if !timerIsActive && elapsedTimeInMilliseconds > 0}
                <button on:click={clearTimer} class="py-2 px-4 mx-2 bg-cyan-900 text-base rounded-lg">Reset</button>
            {/if}
        </div>
    </div>

    <div id="MiniPourAmountDisplay" class="w-full flex justify-center text-base mt-2">
        {#each pourAmountArray as pourAmount, i}
            <div id="pourAmount" class="grid w-fit mx-1 justify-items-center text-lg gap-y-0">
                <p>{pourAmount}ml</p>
                <p class="text-sm font-normal">Pour {i + 1}</p>
            </div>
            {#if i < pourAmountArray.length - 1}
                <p class="flex h-full items-center">|</p>
            {/if}
        {/each}
    </div>
</div>