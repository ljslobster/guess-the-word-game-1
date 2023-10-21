<script lang="ts">
  import { onMount } from 'svelte';
  import '../global.css'

  let bg: HTMLImageElement;
  let bgLoaded = false;

  onMount(() => {
    if (bg.complete) {
      bgLoaded = true;
    }
  })
 
  const handleLoad = () => {
    bgLoaded = true;
  };

  $: loaded = bgLoaded;
</script>

<div class:loaded class="guess__container" style="background-image: url('/bg-guess-the-word-small.png')">
  <img class="guess__bg" src="/bg-guess-the-word.png" alt="Small background guess the word" loading="lazy" on:load={handleLoad} bind:this={bg}>
  <slot />
</div>

<style>
  :root {
    --color-gray-light: #97A3B6;
    --color-gray-dark: #4A5567;
    --color-gray-very-dark: rgb(34, 34, 34);
    --color-magenta: #672171;
    --color-pink: #C951E7;
    --color-purple: #7429C6;
    --color-dark: #030616;
    --color-white: #F2F5F9;
    --color-very-dark-blue: #030617;
    --color-dark-blue: #21283a;

    --border-r: 10px;
    --border-r-sm: 5px;
    
    --purple-to-pink: linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );
    --very-dark-blue-to-dark-blue: linear-gradient(
      140deg,
      var(--color-very-dark-blue),
      var(--color-dark-blue)
    );

    --font-large: 2rem;
    --font-medium: 1.25rem;
    --font-small: 0.75rem;
    --font-button: 0.875rem;

    --sm: 640px;
  }

  @font-face {
    font-family: "Outfit";
    src: url("/fonts/Outfit-Regular.ttf") format("truetype");
  }

  .guess__container {
    background-image: var(--purple-to-pink);
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    font-family: 'Outfit';
  }

  .guess__container.loaded .guess__bg {
    opacity: 1;
  }

  .guess__container .guess__bg {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    width: 100%;
    position: absolute;
    height: 100%;
    object-fit: cover;
    z-index: 5;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
</style>
