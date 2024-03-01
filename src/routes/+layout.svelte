<script lang="ts">
  import { dev } from '$app/environment';
  import { inject } from "@vercel/analytics";
  import "../app.css";

  inject({ mode: dev ? 'development' : 'production' });
</script>

  <div class="grid grid-cols-1 justify-items-center">
    <slot />
  </div>