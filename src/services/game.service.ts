import type { WordObject } from "../models/game.model"

export async function getRandomWord (): Promise<WordObject> {
  const res = await fetch('https://guess-the-word-66.netlify.app/api/words')
  
  const json = await res.json()

  return json
}