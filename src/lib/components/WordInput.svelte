<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let letter: string;

  let input: HTMLInputElement;
  $: value = input?.value ?? "";
  let isNullAndFocused: boolean = false;

  const dispatch = createEventDispatcher();

  const handleChange = () => {
    if (value === "") {
      isNullAndFocused = true;
      return;
    }
    isNullAndFocused = false;

    if (value.length > 1) {
      value = value[0];
    }

    if (value !== letter) {
      dispatch("mistake", {value});
      value = ""
      isNullAndFocused = true;
      return;
    }

    dispatch("input", { input, value, letter });
  };

  const handleFocusIn = () => {
    input.setSelectionRange(value.length, value.length);
    isNullAndFocused = input.value === "";
    input.setSelectionRange(value.length, value.length);
  };

  const handleFocusOut = () => {
    isNullAndFocused = false;
  };

  $: isnull = isNullAndFocused;
</script>

<div class:isnull>
  <input
    data-testid="input"
    bind:this={input}
    on:focusin={handleFocusIn}
    on:focusout={handleFocusOut}
    bind:value
    on:input={handleChange}
  />
</div>

<style>
  div {
    width: fit-content;
    position: relative;
  }
  input {
    padding: 5px 10px;
    background-color: inherit;
    font-size: 18px;
    width: 50px;
    height: 50px;
    border: 3px solid var(--color-gray-dark);
    border-radius: var(--border-r);
    color: #fff;
    text-align: center;
    font-size: var(--font-medium);
    font-family: inherit;
    font-weight: bold;
    transition: border 0.2s ease;
  }

  .isnull::after {
    content: "_";
    color: var(--color-gray-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    animation: pulse 1.5s infinite;
  }

  input::placeholder {
    color: var(--color-gray-light);
    font-size: 1.3rem;
    font-weight: bold;
  }

  input {
    caret-color: transparent;
  }

  input:focus {
    outline: none;
    border: 3px solid var(--color-magenta);
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }


  @media screen and (max-width: 500px) {
    input {
      width: 40px;
      height: 40px;
    }
  }
</style>
