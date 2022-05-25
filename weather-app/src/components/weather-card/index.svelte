<script lang="ts">
  import Header from '/src/components/weather-card/components/header.svelte';
  import Footer from '/src/components/weather-card/components/footer.svelte';

  let isLandscapeMode = true;
  let isLowNetwork = true;
</script>

<article class="weather-card { isLandscapeMode ? 'weather-card--landscape' : 'weather-card--portrait'}">
  <Header bind:isLandscapeMode bind:isLowNetwork />

  <section class="weather-body">
    <header class="weather-body__header {isLandscapeMode && 'hidden'}">
      <img
        class="weather-body__img"
        src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        alt="DUUMY"
      />
    </header>

    <div class="weather-body__content no-scrollbars {isLandscapeMode || 'weather-body__content--portrait ' }">
      <section class="weather-body__screen">
        <header>
          <h1 class="weather-body__celsius">18</h1>
        </header>
        <div>
          <p class="weather-body__city">Santiago, Chile</p>
        </div>
        <footer class="weather-body__footer { isLandscapeMode || 'opacity-0'}">
          <p class="weather-body__details">Swipe to see details</p>
        </footer>
      </section>

      <section class="weather-body__screen">
        <Footer bind:isLandscapeMode />
      </section>
    </div>
  </section>
</article>

<style>
  .weather-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
    overflow: hidden;

    border-radius: 25px;
    outline: 2px solid var(--outline);
    background: linear-gradient(
      0deg,
      hsl(220, 10%, 10%) 0%,
      hsl(220, 10%, 13%) 50%,
      hsl(220, 10%, 16%) 100%
    );

    height: 200px;
    width: 300px;

    padding: 1rem;

    transition: all 0.2s ease-in-out,
                width 0.2s ease-in-out,
                height 0.2s ease-in-out,
                padding 0.2s ease-in-out,
                border-radius 0.2s ease-in-out,
                background 0.2s ease-in-out;
  }

  .weather-card--landscape {
    aspect-ratio: 16 / 9;
    max-height: 200px;
    min-width: 300px;
    height: 200px;
    width: 300px;
  }

  .weather-card--portrait {
    aspect-ratio: 9 / 16;
    max-height: 350px;
    min-width: 250px;
    height: 350px;
    width: 250px;
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

  .weather-body__content--portrait {
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
