<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { WeatherRealtimeResponse } from '@/src/types';

  import WeatherCard from '@/src/components/weather-card/index.svelte';
  import { weather } from '@/src/store/index';
  import { getFromLocalStorage, saveToLocalStorage } from '@/src/functions';
  import {
    getWeatherRealtimeAuto,
    getWeatherRealtimeByCords,
  } from '@/src/services/weather-realtime';

  let weatherData: WeatherRealtimeResponse[] = [];

  const initialWeatherData = async () => {
    const item = await getWeatherRealtimeAuto();

    return item === undefined ? [] : [item];
  };

  const getItemsNotRenderized = (newWeatherIds: string[]) => {
    const renderizedIds = weatherData.map(({ id }) => id);
    const weatherNotRenderized = newWeatherIds.filter(
      (weatherId) => !renderizedIds.includes(weatherId)
    );

    return weatherNotRenderized;
  };

  const getItemsWeatherData = async (items: string[]) => {
    const promises = items.map((weatherId) => {
      const [lat, lon] = weatherId.split(';');

      return getWeatherRealtimeByCords({ lat, lon });
    });
    const responses = await Promise.all(promises);

    return responses.filter(Boolean) as WeatherRealtimeResponse[];
  };

  const weatherUnsubscriber = weather.subscribe(async (weatherIds) => {
    const weatherNotRenderized = getItemsNotRenderized(weatherIds);
    const itemsWeatherData = await getItemsWeatherData(weatherNotRenderized);

    weatherData = [...itemsWeatherData, ...weatherData];
    saveToLocalStorage('weather-data', weatherData);
  });

  onMount(async () => {
    weatherData = getFromLocalStorage('weather-data') ?? [];

    if (weatherData.length > 0) return;

    weatherData = await initialWeatherData();
  });

  onDestroy(weatherUnsubscriber);
</script>

<article class="home">
  {#each weatherData as data, i (`${i}-${data.id}`)}
    <WeatherCard {data} />
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
