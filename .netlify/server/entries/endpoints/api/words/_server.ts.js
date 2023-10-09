import { j as json } from "../../../../chunks/index.js";
const wordsJSON = [
  "flower",
  "people",
  "moment",
  "winter",
  "summer",
  "spring",
  "autumn",
  "forest",
  "island",
  "desert",
  "jungle",
  "fields",
  "meadow",
  "stream",
  "valley",
  "forest",
  "sunset",
  "castle",
  "palace",
  "market",
  "subway",
  "bridge",
  "tunnel",
  "meadow",
  "garden",
  "meadow",
  "forest",
  "jungle",
  "island",
  "desert",
  "tundra",
  "steppe"
];
function scrambleWord(word) {
  const scrambledWord = word.split("").sort(() => Math.random() - 0.5).join("");
  if (scrambledWord === word) {
    return scrambleWord(word);
  }
  return scrambledWord;
}
async function GET() {
  const words = await Promise.resolve(wordsJSON);
  const randomWordIndex = Math.floor(Math.random() * words.length);
  const word = words[randomWordIndex];
  const scrambledWord = scrambleWord(word);
  return json({
    normal: word,
    scrambled: scrambledWord
  });
}
export {
  GET
};
