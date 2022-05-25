<script lang="ts">
  import Header from '@/src/components/weather-card/components/header.svelte';
  import Footer from '@/src/components/weather-card/components/footer.svelte';

  export const data = {
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

  const { condition, current, location } = data;
  let isDisplayMode = true;
</script>

<article
  class="
    weather-card
    {isDisplayMode
    ? 'weather-card--open-fullscreen weather-card--no-cirble-bg'
    : 'weather-card--close-fullscreen'}
  "
>
  <Header bind:isDisplayMode conditionText={condition.text} dayOrNight={current.dayOrNight} />

  <section class="weather-body">
    <header class="weather-body__header {isDisplayMode && 'hidden'}">
      <img class="weather-body__img" src={condition.icon} alt={condition.text} />
    </header>

    <div
      class="weather-body__content no-scrollbars {isDisplayMode ||
        'weather-body__content--close-fullscreen '}"
    >
      <section class="weather-body__screen">
        <header>
          <h1 class="weather-body__celsius">{current.temperature.C}</h1>
        </header>
        <div>
          <p class="weather-body__city">{`${location.name}, ${location.country}`}</p>
        </div>
        <footer class="weather-body__footer {isDisplayMode || 'opacity-0'}">
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
  :root {
    --on-background: #e6e1e5;
    --outline: #d1c7cf;
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

    height: 100%;
    width: 100%;

    padding: 1rem;

    transition: all 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out,
      padding 0.2s ease-in-out, border-radius 0.2s ease-in-out, background 0.2s ease-in-out;
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

  .weather-card--open-fullscreen {
    aspect-ratio: 16 / 9;
    max-height: 200px;
    min-width: 350px;
  }

  .weather-card--close-fullscreen {
    aspect-ratio: 9 / 16;
    max-height: 350px;
    min-width: 350px;
  }

  .weather-body {
    display: flex;
    flex-direction: column;
  }

  .weather-body__header {
    text-align: center;
    max-height: 100px;
  }

  .weather-body__img {
    height: 128px;
    width: 128px;
  }

  .weather-body__content {
    display: flex;
    scroll-snap-type: x mandatory;
    overflow: auto;
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
  }

  .weather-body__celsius::after {
    content: '°';
    position: absolute;
  }

  .weather-body__city {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }

  .weather-body__details {
    font-size: 14px;
    text-align: center;
    opacity: 0.5;
    margin-top: 1rem;
  }
</style>
