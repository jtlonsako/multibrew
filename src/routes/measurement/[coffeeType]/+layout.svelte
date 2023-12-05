<script>
    import { coffeeData } from "$lib/coffeeData";
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte"
    import DownArrowIcon from "$lib/components/icons/DownArrowIcon.svelte";

    let {data} = $props()
    let {name} = data.brewData
    let isOpen = $state(false)

    function closeModal() {
		isOpen = false
	}

	const clickOutside = (element) => {
		function handleClick(event) {
			const targetElement = event.target

			if(element && !element.contains(targetElement)) {
				const clickOutsideEvent = new CustomEvent('outside')
				element.dispatchEvent(clickOutsideEvent)
			}
		}

		document.addEventListener('click', handleClick, true)

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true)
			}
		}
	}

</script>

<button on:click|stopPropagation={() => isOpen = !isOpen} class="w-1/2 sm:w-1/3  md:w-1/4 lg:w-1/6 md:pt-5">
    <div class="flex flex-row py-1 text-slate-100 font-serif text-sm rounded-lg bg-zinc-700 justify-around place-items-center">
        <PourOverIcon />
            {name}
        <DownArrowIcon />
    </div>
</button>
{#if isOpen}
    <div 
    on:outside={closeModal}
    use:clickOutside
    class="absolute z-10 items-center text-center justify-center my-10 md:my-14 bg-zinc-700 rounded-lg shadow-xl" >
        {#each coffeeData as brewType, i}
            <a href="/measurement/{brewType.route}" target="_self" class="block px-4 py-2 {i == 0 ? "rounded-t-lg" : i == coffeeData.length - 1 ? "rounded-b-lg" : ""} text-slate-400 hover:bg-zinc-500 hover:text-white">
                {brewType.name}
            </a>
        {/each}
    </div>
{/if}

<slot />