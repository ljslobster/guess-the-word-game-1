import { json } from '@sveltejs/kit'
import wordsJSON from '../../../words.json'
import { scrambleWord } from '../utils/scramble-word'

export async function GET () {
  const words = await Promise.resolve(wordsJSON)
  
  const randomWordIndex = Math.floor(Math.random() * words.length)
  const word = words[randomWordIndex]

  const scrambledWord = scrambleWord(word)

  return json({
    normal: word,
    scrambled: scrambledWord
  })
}