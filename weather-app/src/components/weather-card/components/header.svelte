<script lang="ts">
  import type { WeatherRealtimeResponse } from '@/src/types';

  import { getFromLocalStorage, saveToLocalStorage } from '@/src/functions';

  export let id: string;
  export let isMinimized: boolean;
  export let conditionText: string;
  export let dayOrNight: string;

  const updateLocalStorage = () => {
    const data: WeatherRealtimeResponse[] = getFromLocalStorage('weather-data') ?? [];

    for (const item of data) {
      if (item.id !== id) continue;

      item.isMinimized = isMinimized;
      break;
    }

    saveToLocalStorage('weather-data', data);
  };

  const removeToLocalStorage = () => {
    const data: WeatherRealtimeResponse[] = getFromLocalStorage('weather-data') ?? [];

    const filteredData = data.filter((item) => item.id !== id);

    saveToLocalStorage('weather-data', filteredData);
  };

  const handleDisplay = () => {
    isMinimized = !isMinimized;
    updateLocalStorage();
  };

  const deleteItem = () => {
    removeToLocalStorage();
  };
</script>

<header class="weather-header">
  <button class="weather-header__mode material-symbols-rounded" on:click={handleDisplay}>
    {isMinimized ? 'open_in_full' : 'close_fullscreen'}
  </button>
  <span class="weather-header__condition">{`${dayOrNight} - ${conditionText}`}</span>
  <button class="weather-header__delete material-symbols-rounded" on:click={deleteItem}
    >delete</button
  >
</header>

<style>
  .weather-header {
    display: flex;
    justify-content: space-between;
  }

  .weather-header__condition {
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
  }

  .weather-header__delete,
  .weather-header__mode {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    color: var(--white);
  }
</style>
