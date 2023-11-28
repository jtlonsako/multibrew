<script>
	import { fade } from "svelte/transition";

	let {open} = $props()

	function closeModal() {
		open = false
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

<div class="absolute h-screen w-screen grid place-items-center -my-24 items-center bg-zinc-900 bg-opacity-80">
	{#if open}
		<div
			on:outside={closeModal}
			use:clickOutside
			transition:fade
			class="grid w-5/6 md:w-3/12 rounded-lg pt-8 pb-10 z-10 place-items-center bg-opacity-100 bg-zinc-600"
		>
			<slot />
		</div>
	{/if}
</div>