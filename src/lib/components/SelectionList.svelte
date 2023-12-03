<script>
    import Modal from "./Modal.svelte";
	import { flip } from "svelte/animate";
	import { quintIn, quintOut } from "svelte/easing";
    import {crossfade, fade, fly} from 'svelte/transition';
	const [send, receive] = crossfade({fallback(node) {
        const style = getComputedStyle(node)
        const transform = style.transform === 'none' ? '' : style.transform

        return {
            duration:120,
            easing: quintOut,
            css: (t) => `
                opacity: ${t};
            `
        }
    }});
    
    let {
            selectorName, selectorLevels, selectedLevelValue, selectorLevelDescription
        } = $props()

    let customValue = $state(selectorLevelDescription.defaultCustomValue)

    let customButton = $derived({
        Title: "Custom",
        Description: selectorLevelDescription.prestring + customValue + selectorLevelDescription.poststring,
        Value: customValue
    })

    let modalOpen = $state(false)

    // let allButtons = addIteratorFieldToButtons([...selectorLevels, customButton])
    let allButtons = ([...selectorLevels, customButton]).map((button, index) => {
        button["Index"] = index; 
        return button
    })

    let fullButtonArray = $state(([...selectorLevels, customButton]).map((button, index) => {
        button["Index"] = index; 
        return button
    }))
    let displayedButtonArray = $state([...selectorLevels])

    const updateCustomButton = () => {
        let currentCustomButton = fullButtonArray.filter((button) => button["Title"] == "Custom")[0]
        currentCustomButton.Value = customValue
        currentCustomButton.Description = selectorLevelDescription.prestring + customValue + selectorLevelDescription.poststring

        selectedLevelValue = customValue
        fullButtonArray = fullButtonArray
    }
    
    const moveButtonsRight = () => {
        allButtons = fullButtonArray.map((button, index) => {
            button["Index"]++
            return button
        })

        selectedLevelValue = fullButtonArray.filter((button) => button.Index == 1)[0].Value
        fullButtonArray = allButtons
    }

    const moveButtonsLeft = () => {
        allButtons = fullButtonArray.map((button, index) => {
            button["Index"]--
            return button
        })

        selectedLevelValue = fullButtonArray.filter((button) => button.Index == 1)[0].Value
        fullButtonArray = allButtons
    }

    const mainButtonSelect = () => {
        if(fullButtonArray.filter((button) => button.Index == 1)[0].Title == "Custom") {
            modalOpen = true
        }
    }

</script>

<div id="Container" class="text-slate-100 mb-14 w-full">
    <p class="text-base font-thin text-center mb-1">{selectorName}</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="LevelContainer" class="flex flex-row mt-4 text-xl">
        <!-- {#each displayedButtonArray as level, i}
            {#if level.Value == fullButtonArray[0].Value && selectedLevelValue == fullButtonArray[0].Value}
                <div class=" px-10 w-1/3 grid grid-cols-1 justify-items-center">
                    
                </div>
            {/if}
            <button id={level.Title} transition:fade={{duration:2000}} on:click={() => updateCalculatedValues(i)} class="px-10 w-1/3 font-extralight transition ease-in-out duration-200 
                {selectedLevelValue === level.Value ? "scale-150 mt-2": "text-zinc-500 mt-4"} grid grid-cols-1 justify-items-center">

                    <p class="font-serif tracking-wide">
                        {level.Title}
                    </p>
                    <p class="font-thin text-xs italic transition ease-in-out {selectedLevelValue === level ? "-mt-2" : "mt-0"}">
                        {level.Description}
                    </p>

            </button>
        {/each} -->

        <!--Create three divs, which will each potentially be holding a button from fullArray-->
        <div class="w-32 h-10 m-3 grid grid-cols-1 place-items-center">
            {#each fullButtonArray.filter((button) => button["Index"] == 0) as button (button)}
                <button 
                id={button.Title} 
                on:click={moveButtonsRight} 
                class="px-10 w-1/3 font-extralight text-xl text-zinc-500 mt-4 grid grid-cols-1 justify-items-center"
                >
                        <p class="font-serif tracking-wide">
                            {button.Title}
                        </p>
                        <p class="font-thin text-base italic mt-0">
                            {button.Description}
                        </p>

                </button>            
            {/each}
        </div>

        <div class="w-32 h-10 m-3 grid grid-cols-1 place-items-center">
            {#each fullButtonArray.filter((button) => button["Index"] == 1) as button (button)}
                <button
                id={button.Title} 
                on:click={mainButtonSelect} 
                class="px-10 w-1/3 font-extralight text-3xl -mt-2 grid grid-cols-1 justify-items-center"
                >

                        <p class="font-serif tracking-wide">
                            {button.Title}
                        </p>
                        <p class="font-thin text-base italic -mt-1">
                            {button.Description}
                        </p>

                </button>               
            {/each}
        </div>

        <div class="w-32 h-10 m-3 grid grid-cols-1 place-items-center">
            {#each fullButtonArray.filter((button) => button["Index"] == 2) as button (button)}
                <button 
                id={button.Title} 
                on:click={moveButtonsLeft} 
                class="px-10 w-1/3 font-extralight transition-all text-xl text-zinc-500 mt-4 grid grid-cols-1 justify-items-center"
                >

                        <p class="font-serif tracking-wide">
                            {button.Title}
                        </p>
                        <p class="font-thin text-base italic mt-0">
                            {button.Description}
                        </p>

                </button>   
            {/each}
        </div>
    </div>
</div>
{#if modalOpen}
    <Modal
    bind:open={modalOpen}
    >
        <!-- Implement custom modal input selection stuff here -->
        <div class="rounded-lg text-slate-100">
            <div class="w-full grid grid-cols-1 place-items-center justify-items-center">
                <p class="text-base font-normal text-center -mt-3 mb-1">Select {selectorName}</p>
                <hr class="w-48 h-0 mx-auto opacity-30 rounded">

                <div class="flex flex-row">
                    <button on:click={() => Math.floor(customValue -= 1)} class="font-extralight mr-10 text-5xl">-</button>
                    <div class="flex flex-row mt-3 mb-4 px-5 text-5xl font-normal justify-center rounded-sm bg-zinc-800">
                        {selectorLevelDescription.prestring}{customValue}{selectorLevelDescription.poststring}
                    </div>
                    <button on:click={() => Math.floor(customValue+= 1)} class="font-extralight ml-10 text-5xl">+</button>
                </div>
                <div class="flex flex-row">
                    <p class="font-extralight text-base mx-4 font-serif">{selectorLevelDescription.min}</p>
                    <input type="range" on:change={updateCustomButton} bind:value={customValue}
                     min={selectorLevelDescription.min} max={selectorLevelDescription.max} step=0.1 />
                    <p class="font-extralight text-base mx-4 font-serif">{selectorLevelDescription.max}</p>
                </div>
            </div>
        </div>
    </Modal>
{/if}