<script lang="ts">
  import type { AutocompleteResponse } from '@/src/types/index';

  import { debounce, handleHttpRequest } from '@/src/functions';
  import Image from '@/src/components/image/index.svelte';
  import Loader from '@/src/components/loader/index.svelte';

  export let toSearch: string = '';

  let autocompleteData: AutocompleteResponse[] | null = [];
  let isSearching = false;
  let isLoading = false;

  const debounceInput = debounce(({ value }) => {
    handleHttpRequest<AutocompleteResponse[]>(`/api/auto-complete?q=${value}`)
      .then((data) => {
        autocompleteData = data;
      })
      .finally(() => {
        isLoading = false;
      });
  }, 3000);

  const clearStates = () => {
    isSearching = false;
    isLoading = false;
    autocompleteData = [];
    debounceInput({ cancel: true });
  };

  const handleToSearch = (value: string) => {
    const shouldSearch = value.trim().length > 3;

    if (shouldSearch === false) {
      clearStates();
      return;
    }

    isSearching = true;
    isLoading = true;
    debounceInput({ value });
  };

  $: handleToSearch(toSearch);
</script>

<article class="autocomplete {isSearching && 'autocomplete--searching'}">
  {#if isLoading}
    <div class="autocomplete__loader">
      <Loader />
    </div>
  {:else if autocompleteData === null}
    <article class="autocomplete__no-data">
      <p>We are sorry! We could not find any weather data 😥 ⛈️</p>
    </article>
  {:else}
    <ul class="autocomplete__list">
      {#each autocompleteData as weather}
        <li class="autocomplete__item">
          <article class="autocomplete__content">
            <figure class="autocomplete__fig">
              <Image className="autocomplete__flag" src={weather.src} alt={weather.country} />
            </figure>
            <section class="autocomplete__info">
              <header>
                <h3 class="autocomplete__name">{weather.name}</h3>
              </header>
              <div class="autocomplete__details">
                <p class="autocomplete__region {weather.region || 'hidden'}">{weather.region},</p>
                <p class="autocomplete__country">{weather.country}</p>
              </div>
            </section>
          </article>
        </li>
      {/each}
    </ul>
  {/if}
</article>

<style>
  .autocomplete {
    position: relative;
    min-height: 0px;
    border: 0 solid var(--background);

    transition: min-height 200ms ease-out, border 200ms ease-out;
  }

  .autocomplete--searching {
    border: 2px solid var(--outline);
    border-top: none;
    border-radius: 0 0 8px 8px;

    min-height: 372px;
  }

  .autocomplete__loader {
    position: absolute;
    display: grid;
    place-items: center;

    height: 100%;
    width: 100%;
  }

  .autocomplete__no-data {
    position: absolute;
    display: grid;
    place-items: center;

    text-align: center;

    height: 100%;
    width: 100%;
    padding: 1rem;
  }

  .autocomplete__list {
    display: flex;
    flex-direction: column;
  }

  .autocomplete__item {
    cursor: pointer;
    list-style: none;
    padding: 1rem;

    transition: background-color 200ms ease-in-out;
  }

  .autocomplete__item:hover {
    background-color: var(--primary);
  }

  .autocomplete__item:hover .autocomplete__name,
  .autocomplete__item:hover .autocomplete__region,
  .autocomplete__item:hover .autocomplete__country {
    color: var(--background);
  }

  .autocomplete__content {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }

  .autocomplete__fig {
    aspect-ratio: 16/9;
    text-align: center;
    width: auto;
    height: 32px;
  }

  /* Should improve this */
  :global(.autocomplete__flag) {
    width: auto;
    height: 100%;
    border-radius: 4px;
  }

  .autocomplete__details {
    display: flex;
    gap: 0.3rem;
  }

  .autocomplete__name,
  .autocomplete__region,
  .autocomplete__country {
    transition: color 200ms ease-in-out;
  }

  .autocomplete__region {
    font-size: 0.8rem;
  }

  .autocomplete__country {
    font-size: 0.8rem;
  }
</style>
