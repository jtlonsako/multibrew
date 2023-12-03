<script>
	import { scale } from "svelte/transition";
	import { flip } from "svelte/animate";

    let list = $state(['One', 'Two', 'Three', 'Four', 'Five'])
    let removedList = $state([])

    let listRemovedDisabled = $derived(list.length <= 0)
    let listAddDisabled = $derived(removedList.length <= 0)

    const addButtons = () => {
        list = [...list, removedList.shift()]
        removedList = [...removedList]
    }

    const removeButtons = () => {
        const middleItem = list[list.length % 2]
        let lastNumber = list.filter((item) => item != middleItem)
        removedList.push(middleItem)
        list = [...lastNumber]
        removedList = [...removedList]
    }

</script>

<div class="flex flex-row justify-between">
    <button class="px-10 mx-10 my-40 bg-zinc-500 text-xl rounded-xl" 
        disabled={listRemovedDisabled} on:click={removeButtons}>
        -
    </button>

    <button class="px-10 mx-10 my-40 bg-zinc-500 text-xl rounded-xl" 
        disabled={listAddDisabled} on:click={addButtons}>
        +
    </button>
</div>

<div class="flex flex-row place-items-center text-slate-100 justify-around text-5xl">
    {#each list as item (item)}
        <div class="w-30 h-10 text-2xl mx-5 px-5 bg-green-400 rounded-xl" transition:scale animate:flip>
            <p>{item}</p>
        </div>
    {/each}
</div>