<script lang="ts">
  import LeftMenu from '@/src/components/left-menu/index.svelte';
  import { handleVisibility, settings } from '@/src/store/index';
  import { saveToLocalStorage } from '@/src/functions/index';

  type SettingTypes = keyof typeof $settings;

  const checkboxes = [
    {
      id: 'isSaveNetworkActive' as SettingTypes,
      label: 'Save Network',
    },
    {
      id: 'isDarkModeActive' as SettingTypes,
      label: 'Dark Background',
    },
  ];

  const handleClick = () => handleVisibility.setVisibility('leftScreen', false);

  const handleChange = (id: SettingTypes) => {
    settings.updateProperty(id, !$settings[id]);
    saveToLocalStorage('settings', $settings);
  };
</script>

<LeftMenu>
  <article class="settings">
    <header class="settings__header">
      <h2 class="settings__title">Settings</h2>
    </header>
    <section class="settings__items">
      {#each checkboxes as checkbox}
        <div class="settings__item">
          <label class="settings__label">
            <input
              id={checkbox.id}
              type="checkbox"
              class="settings__checkbox"
              checked={$settings[checkbox.id]}
              on:change={() => handleChange(checkbox.id)}
            />
            <span class="settings__text">{checkbox.label}</span>
          </label>
        </div>
      {/each}
    </section>
    <footer class="settings__footer">
      <button class="settings__button" on:click={handleClick}>Close</button>
    </footer>
  </article>
</LeftMenu>

<style>
  .settings {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    height: 100%;

    padding: 1rem;
  }

  /* .settings__header {} */

  /* .settings__title {} */

  .settings__items {
    flex-grow: 1;
  }

  .settings__item {
    margin: 0.5rem 0;
  }

  /* .settings__label {} */

  .settings__checkbox {
    accent-color: var(--primary);
  }

  .settings__text {
    margin-left: 0.5rem;
  }

  /* .settings__footer {} */

  .settings__button {
    background-color: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: 2px solid;

    font-size: 1rem;
    font-weight: bold;

    padding: 1rem;
    width: 100%;
  }
</style>
