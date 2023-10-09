<script lang="ts">
  import Game from "$lib/components/Game.svelte";
  import { onMount } from "svelte";
  import { GAME_STATUS } from "../constants";
  import { createGame } from "../shared-state";
  import WordScramblle from "$lib/icons/WordScramblle.svelte";

  const MAX_TRIES = 5;
  const initialWord = { normal: "", scrambled: "" };

  const game = createGame({
    initialWord,
  });
  const { status } = game;

  onMount(() => {
    game.start();
  });
</script>

<article>
  <WordScramblle />
  {#if $status === GAME_STATUS.PLAYING}
    <Game {MAX_TRIES} {game} />
  {/if}
</article>

<style>
  article {
    max-width: 500px;
    background-image: var(--very-dark-blue-to-dark-blue);
    padding: 2rem 1.6rem;
    border-radius: var(--border-r);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;
    z-index: 10;
  }

  @media screen and (max-width: 500px) {
    article {
      max-width: 90%;
      padding: 1.25rem;
    }
  }
</style>
