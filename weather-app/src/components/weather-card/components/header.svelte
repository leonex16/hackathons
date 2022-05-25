<script lang="ts">
  export let isLowNetwork: boolean;
  export let isLandscapeMode: boolean;

  const handleNetwork = () => isLowNetwork = !isLowNetwork;
  const handleLandscape = () => isLandscapeMode = !isLandscapeMode;
</script>

<header class="weather-header">
  <span class="weather-header__condition">Day</span>
  <button class="weather-header__network material-symbols-outlined" on:click={handleNetwork}>
    {isLowNetwork ? '3g_mobiledata' : '5g'}
  </button>
  <button class="weather-header__mode material-symbols-outlined" on:click={handleLandscape}>
    {isLandscapeMode ? 'stay_current_landscape' : 'stay_current_portrait'}
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