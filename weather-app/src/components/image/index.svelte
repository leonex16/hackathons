<script lang="ts">
  export let className: string;
  export let src: string;
  export let alt: string;

  const handleEvent = (evt: Event) => {
    const img = evt.target as HTMLImageElement;
    if (evt.type === 'error') {
      img.src = '/src/static/unknown-country-flag.png';
    } else if (evt.type === 'load') {
      img.style.backgroundImage = '';
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