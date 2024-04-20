<script lang="ts">
  import { dev } from '$app/environment';
  import { Capacitor } from '@capacitor/core';
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
{#if Capacitor.getPlatform() === 'ios'}
  <div class="safe-area"></div>
{/if}
<div class="w-screen h-screen">
<Modal bind:open={isOpen}>
  <div class="rounded-lg w-full h-fit text-slate-100">
    <div class="flex justify-start align-top -mt-7 ml-4">
        <button class="text-2xl font-extralight text-zinc-300 hover:text-zinc-100" on:click={() => isOpen = false}>X</button>
    </div>
    <div class="w-full grid justify-items-center">
        <p class="text-base font-normal text-center -mt-3 mb-1">App Information</p>
        <hr class="w-48 h-0 mx-auto opacity-30 rounded">
        <div class="grid w-4/6 justify-items-center text-left gap-y-2">
          <p class="mt-2">Version: 1.1</p>
          <p>Made with ♥ by Josh L.</p>
          <p class="text-sm font-light">(aka <em>badeveloper</em>)</p>
          <p>Inquiries: multibrew@gmail.com</p>
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
</div>

<style>
  div.safe-area {
    height: calc(env(safe-area-inset-top) + 2px);
    position: sticky;
    z-index: 1000;
    top:0
  }
</style>