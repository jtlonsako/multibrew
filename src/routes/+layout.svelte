<script lang="ts">
  import { dev } from '$app/environment';
  import { inject } from "@vercel/analytics";
  import Icon from "@iconify/svelte";
  import Modal from '$lib/components/Modal.svelte';
  import "../app.css";

  inject({ mode: dev ? 'development' : 'production' });

  let isOpen = $state(false);

  function handleOpen(meh) {
    isOpen = meh
  }
</script>
<Modal bind:open={isOpen}>
  <div class="rounded-lg w-full h-fit text-slate-100">
    <div class="flex justify-start align-top -mt-7 ml-4">
        <button class="text-2xl font-extralight text-zinc-300 hover:text-zinc-100" on:click={() => isOpen = false}>X</button>
    </div>
    <div class="w-full grid justify-items-center">
        <p class="text-base font-normal text-center -mt-3 mb-1">App Information</p>
        <hr class="w-48 h-0 mx-auto opacity-30 rounded">
        <div class="grid w-4/6 justify-items-center text-left gap-y-2">
          <p class="mt-2">- Version: 0.1.1</p>
          <p>
            - Info: I have slightly refactored the code to hopefully make it possible to port to mobile. As a 
            result, any previous bookmarks are broken and must be reset, sorry for the inconvenience :(
          </p>

        </div>
    </div>
  </div>
</Modal>
<div class="grid grid-cols-1 justify-items-center">
  <div class="absolute grid w-full justify-end md:mr-20 md:mt-5">
    <button on:click={() => handleOpen(true)}>
      <Icon icon="ph:question" width="32" height="32"  style="color: white" />    
    </button>
  </div>
  <slot />
</div>