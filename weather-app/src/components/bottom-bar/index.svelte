<script lang="ts">
  import { leftScreen } from '@/src/store/index';

  const buttons = [
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
    },
    {
      id: 'home',
      label: 'Home',
      icon: 'cottage',
    },
    {
      id: 'search',
      label: 'Search',
      icon: 'search',
    },
  ];
  const handleClick = (screen: string) => {
    leftScreen.showLeftScreen(screen === 'settings');
  };
</script>

<nav class="bottom-bar">
  <ul class="bottom-bar__links">
    {#each buttons as btn}
      <li class="bottom-bar__link" aria-label={btn.label}>
        <button
          class="bottom-bar__btn material-symbols-rounded"
          on:click|preventDefault={() => handleClick(btn.id)}>{btn.icon}</button
        >
        <span class="bottom-bar__label">{btn.label}</span>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .bottom-bar {
    padding: 1rem;
    width: 100%;
  }

  .bottom-bar__links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 10px;
    outline: 2px solid var(--outline);

    padding: 1rem 0;
    width: 100%;
  }

  .bottom-bar__link {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .bottom-bar__btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 32px;
    color: var(--inverse-surface);
  }

  .bottom-bar__label {
    display: none;
    font-size: 12px;
    margin-top: 8px;
  }
</style>
