<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { WeatherRealtimeResponse } from '@/src/types';

  import WeatherCard from '@/src/components/weather-card/index.svelte';
  import { weather } from '@/src/store/index';
  import { getFromLocalStorage, handleHttpRequest, saveToLocalStorage } from '@/src/functions';


  let weatherData: WeatherRealtimeResponse[] = [];

  const initialWeatherData = async () => {
    return handleHttpRequest<WeatherRealtimeResponse>(
        `/api/weather-realtime`
      );
  }

  const weatherUnsubscriber = weather.subscribe(async (weatherIds) => {
    const renderizedIds = weatherData.map(({ id }) => id);
    const weatherNotRenderized = weatherIds.filter(
      (weatherId) => !renderizedIds.includes(weatherId)
    );

    const promises = weatherNotRenderized.map((weatherId) => {
      const [lat, lon] = weatherId.split(';');
      return handleHttpRequest<WeatherRealtimeResponse>(
        `/api/weather-realtime?lat=${lat}&lon=${lon}`
      );
    });

    const resp = await Promise.all(promises);

    weatherData = [ ...resp, ...weatherData ];
    saveToLocalStorage('weather-data', weatherData);
  });

  onMount(async () => {
    weatherData = getFromLocalStorage('weather-data') ?? [];
    
    if ( weatherData.length > 0 ) return;

    weatherData = [ await initialWeatherData() ];
  })

  onDestroy(weatherUnsubscriber);
</script>

<article class="home">
  {#each weatherData as data, i (`${i}-${data.id}`)}
    <WeatherCard data={data} />
  {/each}
</article>

<style>
  .home {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: flex-start;
    gap: 1.5rem 0;

    min-height: calc(100vh - 96px - 36px);
    width: 100%;
  }
</style>
