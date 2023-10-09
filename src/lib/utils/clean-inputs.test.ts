import { expect, it, describe } from "vitest";
import cleanInputs from "./clean-inputs";

describe("cleanInputs function", () => {
  it("should clean inputs", () => {
    const firstInput = document.createElement("input");
    firstInput.value = "test";
    const secondInput = document.createElement("input");
    secondInput.value = "test2";
    const inputs = [firstInput, secondInput];

    cleanInputs(inputs);
    expect(firstInput.value).toBe("");
    expect(secondInput.value).toBe("");
  })
})