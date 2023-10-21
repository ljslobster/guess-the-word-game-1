import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/svelte";
import Tries from "./Tries.svelte";

describe("Tries component", () => {
  const tries = 3;
  const maxTries = 5;

  afterEach(() => {
    cleanup();
  })

  it("should render", () => {
    render(Tries, {
      props: {
        tries,
        maxTries
      }
    });

    const triesText = screen.getByText("Tries");
    expect(triesText).toBeDefined();
  })

  it("should render -maxTries spans", () => {
    render(Tries, {
      props: {
        tries,
        maxTries
      }
    });

    const spans = screen.getAllByRole("span");

    expect(spans.length).toBe(maxTries);
  })
})