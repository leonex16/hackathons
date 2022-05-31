<script lang="ts">
  import type { Humidity } from '@/src/types';

  export let humidity: Humidity;
  export let precipitation: Humidity;
  export let wind: Humidity;

  const sections = [humidity, precipitation, wind];
</script>

<footer class="weather-footer">
  <section class="weather-footer__body weather-footer__body--column-display weather-footer--mt">
    {#each sections as section}
      <section class="weather-footer__section">
        <header class="weather-footer__header">
          <h4 class="weather-footer__label">{section.label}</h4>
        </header>
        <div class="weather-footer__content">
          <p class="weather-footer__value">
            {section.value}
            <span class="weather-footer__unit">{section.unit}</span>
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
    margin-top: 1rem;
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

  .weather-footer__label {
    color: var(--white);
  }

  /* .weather-footer__content {} */

  .weather-footer__value {
    font-weight: bold;
    color: var(--white);
  }

  .weather-footer__unit {
    font-size: 12px;
    font-weight: normal;
    color: var(--white);
  }
</style>
