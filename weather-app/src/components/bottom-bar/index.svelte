<script lang="ts">
  export let showLeftScreen = false;

  const handleClick = (screen: string) => {
    showLeftScreen = screen === 'settings';
  };
</script>

<footer>
  <nav class="bottom-bar">
    <ul class="bottom-bar__links">
      <li class="bottom-bar__link">
        <button
          class="bottom-bar__btn material-symbols-rounded"
          on:click|preventDefault={() => handleClick('settings')}>settings</button
        >
      </li>
      <li class="bottom-bar__link">
        <button
          class="bottom-bar__btn material-symbols-rounded"
          on:click|preventDefault={() => handleClick('home')}>cottage</button
        >
      </li>
      <li class="bottom-bar__link">
        <button
          class="bottom-bar__btn material-symbols-rounded"
          on:click|preventDefault={() => handleClick('search')}>search</button
        >
      </li>
    </ul>
  </nav>
</footer>

<style>
  .bottom-bar {
    padding: 1rem;
    width: 100%;
  }

  .bottom-bar__links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 10px;
    outline: 2px solid var(--outline);

    padding: 1rem 0;
    width: 100%;
  }

  .bottom-bar__link {
    list-style: none;
  }

  .bottom-bar__btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 32px;
  }
</style>
