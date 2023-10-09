import { expect, it, describe } from "vitest";
import { scrambleWord } from "./scramble-word";

describe("Scramble Word function", () => {
  it("should return a scrambled word different from the original", () => {
    const word = "hello"
    const scrambledWord = scrambleWord(word)
    if (scrambledWord === word) {
      expect(scrambledWord).not.toEqual(word)
    }
  })

  it("should return a scrambled word with the same length as the original", () => {
    const word = "hello"
    const scrambledWord = scrambleWord(word)
    expect(scrambledWord.length).toEqual(word.length)
  })
})