<script lang="ts">
  import type { Game } from "../../models/game.model";
  import Tries from "./Tries.svelte";
  import WordInput from "./WordInput.svelte";
  import { createEventDispatcher, onMount } from "svelte";

  export let game: Game, MAX_TRIES: number;

  let inputs: HTMLInputElement[];

  let form: HTMLFormElement;

  const dispatch = createEventDispatcher();
  const { tries, mistakes, currentWord: currentWordStore, reset, resetAll, changeWord, addMistake } = game;
  $: currentWord = $currentWordStore ?? { normal: "", scrambled: "" };

  $: currentWordLength =
    currentWord?.normal.length === 0 ? 6 : currentWord?.normal.length;
  $: currentWordArray =
    currentWord?.normal !== ""
      ? currentWord.normal.split("")
      : Array(6).fill("");

  onMount(() => {
    inputs = Array.from(form.querySelectorAll("input"));
    inputs[0]?.focus();
  });

  const cleanInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });

    inputs[0]?.focus();
  };

  const handleClick = () => {
    changeWord();
  };

  const handleReset = () => {
    reset();
    cleanInputs();
  };


  const handleFilled = () => {
    let wordInput = "";

    inputs.forEach((input) => {
      wordInput += input.value;
    });

    cleanInputs();
    dispatch("filled", { word: wordInput });
  };

  const passFocus = ({ input }: { input: HTMLInputElement }) => {
    const index = inputs.indexOf(input);

    inputs[index + 1]?.focus();
  };

  const checkInputs = () => {
    let allFilled = inputs.every((input) => input.value !== "");

    if (allFilled) {
      handleFilled();
    }
  };

  const handleInput = (
    event: CustomEvent<{
      value: string;
      input: HTMLInputElement;
      letter: string;
    }>
  ) => {
    const { value, letter, input } = event.detail;

    if (value !== "" && currentWord.normal !== "") {
      passFocus({ input });

      checkInputs();
    }
  };

  const handleMistake = (event: CustomEvent<{ value: string }>) => {
    const { value } = event.detail;

    addMistake(value);
  }

  $: if ($mistakes.length === MAX_TRIES) {
    cleanInputs();
    resetAll()
  }
</script>

<header>
  <h2>
    {currentWord.scrambled === ""
      ? "-".repeat(currentWordLength)
      : currentWord.scrambled}
  </h2>
</header>
<main>
  <section>
    <Tries maxTries={MAX_TRIES} tries={$tries} />
    {#if $mistakes.length === 0}
      <p>No mistakes</p>
    {:else}
      <p>Mistakes: <span class="mistakes">{$mistakes.join(", ")}</span></p>
    {/if}
  </section>
  <form bind:this={form}>
    {#each currentWordArray as letter}
      <WordInput on:input={handleInput} on:mistake={handleMistake} {letter} />
    {/each}
  </form>
</main>
<footer>
  <button class="random-btn" on:click={handleClick}>Random</button>
  <button class="reset-btn" on:click={handleReset}>Reset</button>
</footer>

<style>
  .mistakes {
    color: var(--color-gray-light);
  }

  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
    color: var(--color-gray-dark);
    font-weight: bold;
    font-size: var(--font-small);
  }

  form {
    padding: 2rem 0;
    display: flex;
    gap: 5px;
  }

  main {
    width: fit-content;
    padding: 0 1.6rem;
    display: flex;
    flex-direction: column;
    gap: .6rem;
    justify-content: center;
    align-items: center;
  }

  h2 {
    letter-spacing: 1rem;
    font-size: var(--font-large);
  }

  footer {
    display: flex;
    gap: 1.5rem;
  }

  header {
    background: var(--color-gray-dark);
    color: var(--color-gray-light);
    padding: 1rem;
    width: 100%;
    border-radius: var(--border-r-sm);
    box-shadow: 0px 4px 0 #000;
    text-align: center;
  }

  button {
    padding: 0.6rem 2.5rem;
    border-radius: var(--border-r);
    border: none;
    outline: none;
    cursor: pointer;
    font-size: var(--font-button);
    font-weight: bold;
    transition: opacity 0.2s ease;
    background-color: var(--color-pink);
    box-shadow: 0 4px 0 var(--color-purple);
    color: #fff;
    font-family: inherit;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(1.02);
    }
  }
</style>
