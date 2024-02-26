<script>
    import Modal from "./Modal.svelte";
	import SelectorIconDisplay from "./SelectorIconDisplay.svelte";
    import {createEventDispatcher} from "svelte";

    let dispatch = createEventDispatcher();
    
    let {
            selectorName, 
            selectorLevels, 
            selectedLevelValue, 
            selectorLevelDescription,
            selectionListType
        } = $props()

    const CUSTOM_BUTTON_MIN = selectorLevelDescription.customButtonInfo[selectionListType].min
    const CUSTOM_BUTTON_MAX = selectorLevelDescription.customButtonInfo[selectionListType].max
    const CUSTOM_BUTTON_PRESTRING = selectorLevelDescription.customButtonInfo[selectionListType].prestring
    const CUSTOM_BUTTON_POSTSTRING = selectorLevelDescription.customButtonInfo[selectionListType].poststring

    let customValue = $state(selectorLevelDescription.customButtonInfo[selectionListType].defaultCustomValue)

    let customButton = $derived({
        Title: "Custom",
        Description: CUSTOM_BUTTON_PRESTRING + customValue + CUSTOM_BUTTON_POSTSTRING,
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

    const updateCustomButton = () => {
        let currentCustomButton = fullButtonArray.filter((button) => button["Title"] == "Custom")[0]
        if(customValue < CUSTOM_BUTTON_MIN) customValue = CUSTOM_BUTTON_MIN
        else if(customValue > CUSTOM_BUTTON_MAX) customValue = CUSTOM_BUTTON_MAX
        else customValue = customValue
        if(selectorName == 'size') customValue = Math.floor(customValue).toFixed(1)

        currentCustomButton.Value = customValue
        currentCustomButton.Description = CUSTOM_BUTTON_PRESTRING + customValue.toFixed(1) + CUSTOM_BUTTON_POSTSTRING

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

    const customValueSubtract = () => {
        if(customValue > CUSTOM_BUTTON_MIN) {
            if(customValue - 1 < CUSTOM_BUTTON_MIN) {
                customValue = CUSTOM_BUTTON_MIN
                updateCustomButton()
                return
            }
            customValue -= 1
            updateCustomButton()
        }
    }

    const customValueAdd = () => {
        if(customValue < CUSTOM_BUTTON_MAX) {
            if(customValue + 1 > CUSTOM_BUTTON_MAX) {
                customValue = CUSTOM_BUTTON_MAX
                updateCustomButton()
                return
            }
            customValue += 1
            updateCustomButton()
        }
    }

</script>

<div id="Container" class="text-slate-100 mb-14 w-full">
    <div class="grid grid-cols-12">
        <p class="text-base col-start-6 col-span-2 font-thin text-center mb-1">{selectorName}</p>
        {#each selectorLevelDescription.buttons as buttonName, i}
            <div class="col-start-{i + 1 + 7}">
                <button on:click={() => {
                    selectionListType = buttonName;
                    dispatch("SwitchSelectionType", buttonName)
                    }}>
                    <SelectorIconDisplay buttonName={buttonName} currentSelectionType={selectionListType} />
                </button>
            </div>
        {/each}
    </div>
    <hr class=" w-56 h-0 mx-auto opacity-30 rounded">

    <div id="LevelContainer" class="flex flex-row mt-4 text-xl">

        <!--Create three divs, which will each potentially be holding a button from fullArray-->
        <div class="w-28 h-10 m-3 grid grid-cols-1 place-items-center">
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

        <div class="w-28 h-10 m-3 grid grid-cols-1 place-items-center">
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

        <div class="w-28 h-10 m-3 grid grid-cols-1 place-items-center">
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
        <div class="rounded-lg w-full h-fit text-slate-100">
            <div class="flex justify-start align-top -mt-7 ml-4">
                <button class="text-2xl font-extralight text-zinc-300 hover:text-zinc-100" on:click={() => modalOpen = false}>X</button>
            </div>
            <div class="w-full grid justify-items-center">
                <p class="text-base font-normal text-center -mt-3 mb-1">Custom {selectorName}</p>
                <hr class="w-48 h-0 mx-auto opacity-30 rounded">

                <div class="grid grid-cols-12 md:grid-cols-10 gap-4 w-full">
                    <button on:click={customValueSubtract} disabled={customValue <= CUSTOM_BUTTON_MIN} class="font-extralight col-span-2 {customValue <= CUSTOM_BUTTON_MIN ? "text-zinc-400" : ""} text-5xl">-</button>
                    <div class="col-span-8 md:col-span-6 flex flex-row mt-3 mb-4 px-5 text-5xl font-normal justify-center rounded-sm bg-zinc-800">
                        {CUSTOM_BUTTON_PRESTRING}
                        <!-- {customValue.toFixed(1)} -->
                        <input type="number" bind:value={customValue} on:change={updateCustomButton} style="text-align:center;"
                            max={CUSTOM_BUTTON_MAX} min={CUSTOM_BUTTON_MIN} class="w-full bg-zinc-800" pattern="\d*" />
                            {CUSTOM_BUTTON_POSTSTRING}
                    </div>
                    <button on:click={customValueAdd} disabled={customValue >= CUSTOM_BUTTON_MAX} class="font-extralight col-span-2 {customValue >= CUSTOM_BUTTON_MAX ? "text-zinc-400" : ""} text-5xl">+</button>
                </div>
                <div class="flex flex-row">
                    <p class="font-extralight text-base mx-4 font-serif">{CUSTOM_BUTTON_MIN}</p>
                    <input type="range" on:change={updateCustomButton} bind:value={customValue}
                     min={CUSTOM_BUTTON_MIN} max={CUSTOM_BUTTON_MAX} step={selectorName === 'size' ? 0.1 : 1} />
                    <p class="font-extralight text-base mx-4 font-serif">{CUSTOM_BUTTON_MAX}</p>
                </div>
            </div>
        </div>
    </Modal>
{/if}

<style>
    /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>