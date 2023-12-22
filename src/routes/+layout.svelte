<script>
    import MultiBrewLogo from "$lib/components/icons/MultiBrewLogo.svelte";
import "../app.css";
</script>
<div class="absolute ml-1">
  <a href="/">
    <MultiBrewLogo />
    </a>
</div>
  <div class="grid grid-cols-1 justify-items-center">
    <slot />
  </div>