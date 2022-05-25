<script lang="ts">
  export let isLandscapeMode: boolean;
</script>

<footer class="weather-footer">
    <section
      class="weather-footer__body weather-footer__body--column-display weather-footer--mt"
    >
      {#each Array(3) as _, i}
        <section
          class="weather-footer__section"
        >
          <header class="weather-footer__header">
            <h4 class="weather-footer__title">title</h4>
          </header>
          <div class="weather-footer__content">
            <p class="weather-footer__value">
              30
              <span class="weather-footer__unit">Km</span>
            </p>
          </div>
        </section>
      {/each}
    </section>
</footer>

<style>
  .weather-footer {
    display: flex;
    height: 100%;
  }

  .weather-footer__body {
    scroll-snap-align: center;
    min-width: 100%;
  }

  .weather-footer__body--column-display {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .weather-footer__section {
    position: relative;
  }

  .weather-footer__header {
    margin-bottom: 0.5rem;
  }

  .weather-footer__title {
  }

  .weather-footer__content {
  }

  .weather-footer__value {
    font-weight: bold;
  }

  .weather-footer__unit {
    font-size: 12px;
    font-weight: normal;
  }
  
</style>
