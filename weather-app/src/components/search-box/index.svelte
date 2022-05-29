<script lang="ts">
  import Autocomplete from "@/src/components/autocomplete/index.svelte";
  export let placeholder = 'Search for a city';

  let inputValue: string;

  const handleSubmit = (evt: SubmitEvent) => {
    // TODO
  };

</script>
<form class="search-box" on:submit|preventDefault={handleSubmit}>
  <label class="search-box__label">
    <input class="search-box__input" type="search" {placeholder} bind:value={inputValue}/>
    <!-- <span class="search-box__icon material-symbols-rounded" on:click={handleClearBtn}>close</span> -->
  </label>
</form>
<Autocomplete bind:toSearch={inputValue} />


<style>
  .search-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .search-box__label {
    position: relative;
    width: 100%;
  }

  .search-box__input {
    color: var(--black);
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    outline: 2px solid var(--outline);
    padding: 0.8rem 1rem;
    width: 100%;
  }

  /* .search-box__icon {
    position: absolute;
    top: 50%;
    right: 0.5rem;

    color: var(--black);
    cursor: pointer;

    font-size: 18px;

    transform: translateY(-50%);
  } */
</style>
