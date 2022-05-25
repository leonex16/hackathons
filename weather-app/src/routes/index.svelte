<script lang="ts">
  import WeatherCard from '@/src/components/weather-card/index.svelte';

</script>

<main>
  <WeatherCard />
</main>

<style>
  main {
    display: grid;
    place-content: center;
    min-height: 100vh;
    min-width: 100vw;
  }
</style>
