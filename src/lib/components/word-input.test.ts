import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/svelte";
import WordInput from "./WordInput.svelte";

describe("WordInput component", () => {
  const letter = "a";

  afterEach(() => {
    cleanup();
  })

  it("should render", () => {
    render(WordInput, {
      props: {
        letter
      }
    });
  })

  it("should the input not changes if the users type a letter different of -letter", () => {
    render(WordInput, {
      props: {
        letter
      }
    });

    const input = screen.getByTestId("input") as HTMLInputElement;

    input.value = "b";

    expect(input.value).toBe(letter);
  })  
})