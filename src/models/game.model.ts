import type { Readable, Writable } from "svelte/store"
import type { GAME_STATUS } from "../constants"

export type GameStatus = typeof GAME_STATUS[keyof typeof GAME_STATUS]

export type Word = `${string}${string}${string}${string}${string}${string}` 

export interface WordObject {
  normal: Word
  scrambled: Word
}

export interface Game {
  status: Writable<GameStatus>
  currentWord: Writable<WordObject>
  tries: Readable<number>
  mistakes: Writable<string[]>
  changeWord: () => void
  reset: () => void
  start: () => void
  addMistake: (mistake: string) => void
  checkFilledWord: (word: string) => void
  resetAll: () => void
}