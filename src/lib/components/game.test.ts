import { afterEach, describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/svelte";
import Game from "./Game.svelte";

describe("Game component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render", () => {
    render(Game);
  });

  it("should render 6 inputs", () => {
    render(Game);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(6);
  })

  it("should render two buttons: random and reset", () => {
    render(Game);
    const randomBtn = screen.getByRole("button", { name: "Random" });
    const resetBtn = screen.getByRole("button", { name: "Reset" });
    
    expect(randomBtn).toBeDefined();
    expect(resetBtn).toBeDefined();
  })

  it("should render a tries component", () => {
    render(Game);
    const tries = screen.getByText("Tries");
    expect(tries).toBeDefined();
  })
})
