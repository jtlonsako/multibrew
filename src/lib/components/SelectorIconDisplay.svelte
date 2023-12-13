<script>
	import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";
import WaterDropIcon from "./icons/WaterDropIcon.svelte";

    export let buttonName
</script>

{#if buttonName === "water"}
    <WaterDropIcon />
{:else if buttonName === "coffee"}
    <CoffeeBeanIcon />
{/if}