<script>
    import Modal, {getModal} from "$lib/components/Modal.svelte";
</script>

<div class="w-screen h-screen flex place-content-center bg-white">
    <button on:click={() => getModal().open()}>
        Open modal
    </button>
</div>

<Modal>
    <h1>It worked!ESTASDFDDDDDDSFSDAFSDASS</h1>
</Modal>