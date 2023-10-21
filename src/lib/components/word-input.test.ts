import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
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

  it("should the input not typed if the users type a letter different of 'a'", async () => {
    render(WordInput, {
      props: {
        letter
      }
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined()
    
    const isInput = input instanceof HTMLInputElement;
    
    expect(isInput).toBeTruthy();
    if (!isInput) return;

    await userEvent.type(input, "b");

    expect(input.value).toBe("");
  })
})