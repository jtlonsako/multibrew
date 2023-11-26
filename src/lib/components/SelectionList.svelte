<script>
    import { SubstringTypes } from "$lib/enums";
	import Modal, { getModal } from "./Modal.svelte";
    let {
            selectorName, selectorLevels, selectedLevelValue
        } = $props()

    let customButton = {
        Title: "Custom",
        Description: "x",
        Value: 100
    }

    let emptyButton = {
        Title: "N/A"
    }

    let fullButtonArray = [...selectorLevels, customButton]
    let displayedButtonArray = $state([...selectorLevels])

    const updateCalculatedValues = (i) => {
        if (selectedLevelValue == displayedButtonArray[i].Value) {
            if (selectedLevelValue == fullButtonArray[fullButtonArray.length - 1].Value){
                getModal().open()
            }
        }
        else {
            selectedLevelValue = displayedButtonArray[i].Value
            if(fullButtonArray.findIndex((level) => level.Title == displayedButtonArray[i].Title) == 0)
            {
                selectedLevelValue = displayedButtonArray[i].Value
                displayedButtonArray.pop()
                displayedButtonArray = displayedButtonArray
            }
            else if(fullButtonArray.findIndex((level) => level.Title == displayedButtonArray[i].Title) == fullButtonArray.length - 1)
            {
                displayedButtonArray.shift()
                displayedButtonArray = displayedButtonArray
            }
            else{
                const currentIndex = fullButtonArray.findIndex((level) => level.Title == displayedButtonArray[i].Title)
                displayedButtonArray = [
                    fullButtonArray[currentIndex - 1],
                    fullButtonArray[currentIndex],
                    fullButtonArray[currentIndex + 1]
                ]
            }
        }
    }

</script>

<div id="Container" class="text-slate-100 mb-14 w-full">
    <p class="text-base font-thin text-center mb-1">{selectorName}</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="LevelContainer" class="flex flex-row mt-4 text-xl">
        {#each displayedButtonArray as level, i}
            {#if level.Value == fullButtonArray[0].Value && selectedLevelValue == fullButtonArray[0].Value}
                <div class=" px-10 w-1/3 grid grid-cols-1 justify-items-center">
                    
                </div>
            {/if}
            <button id={level.Title} on:click={() => updateCalculatedValues(i)} class="px-10 w-1/3 font-extralight transition ease-in-out duration-200 
                {selectedLevelValue === level.Value ? "scale-150 mt-2": "text-zinc-500 mt-4"} grid grid-cols-1 justify-items-center">

                    <p class="font-serif tracking-wide">
                        {level.Title}
                    </p>
                    <p class="font-thin text-xs italic transition ease-in-out {selectedLevelValue === level ? "-mt-2" : "mt-0"}">
                        {level.Description}
                    </p>

            </button>
        {/each}
    </div>
</div>

<Modal>
    <p>Complete logic for custom value input here. Press 'esc' to exit</p>
</Modal>