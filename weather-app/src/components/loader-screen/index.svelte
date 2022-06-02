<script lang="ts">
  import { onMount } from 'svelte';

  let isLoadResource = true;

  onMount(() => {
    isLoadResource = !(document.readyState === 'complete');

    setTimeout(() => {
      isLoadResource = false;
    }, 5000);
  });
</script>

<div class="loader-screen {isLoadResource || 'loader-screen--hidden'}" aria-label="Loading app...">
  <img class="loader-screen__img" src="/loader-img.svg" alt="Loader Screen" />
</div>

<style>
  .loader-screen {
    position: absolute;
    z-index: 4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--surface-variant);
    overflow: hidden;

    height: 100vh;
    width: 100vw;

    transition: opacity 400ms ease-in-out,
                visibility 400ms ease-in-out;
  }

  .loader-screen--hidden {
    opacity: 0;
    visibility: hidden;
  }

  .loader-screen__img {
    width: 100%;
    max-width: 80px;
    max-height: 100%;
  }
</style>
