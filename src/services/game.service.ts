import type { WordObject } from "../models/game.model"

export async function getRandomWord (): Promise<WordObject> {
  const res = await fetch('http://localhost:5173/api/words')
  const json = await res.json()

  return json
}