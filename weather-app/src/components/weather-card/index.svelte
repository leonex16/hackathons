<script lang="ts">
  import type { WeatherRealtimeResponse } from '@/src/types';
  import Header from '@/src/components/weather-card/components/header.svelte';
  import Footer from '@/src/components/weather-card/components/footer.svelte';

  export let data: WeatherRealtimeResponse;

  const { condition, current, location } = data;
</script>

<article
  class="
    weather-card
    {data.isMinimized
    ? 'weather-card--minimized weather-card--no-cirble-bg'
    : 'weather-card--maximized'}
  "
>
  <Header
    bind:isMinimized={data.isMinimized}
    id={data.id}
    conditionText={condition.text}
    dayOrNight={current.dayOrNight}
  />

  <section class="weather-body">
    <header class="weather-body__header {data.isMinimized && 'hidden'}">
      <img class="weather-body__img" src={condition.icon} alt={condition.text} />
    </header>

    <div
      class="weather-body__content no-scrollbars {data.isMinimized ||
        'weather-body__content--close-fullscreen '}"
    >
      <section class="weather-body__screen">
        <header>
          <h1 class="weather-body__celsius">{current.temperature.C}</h1>
        </header>
        <div>
          <p class="weather-body__city">{`${location.name}, ${location.country}`}</p>
        </div>
        <footer class="weather-body__footer {data.isMinimized || 'hidden'}">
          <p class="weather-body__details">Swipe to see details</p>
        </footer>
      </section>

      <section class="weather-body__screen">
        <Footer
          humidity={current.humidity}
          precipitation={current.precipitation}
          wind={current.wind}
        />
      </section>
    </div>
  </section>
</article>

<style>
    @keyframes init-render {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .weather-card {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
    overflow: hidden;

    border-radius: 25px;
    outline: 2px solid var(--outline);

    background: var(--on-bg-gradient);

    min-height: 200px;
    max-width: 350px;
    height: 100%;
    width: 100%;

    padding: 1rem;

    animation: init-render 200ms ease-in-out forwards;
    transition: all 200ms ease-in-out, width 200ms ease-in-out, height 200ms ease-in-out,
      padding 200ms ease-in-out, border-radius 200ms ease-in-out, background 200ms ease-in-out;
  }
  .weather-card > * {
    position: relative;
    z-index: 2;
  }

  .weather-card * {
    user-select: none;
  }

  .weather-card::before {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 0;
    z-index: 1;

    display: block;
    border-radius: 100%;

    background-color: var(--bg-gradient);
    opacity: 0.2;

    height: 100%;
    width: 100%;

    transform: scale(1.5);
    transition: opacity 200ms ease-in-out;
  }

  .weather-card--no-cirble-bg::before {
    opacity: 0;
  }

  .weather-card--minimized {
    aspect-ratio: 16 / 9;
    max-height: 200px;
    min-width: 350px;
  }

  .weather-card--maximized {
    aspect-ratio: 9 / 16;
    max-height: 350px;
    min-height: 350px;
    min-width: 350px;
  }

  .weather-body {
    display: flex;
    flex-direction: column;
  }

  .weather-body__header {
    text-align: center;
    max-height: 100px;
    margin-bottom: 1rem;
  }

  .weather-body__img {
    height: 128px;
    width: 128px;
  }

  .weather-body__content {
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .weather-body__content--close-fullscreen {
    display: block;
  }

  .weather-body__screen {
    scroll-snap-align: center;
    min-width: 100%;
  }

  .weather-body__celsius {
    position: relative;
    font-size: 4rem;
    text-align: center;
    color: var(--white);
  }

  .weather-body__celsius::after {
    content: '°';
    position: absolute;
  }

  .weather-body__city {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: var(--white);
  }

  .weather-body__details {
    font-size: 14px;
    text-align: center;
    opacity: 0.5;
    margin-top: 0.5rem;
    color: var(--white);
  }
</style>
