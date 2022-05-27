<script lang="ts">
  // import WeatherCard from '@/src/components/weather-card/index.svelte';
  import LeftMenu from '@/src/components/left-menu/index.svelte';
  import BottomBar from '@/src/components/bottom-bar/index.svelte';
  import SettignsPage from '@/src/pages/settings/index.svelte';
  import { settings } from '@/src/store/index';

  const data = {
    condition: {
      icon: 'https://cdn.weatherapi.com/weather/64x64/day/116.png',
      // https://www.weatherapi.com/docs/conditions.json
      text: 'Mist',
    },
    location: {
      name: 'Santiago',
      country: 'Chile',
      localTime: '',
    },
    current: {
      dayOrNight: 'Night',
      temperature: {
        C: '20',
        F: '0',
      },
      humidity: {
        label: 'Humidity',
        value: 30,
        unit: '%',
      },
      precipitation: {
        label: 'Precipitation',
        value: 20,
        unit: 'mm',
      },
      wind: {
        label: 'Wind Speed',
        value: 10,
        unit: 'Km/h',
      },
    },
  };

</script>

<div class={$settings.isDarkModeActive ? 'dark-theme' : 'light-theme'}>
  <header />
  <main>
    <LeftMenu >
      <SettignsPage />
    </LeftMenu>
  </main>

  <BottomBar />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;

    background-color: var(--background);

    min-height: 100vh;
    min-width: 100vw;

    transition: background-color 200ms ease-in-out;
  }

  header {
    flex: 0 0 auto;
  }

  main {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
</style>
