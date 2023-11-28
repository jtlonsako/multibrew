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

<div class="absolute w-5/6 md:w-2/6 h-screen justify-center">
	{#if open}
		<div
			on:outside={closeModal}
			use:clickOutside
			transition:fade
			class="grid place-items-center bg-zinc-700"
		>
			<slot />
		</div>
	{/if}
</div>