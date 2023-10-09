import { derived, writable } from "svelte/store";
import { getRandomWord } from "../services";
import { GAME_STATUS } from "../constants";
import type { Game, WordObject } from "../models/game.model";

export function createGame({
  initialWord = { normal: "", scrambled: "" }
}: {
  initialWord: WordObject;
}): Game {
  const status = writable(GAME_STATUS.PLAYING);
  const currentWord = writable<WordObject>(initialWord);
  const mistakes = writable<string[]>([]);
  const tries = derived(mistakes, (mistakes) => {
    return mistakes.length;
  })

  async function changeWord() {
    const randomWord = await getRandomWord();
    currentWord.set(randomWord);
  }

  async function reset() {
    status.set(GAME_STATUS.PLAYING);
    mistakes.set([]);
  }

  async function resetAll () {
    status.set(GAME_STATUS.NONE);
    mistakes.set([]);
    currentWord.set(initialWord);
    await start();
  }

  function addMistake(mistake: string) {
    mistakes.update((mistakes) => {
      return [...mistakes, mistake];
    });
  }

  async function checkFilledWord(word: string) {
    let winned = false;

    const unsubscribe = currentWord.subscribe((currentWord) => {
      winned = currentWord.normal === word.toLowerCase();
    });

    unsubscribe();

    reset();
    if (winned) {
      alert("🎉 Success");
    }
  }

  async function start() {
    status.set(GAME_STATUS.PLAYING);
    await changeWord();
  }

  return {
    status,
    currentWord,
    tries,
    mistakes,
    changeWord,
    reset,
    start,
    addMistake,
    resetAll,
    checkFilledWord
  };
}
