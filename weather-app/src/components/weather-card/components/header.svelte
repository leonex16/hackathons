<script lang="ts">
  export let isDisplayMode: boolean;
  export let conditionText: string;
  export let dayOrNight: string;

  const handleDisplay = () => isDisplayMode = !isDisplayMode;
</script>

<header class="weather-header">
  <span class="weather-header__condition">{`${dayOrNight} - ${conditionText}`}</span>
  <!-- <button class="weather-header__network">
    {conditionText}
    {isLowNetwork ? '3g_mobiledata' : '5g'}
  </button> -->
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

  .weather-header__mode {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
</style>