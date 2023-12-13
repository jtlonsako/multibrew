<script>
	import CoffeeBeanIcon from "./icons/CoffeeBeanIcon.svelte";
import WaterDropIcon from "./icons/WaterDropIcon.svelte";

    export let buttonName
    export let currentSelectionType
</script>

<div class="grid justify-center {currentSelectionType == buttonName ? "" : "opacity-20"}">
    {#if buttonName === "water"}
        <WaterDropIcon />
    {:else if buttonName === "coffee"}
        <CoffeeBeanIcon size="small" />
    {/if}
</div>