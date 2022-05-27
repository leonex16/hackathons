<script lang="ts">
  import { leftScreen } from '@/src/store/index';

  const handleBackdrop = () => leftScreen.showLeftScreen(false);
</script>

<aside class="left-menu">
  <div class="left-menu__backdrop {$leftScreen || 'hidden'}" on:click={handleBackdrop} />
  <article class="left-menu__content {$leftScreen && 'left-menu__content--active'}">
    <section class="left-menu__body"><slot /></section>
  </article>
</aside>

<style>
  .left-menu__backdrop {
    position: absolute;
    top: 0;
    left: 0;

    background-color: #0005;

    height: 100%;
    width: 100%;
  }

  .left-menu__content {
    position: absolute;
    top: 0;
    left: 0;

    background-color: var(--background);
    border-radius: 10px;
    outline: 2px solid var(--outline);

    overflow: hidden;

    height: 100%;
    width: 100%;

    transform: translateX(calc( -100% - 1px));
    transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;
  }

  .left-menu__content--active {
    transform: translateX(-30%);
  }

  .left-menu__body {
    outline: 2px solid;

    height: 100%;
    width: 70%;

    margin-left: auto;
  }
</style>
