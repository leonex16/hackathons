<script lang="ts">
  export let className: string;
  export let src: string;
  export let alt: string;

  const handleEvent = (evt: Event) => {
    const img = evt.target as HTMLImageElement;

    switch (evt.type) {
      case 'load':
        img.style.backgroundImage = '';
        break;

      case 'error':
        img.src = '/src/static/unknown-country-flag.png';
        break;

      default:
        throw new Error('Unknown event type');
    }
  };
</script>

<img class={className} {src} {alt} on:error={handleEvent} on:load={handleEvent} />

<style>
  img {
    background-image: url('../../static/loader-img.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: inline-block;
  }
</style>
