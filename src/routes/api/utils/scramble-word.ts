export function scrambleWord(word: string) {
  const scrambledWord = word.split('').sort(() => Math.random() - 0.5).join('')

  if (scrambledWord === word) {
    return scrambleWord(word)
  }

  return scrambledWord
}