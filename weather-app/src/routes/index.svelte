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
    height: 100%;
    width: 100%;
    outline: 2px solid;
  }
</style>
