<script>
    import { page } from "$app/stores";
    import { coffeeData } from "$lib/coffeeData";
    import { currentBrewMethod } from "$lib/globalState";
    import PourOverIcon from "$lib/components/icons/PourOverIcon.svelte"
    import DownArrowIcon from "$lib/components/icons/DownArrowIcon.svelte";
    import Icon from '@iconify/svelte';
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

        // $currentBrewMethod = coffeeData.find((brewMethod) => brewMethod.route == $page.url.searchParams.get('brewMethod'));
    onMount(() => {
        $currentBrewMethod = $page.url.searchParams.get('brewMethod');
    })

    let tempVar = $derived(coffeeData.find((brewMethod) => brewMethod.route === $currentBrewMethod))

    // let {data} = $props()
    // let {name} = data.brewData
    let name = $derived(tempVar.name)
    let isOpen = $state(false)

	const clickOutside = (element) => {
		function handleClick(event) {
			const targetElement = event.target

            /*There's a race condition occuring when attempting to close the dropdown by pressing the dropdown
            button while the dropdown is open. This event (clickOutside) occurs first, causing "isOpen" to become
            false. When the "handleButtonClick" function runs, it then reads the dropown as being closed, and proceeds
            to re-open the dropdown. In other words, with no alterations the dropdown button will not be able to close
            the dropdown. I added this timeout to try and cause the "handleButtonClick" function to run first.
            THIS SOLUTION IS SKETCHY!!! If running on a slow device, this probably won't work and the bug will persist.
            */
            setTimeout(() => {
                if(element && !element.contains(targetElement)) {
                    const clickOutsideEvent = new CustomEvent('outside')
                    element.dispatchEvent(clickOutsideEvent)
                }
            }, 50)
		}

		document.addEventListener('click', handleClick, true)

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true)
			}
		}
	}

    function handleBrewSelection(selectedBrewMethod) {
        $currentBrewMethod = selectedBrewMethod.route;
        goto('/measurement/?brewMethod=' + selectedBrewMethod.route)
    }

    const handleButtonClick = () => {
        if(isOpen) isOpen = false
        else isOpen = true
    }

</script>

<div class="flex flex-row w-full md:w-4/12">
    <button on:click={() => goto('/')} class="absolute justify-start md:mt-4 place-content-center px-1 py-1">
        <Icon icon="ic:outline-arrow-back-ios" color="white" width="32" height="32" />
    </button>
    <div class="flex w-full justify-center">
        <button on:click={handleButtonClick} class="relative w-1/2 md:pt-5">
            <div class="flex flex-row py-1 text-slate-100 font-serif text-sm rounded-lg bg-zinc-700 justify-around place-items-center">
                <p></p>
                    {name}
                <DownArrowIcon />
            </div>
        </button>
        {#if isOpen}
            <div 
            on:outside={() => isOpen = false}
            use:clickOutside
            class="absolute left-1/2 transform -translate-x-1/2 z-10 bg-zinc-700 rounded-lg shadow-xl my-10 md:my-14" >
                    {#each coffeeData as brewType, i}
                    <button on:click={() => handleBrewSelection(brewType)} target="_self" class="block w-full px-4 py-2 {i == 0 ? "rounded-t-lg" : i == coffeeData.length - 1 ? "rounded-b-lg" : ""} text-slate-400 hover:bg-zinc-500 hover:text-white">
                        {brewType.name}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</div>

<div class="w-full grid justify-items-center">
    <slot />
</div>