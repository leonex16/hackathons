<script lang="ts">
  export let isLowNetwork: boolean;
  export let isDisplayMode: boolean;
  export let dayOrNight: string;

  const handleNetwork = () => isLowNetwork = !isLowNetwork;
  const handleDisplay = () => isDisplayMode = !isDisplayMode;
</script>

<header class="weather-header">
  <span class="weather-header__condition">{dayOrNight}</span>
  <button class="weather-header__network material-symbols-outlined" on:click={handleNetwork}>
    {isLowNetwork ? '3g_mobiledata' : '5g'}
  </button>
  <button class="weather-header__mode material-symbols-outlined" on:click={handleDisplay}>
    {isDisplayMode ? 'open_in_full' : 'close_fullscreen'}
  </button>
</header>

<style>
    .weather-header {
    display: flex;
    justify-content: space-between;
  }

  .weather-header__condition {
    font-size: 14px;
    font-weight: bold;
  }

  .weather-header__network {
    cursor: pointer;
  }

  .weather-header__mode {
    cursor: pointer;
  }

  :is(.weather-header__network, .weather-header__mode) {
    background-color: transparent;
    outline: none;
    border: none;
  }
</style>