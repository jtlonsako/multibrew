<script>
    import { SubstringTypes } from "$lib/enums";
    let {
        selectorName, selectorLevels, 
        selectedLevel, keyNaming, 
        addSubstring, preString, postString
    } = $props()

    const keys = Object.keys(selectorLevels)
</script>

<div id="Container" class="text-slate-100 mb-14 w-full">
    <p class="text-base font-thin text-center mb-1">{selectorName}</p>
    <hr class="w-48 h-0 mx-auto opacity-30 rounded">

    <div id="LevelContainer" class="flex flex-row mt-4 text-xl">
        {#each keys as level}
            <button id={level} on:click={() => selectedLevel = level} class="px-10 w-1/3 font-extralight transition ease-in-out duration-200 
                {selectedLevel === level ? "scale-150 mt-2": "text-zinc-500 mt-4"} grid grid-cols-1 justify-items-center">

                {#if keyNaming}

                    <p class="font-serif tracking-wide">
                        {addSubstring === SubstringTypes.Primary ? `${preString}${level}${postString}` : level}
                    </p>
                    <p class="font-thin text-xs italic transition ease-in-out {selectedLevel === level ? "-mt-2" : "mt-0"}">
                        {addSubstring === SubstringTypes.Secondary ? `${preString}${selectorLevels[level]}${postString}` : {addSubstring}}
                    </p>

                {:else}

                    <p class="font-serif tracking-wide">
                        {addSubstring === SubstringTypes.Primary ? 
                            `${preString}${selectorLevels[level]}${postString}` : 
                            selectorLevels[level]}
                    </p>
                    <p class="font-thin text-xs italic transition ease-in-out {selectedLevel === level ? "-mt-2" : ""}">
                        {addSubstring === SubstringTypes.Secondary ? `${preString}${level}${postString}` : level}
                    </p>

                {/if}
            </button>
            {/each}
    </div>
</div>