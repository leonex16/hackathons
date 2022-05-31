<script lang="ts">
  import { onMount } from 'svelte';

  import SearchBox from '@/src/components/search-box/index.svelte';
  import BottomBar from '@/src/components/bottom-bar/index.svelte';
  import HomePage from '@/src/pages/home/index.svelte';
  import SettignsPage from '@/src/pages/settings/index.svelte';
  import { handleVisibility, settings } from '@/src/store/index';
  import { getFromLocalStorage, saveToLocalStorage } from '@/src/functions/index';

  onMount(() => {
    const settingsLS = getFromLocalStorage('settings');
    settingsLS === null ? saveToLocalStorage('settings', $settings) : settings.set(settingsLS);
  });
</script>

<div class={$settings.isDarkModeActive ? 'dark-theme' : 'light-theme'}>
  <header class={$handleVisibility.header ? 'show-searchbox' : ''}>
    <SearchBox placeholder="Search city" />
  </header>

  <main class="no-scrollbars">
    <SettignsPage />
    <HomePage />
  </main>

  <footer>
    <BottomBar />
  </footer>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;

    background-color: var(--background);
    overflow: hidden;

    max-height: 100vh;
    max-width: 350px;
    min-height: 100vh;
    min-width: 100vw;

    transition: background-color 200ms ease-in-out;
  }

  header {
    position: relative;
    flex: 1 1 auto;
    top: -51px;
    height: 1px;

    width: 100%;

    transition: top 200ms ease-in-out, height 200ms ease-in-out;
  }

  .show-searchbox {
    top: 0;
    height: 51px;
  }

  main {
    flex: 1 1 auto;

    overflow-y: auto;
    max-height: 100%;
    padding: 0.5rem;
  }

  header,
  main,
  footer {
    max-width: 375px;
    margin: 0 auto;
    width:100%;
  }
</style>
