import { c as create_ssr_component, e as escape, d as each, f as createEventDispatcher, a as add_attribute, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { d as derived, w as writable } from "../../chunks/index2.js";
function cleanInputs(inputs) {
  inputs.forEach((input) => {
    input.value = "";
  });
}
const Tries_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1tq28ly{display:flex;gap:5px}section.svelte-1tq28ly{display:flex;gap:1rem;align-items:center}.try.svelte-1tq28ly{display:inline-block;width:10px;height:10px;border-radius:50%;background-color:var(--color-gray-dark);color:var(--color-white);font-size:var(--font-medium)}.try.lost.svelte-1tq28ly{background-color:var(--color-purple)}",
  map: null
};
const Tries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { maxTries, tries } = $$props;
  if ($$props.maxTries === void 0 && $$bindings.maxTries && maxTries !== void 0)
    $$bindings.maxTries(maxTries);
  if ($$props.tries === void 0 && $$bindings.tries && tries !== void 0)
    $$bindings.tries(tries);
  $$result.css.add(css$3);
  return `<section class="svelte-1tq28ly"><p>Tries (${escape(tries)}/${escape(maxTries)}):</p> <div class="svelte-1tq28ly">${each(Array(maxTries), (_, i) => {
    return `<span class="${"try " + escape(i < tries ? "lost" : "", true) + " svelte-1tq28ly"}"></span>`;
  })}</div> </section>`;
});
const WordInput_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'div.svelte-dg8o5f{width:fit-content;position:relative}input.svelte-dg8o5f{padding:5px 10px;background-color:inherit;font-size:18px;width:50px;height:50px;border:3px solid var(--color-gray-dark);border-radius:var(--border-r);color:#fff;text-align:center;font-size:var(--font-medium);font-family:inherit;font-weight:bold;transition:border 0.2s ease}.isnull.svelte-dg8o5f::after{content:"_";color:var(--color-gray-light);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:2rem;animation:svelte-dg8o5f-pulse 1.5s infinite}input.svelte-dg8o5f::placeholder{color:var(--color-gray-light);font-size:1.3rem;font-weight:bold}input.svelte-dg8o5f{caret-color:transparent}input.svelte-dg8o5f:focus{outline:none;border:3px solid var(--color-magenta)}@keyframes svelte-dg8o5f-pulse{0%{opacity:1}50%{opacity:0.5}100%{opacity:1}}@media screen and (max-width: 500px){input.svelte-dg8o5f{width:40px;height:40px}}',
  map: null
};
const WordInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let isnull;
  let { letter } = $$props;
  let input;
  let isNullAndFocused = false;
  createEventDispatcher();
  if ($$props.letter === void 0 && $$bindings.letter && letter !== void 0)
    $$bindings.letter(letter);
  $$result.css.add(css$2);
  value = "";
  isnull = isNullAndFocused;
  return `<div class="${["svelte-dg8o5f", isnull ? "isnull" : ""].join(" ").trim()}"><input data-testid="input" class="svelte-dg8o5f"${add_attribute("this", input, 0)}${add_attribute("value", value, 0)}> </div>`;
});
const Game_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".mistakes.svelte-pjyhrk{color:var(--color-gray-light)}section.svelte-pjyhrk{display:flex;width:100%;justify-content:space-between;align-items:end;color:var(--color-gray-dark);font-weight:bold;font-size:var(--font-small)}form.svelte-pjyhrk{padding:2rem 0;display:flex;gap:5px}main.svelte-pjyhrk{width:fit-content;padding:0 1.6rem;display:flex;flex-direction:column;gap:0.6rem;justify-content:center;align-items:center}h2.svelte-pjyhrk{letter-spacing:1rem;font-size:var(--font-large)}footer.svelte-pjyhrk{display:flex;gap:1.5rem}header.svelte-pjyhrk{background:var(--color-gray-dark);color:var(--color-gray-light);padding:1rem;width:100%;border-radius:var(--border-r-sm);box-shadow:0px 4px 0 #000;text-align:center}button.svelte-pjyhrk{padding:0.6rem 2.5rem;border-radius:var(--border-r);border:none;outline:none;cursor:pointer;font-size:var(--font-button);font-weight:bold;transition:opacity 0.2s ease;background-color:var(--color-pink);box-shadow:0 4px 0 var(--color-purple);color:#fff;font-family:inherit}button.svelte-pjyhrk:hover{opacity:0.8}button.svelte-pjyhrk:active{transform:scale(1.02)}",
  map: null
};
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mistakes, $$unsubscribe_mistakes;
  let $currentWordStore, $$unsubscribe_currentWordStore;
  let $tries, $$unsubscribe_tries;
  let { game, MAX_TRIES: MAX_TRIES2 } = $$props;
  let inputs;
  let currentWord;
  let currentWordLength;
  let currentWordArray;
  let form;
  const { tries, mistakes, currentWord: currentWordStore, checkFilledWord, reset, resetAll, changeWord, addMistake } = game;
  $$unsubscribe_tries = subscribe(tries, (value) => $tries = value);
  $$unsubscribe_mistakes = subscribe(mistakes, (value) => $mistakes = value);
  $$unsubscribe_currentWordStore = subscribe(currentWordStore, (value) => $currentWordStore = value);
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  if ($$props.MAX_TRIES === void 0 && $$bindings.MAX_TRIES && MAX_TRIES2 !== void 0)
    $$bindings.MAX_TRIES(MAX_TRIES2);
  $$result.css.add(css$1);
  {
    {
      currentWord = $currentWordStore ?? { normal: "", scrambled: "" };
      currentWordLength = currentWord?.normal.length === 0 ? 6 : currentWord?.normal.length;
      currentWordArray = currentWord?.normal !== "" ? currentWord.normal.split("") : Array(6).fill("");
    }
  }
  {
    if ($mistakes.length === MAX_TRIES2) {
      cleanInputs(inputs);
      resetAll();
    }
  }
  $$unsubscribe_mistakes();
  $$unsubscribe_currentWordStore();
  $$unsubscribe_tries();
  return `<header class="svelte-pjyhrk"><h2 class="svelte-pjyhrk">${escape(currentWord.scrambled === "" ? "-".repeat(currentWordLength) : currentWord.scrambled)}</h2></header> <main class="svelte-pjyhrk"><section class="svelte-pjyhrk">${validate_component(Tries, "Tries").$$render($$result, { maxTries: MAX_TRIES2, tries: $tries }, {}, {})} ${$mistakes.length === 0 ? `<p data-svelte-h="svelte-1tnj0c8">No mistakes</p>` : `<p>Mistakes: <span class="mistakes svelte-pjyhrk">${escape($mistakes.join(", "))}</span></p>`}</section> <form class="svelte-pjyhrk"${add_attribute("this", form, 0)}>${each(currentWordArray, (letter) => {
    return `${validate_component(WordInput, "WordInput").$$render($$result, { letter }, {}, {})}`;
  })}</form></main> <footer class="svelte-pjyhrk"><button class="random-btn svelte-pjyhrk" data-svelte-h="svelte-tst086">Random</button> <button class="reset-btn svelte-pjyhrk" data-svelte-h="svelte-1xelplj">Reset</button> </footer>`;
});
const GAME_STATUS = {
  PLAYING: "playing",
  WON: "won",
  LOST: "lost",
  NONE: "none"
};
async function getRandomWord() {
  const res = await fetch("http://localhost:5173/api/words");
  const json = await res.json();
  return json;
}
function createGame({
  initialWord = { normal: "", scrambled: "" }
}) {
  const status = writable(GAME_STATUS.PLAYING);
  const currentWord = writable(initialWord);
  const mistakes = writable([]);
  const tries = derived(mistakes, (mistakes2) => {
    return mistakes2.length;
  });
  async function changeWord() {
    const randomWord = await getRandomWord();
    currentWord.set(randomWord);
  }
  async function reset() {
    status.set(GAME_STATUS.PLAYING);
    mistakes.set([]);
  }
  async function resetAll() {
    status.set(GAME_STATUS.NONE);
    mistakes.set([]);
    currentWord.set(initialWord);
    await start();
  }
  function addMistake(mistake) {
    mistakes.update((mistakes2) => {
      return [...mistakes2, mistake];
    });
  }
  async function checkFilledWord(word) {
    let winned = false;
    const unsubscribe = currentWord.subscribe((currentWord2) => {
      winned = currentWord2.normal === word.toLowerCase();
    });
    unsubscribe();
    resetAll();
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
const WordScramblle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="144" height="16" viewBox="0 0 144 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.88 15L0.34 0.879999H3.46L6.78 11.74H5.56L8.8 0.879999H11.26L14.5 11.74H13.3L16.6 0.879999H19.7L15.16 15H12.7L9.44 4.14H10.6L7.34 15H4.88ZM24.3491 15.22C23.3491 15.22 22.4424 15 21.6291 14.56C20.8291 14.1067 20.1957 13.4933 19.7291 12.72C19.2624 11.9467 19.0291 11.08 19.0291 10.12C19.0291 9.16 19.2624 8.3 19.7291 7.54C20.1957 6.78 20.8291 6.18 21.6291 5.74C22.4291 5.28667 23.3357 5.06 24.3491 5.06C25.3624 5.06 26.2691 5.28 27.0691 5.72C27.8691 6.16 28.5024 6.76667 28.9691 7.54C29.4357 8.3 29.6691 9.16 29.6691 10.12C29.6691 11.08 29.4357 11.9467 28.9691 12.72C28.5024 13.4933 27.8691 14.1067 27.0691 14.56C26.2691 15 25.3624 15.22 24.3491 15.22ZM24.3491 12.44C24.7891 12.44 25.1757 12.3467 25.5091 12.16C25.8424 11.96 26.0957 11.6867 26.2691 11.34C26.4557 10.98 26.5491 10.5733 26.5491 10.12C26.5491 9.66667 26.4557 9.27333 26.2691 8.94C26.0824 8.59333 25.8224 8.32667 25.4891 8.14C25.1691 7.94 24.7891 7.84 24.3491 7.84C23.9224 7.84 23.5424 7.94 23.2091 8.14C22.8757 8.32667 22.6157 8.59333 22.4291 8.94C22.2424 9.28667 22.1491 9.68667 22.1491 10.14C22.1491 10.58 22.2424 10.98 22.4291 11.34C22.6157 11.6867 22.8757 11.96 23.2091 12.16C23.5424 12.3467 23.9224 12.44 24.3491 12.44ZM30.9925 15V5.28H34.0525V15H30.9925ZM34.0525 9.66L32.7725 8.66C33.0258 7.52667 33.4525 6.64667 34.0525 6.02C34.6525 5.39333 35.4858 5.08 36.5525 5.08C37.0192 5.08 37.4258 5.15333 37.7725 5.3C38.1325 5.43333 38.4458 5.64667 38.7125 5.94L36.8925 8.24C36.7592 8.09333 36.5925 7.98 36.3925 7.9C36.1925 7.82 35.9658 7.78 35.7125 7.78C35.2058 7.78 34.7992 7.94 34.4925 8.26C34.1992 8.56667 34.0525 9.03333 34.0525 9.66ZM43.1942 15.2C42.2742 15.2 41.4542 14.98 40.7342 14.54C40.0276 14.1 39.4676 13.5 39.0542 12.74C38.6542 11.98 38.4542 11.1133 38.4542 10.14C38.4542 9.16667 38.6542 8.3 39.0542 7.54C39.4676 6.78 40.0276 6.18 40.7342 5.74C41.4542 5.3 42.2742 5.08 43.1942 5.08C43.8609 5.08 44.4609 5.20667 44.9942 5.46C45.5409 5.71333 45.9876 6.06667 46.3342 6.52C46.6942 6.96 46.8942 7.46667 46.9342 8.04V12.14C46.8942 12.7133 46.7009 13.2333 46.3542 13.7C46.0076 14.1533 45.5609 14.52 45.0142 14.8C44.4676 15.0667 43.8609 15.2 43.1942 15.2ZM43.7342 12.44C44.1742 12.44 44.5542 12.3467 44.8742 12.16C45.1942 11.96 45.4476 11.6867 45.6342 11.34C45.8209 10.9933 45.9142 10.5933 45.9142 10.14C45.9142 9.68667 45.8209 9.29333 45.6342 8.96C45.4609 8.61333 45.2076 8.34 44.8742 8.14C44.5542 7.94 44.1809 7.84 43.7542 7.84C43.3276 7.84 42.9476 7.94 42.6142 8.14C42.2942 8.34 42.0342 8.61333 41.8342 8.96C41.6476 9.30667 41.5542 9.7 41.5542 10.14C41.5542 10.58 41.6476 10.9733 41.8342 11.32C42.0209 11.6667 42.2809 11.94 42.6142 12.14C42.9476 12.34 43.3209 12.44 43.7342 12.44ZM48.7942 15H45.7942V12.38L46.2542 10.02L45.7342 7.66V0.48H48.7942V15ZM58.8773 15.22C57.7173 15.22 56.7173 15.0333 55.8773 14.66C55.0507 14.2733 54.2907 13.6933 53.5973 12.92L55.6373 10.9C56.0907 11.42 56.5907 11.8267 57.1373 12.12C57.6973 12.4 58.344 12.54 59.0773 12.54C59.744 12.54 60.2573 12.42 60.6173 12.18C60.9907 11.94 61.1773 11.6067 61.1773 11.18C61.1773 10.7933 61.0573 10.48 60.8173 10.24C60.5773 10 60.2573 9.79333 59.8573 9.62C59.4707 9.44667 59.0373 9.28 58.5573 9.12C58.0907 8.96 57.624 8.78 57.1573 8.58C56.6907 8.36667 56.2573 8.10667 55.8573 7.8C55.4707 7.48 55.1573 7.08667 54.9173 6.62C54.6773 6.14 54.5573 5.54 54.5573 4.82C54.5573 3.95333 54.764 3.20667 55.1773 2.58C55.604 1.95333 56.1907 1.48 56.9373 1.16C57.684 0.826666 58.544 0.66 59.5173 0.66C60.504 0.66 61.404 0.833333 62.2173 1.18C63.044 1.52667 63.724 2 64.2573 2.6L62.2173 4.62C61.7907 4.18 61.3573 3.85333 60.9173 3.64C60.4907 3.42667 60.004 3.32 59.4573 3.32C58.9107 3.32 58.4773 3.42667 58.1573 3.64C57.8373 3.84 57.6773 4.13333 57.6773 4.52C57.6773 4.88 57.7973 5.17333 58.0373 5.4C58.2773 5.61333 58.5907 5.8 58.9773 5.96C59.3773 6.12 59.8107 6.28 60.2773 6.44C60.7573 6.6 61.2307 6.78667 61.6973 7C62.164 7.21333 62.5907 7.48667 62.9773 7.82C63.3773 8.14 63.6973 8.55333 63.9373 9.06C64.1773 9.55333 64.2973 10.1667 64.2973 10.9C64.2973 12.2467 63.8173 13.3067 62.8573 14.08C61.8973 14.84 60.5707 15.22 58.8773 15.22ZM70.4589 15.22C69.4589 15.22 68.5522 15 67.7389 14.56C66.9256 14.12 66.2856 13.5133 65.8189 12.74C65.3522 11.9667 65.1189 11.1 65.1189 10.14C65.1189 9.16667 65.3522 8.3 65.8189 7.54C66.2989 6.76667 66.9456 6.16 67.7589 5.72C68.5722 5.28 69.4856 5.06 70.4989 5.06C71.2589 5.06 71.9522 5.19333 72.5789 5.46C73.2189 5.71333 73.7856 6.1 74.2789 6.62L72.3189 8.58C72.0922 8.32667 71.8256 8.14 71.5189 8.02C71.2256 7.9 70.8856 7.84 70.4989 7.84C70.0589 7.84 69.6656 7.94 69.3189 8.14C68.9856 8.32667 68.7189 8.59333 68.5189 8.94C68.3322 9.27333 68.2389 9.66667 68.2389 10.12C68.2389 10.5733 68.3322 10.9733 68.5189 11.32C68.7189 11.6667 68.9922 11.94 69.3389 12.14C69.6856 12.34 70.0722 12.44 70.4989 12.44C70.8989 12.44 71.2522 12.3733 71.5589 12.24C71.8789 12.0933 72.1522 11.8933 72.3789 11.64L74.3189 13.6C73.8122 14.1333 73.2389 14.54 72.5989 14.82C71.9589 15.0867 71.2456 15.22 70.4589 15.22ZM75.4808 15V5.28H78.5408V15H75.4808ZM78.5408 9.66L77.2608 8.66C77.5141 7.52667 77.9408 6.64667 78.5408 6.02C79.1408 5.39333 79.9741 5.08 81.0408 5.08C81.5074 5.08 81.9141 5.15333 82.2608 5.3C82.6208 5.43333 82.9341 5.64667 83.2008 5.94L81.3808 8.24C81.2474 8.09333 81.0808 7.98 80.8808 7.9C80.6808 7.82 80.4541 7.78 80.2008 7.78C79.6941 7.78 79.2874 7.94 78.9808 8.26C78.6874 8.56667 78.5408 9.03333 78.5408 9.66ZM87.6025 15.2C86.7092 15.2 85.9092 14.98 85.2025 14.54C84.5092 14.1 83.9558 13.5 83.5425 12.74C83.1425 11.98 82.9425 11.1133 82.9425 10.14C82.9425 9.16667 83.1425 8.3 83.5425 7.54C83.9558 6.78 84.5092 6.18 85.2025 5.74C85.9092 5.3 86.7092 5.08 87.6025 5.08C88.2558 5.08 88.8425 5.20667 89.3625 5.46C89.8958 5.71333 90.3292 6.06667 90.6625 6.52C90.9958 6.96 91.1825 7.46667 91.2225 8.04V12.24C91.1825 12.8133 90.9958 13.3267 90.6625 13.78C90.3425 14.22 89.9158 14.5667 89.3825 14.82C88.8492 15.0733 88.2558 15.2 87.6025 15.2ZM88.2225 12.44C88.8758 12.44 89.4025 12.2267 89.8025 11.8C90.2025 11.36 90.4025 10.8067 90.4025 10.14C90.4025 9.68667 90.3092 9.28667 90.1225 8.94C89.9492 8.59333 89.6958 8.32667 89.3625 8.14C89.0425 7.94 88.6692 7.84 88.2425 7.84C87.8158 7.84 87.4358 7.94 87.1025 8.14C86.7825 8.32667 86.5225 8.59333 86.3225 8.94C86.1358 9.28667 86.0425 9.68667 86.0425 10.14C86.0425 10.58 86.1358 10.9733 86.3225 11.32C86.5092 11.6667 86.7692 11.94 87.1025 12.14C87.4358 12.34 87.8092 12.44 88.2225 12.44ZM90.2825 15V12.38L90.7425 10.02L90.2825 7.66V5.28H93.2825V15H90.2825ZM95.237 15V5.28H98.297V15H95.237ZM101.457 15V9.32C101.457 8.82667 101.304 8.44667 100.997 8.18C100.704 7.9 100.337 7.76 99.897 7.76C99.5904 7.76 99.317 7.82667 99.077 7.96C98.837 8.08 98.6437 8.25333 98.497 8.48C98.3637 8.70667 98.297 8.98667 98.297 9.32L97.117 8.8C97.117 8.02667 97.2837 7.36667 97.617 6.82C97.9504 6.26 98.4037 5.83333 98.977 5.54C99.5504 5.23333 100.197 5.08 100.917 5.08C101.597 5.08 102.204 5.23333 102.737 5.54C103.284 5.84667 103.717 6.27333 104.037 6.82C104.357 7.36667 104.517 8.02 104.517 8.78V15H101.457ZM107.677 15V9.32C107.677 8.82667 107.524 8.44667 107.217 8.18C106.924 7.9 106.557 7.76 106.117 7.76C105.81 7.76 105.537 7.82667 105.297 7.96C105.057 8.08 104.864 8.25333 104.717 8.48C104.584 8.70667 104.517 8.98667 104.517 9.32L102.757 9.08C102.784 8.25333 102.977 7.54667 103.337 6.96C103.71 6.36 104.197 5.9 104.797 5.58C105.41 5.24667 106.097 5.08 106.857 5.08C107.604 5.08 108.264 5.24 108.837 5.56C109.424 5.86667 109.884 6.31333 110.217 6.9C110.564 7.47333 110.737 8.16667 110.737 8.98V15H107.677ZM118.098 15.2C117.445 15.2 116.845 15.0667 116.298 14.8C115.751 14.52 115.305 14.1533 114.958 13.7C114.611 13.2333 114.411 12.7133 114.358 12.14V8.04C114.411 7.46667 114.611 6.96 114.958 6.52C115.305 6.06667 115.751 5.71333 116.298 5.46C116.845 5.20667 117.445 5.08 118.098 5.08C119.018 5.08 119.831 5.3 120.538 5.74C121.258 6.18 121.818 6.78 122.218 7.54C122.631 8.3 122.838 9.16667 122.838 10.14C122.838 11.1133 122.631 11.98 122.218 12.74C121.818 13.5 121.258 14.1 120.538 14.54C119.831 14.98 119.018 15.2 118.098 15.2ZM117.558 12.44C117.985 12.44 118.358 12.34 118.678 12.14C119.011 11.94 119.271 11.6667 119.458 11.32C119.645 10.9733 119.738 10.58 119.738 10.14C119.738 9.68667 119.645 9.28667 119.458 8.94C119.271 8.59333 119.011 8.32667 118.678 8.14C118.358 7.94 117.985 7.84 117.558 7.84C117.131 7.84 116.751 7.94 116.418 8.14C116.085 8.32667 115.825 8.59333 115.638 8.94C115.465 9.28667 115.378 9.68667 115.378 10.14C115.378 10.5933 115.471 10.9933 115.658 11.34C115.845 11.6867 116.098 11.96 116.418 12.16C116.751 12.3467 117.131 12.44 117.558 12.44ZM112.498 15V0.48H115.558V7.66L115.058 10.02L115.518 12.38V15H112.498ZM124.193 15V0.48H127.253V15H124.193ZM129.207 15V0.48H132.267V15H129.207ZM139.022 15.22C137.969 15.22 137.029 15.0067 136.202 14.58C135.389 14.14 134.749 13.5333 134.282 12.76C133.816 11.9867 133.582 11.1133 133.582 10.14C133.582 9.16667 133.809 8.3 134.262 7.54C134.729 6.76667 135.356 6.16 136.142 5.72C136.929 5.28 137.816 5.06 138.802 5.06C139.762 5.06 140.609 5.26667 141.342 5.68C142.076 6.09333 142.649 6.66667 143.062 7.4C143.489 8.13333 143.702 8.97333 143.702 9.92C143.702 10.0933 143.689 10.28 143.662 10.48C143.649 10.6667 143.616 10.8867 143.562 11.14L135.182 11.16V9.06L142.262 9.04L140.942 9.92C140.929 9.36 140.842 8.9 140.682 8.54C140.522 8.16667 140.282 7.88667 139.962 7.7C139.656 7.5 139.276 7.4 138.822 7.4C138.342 7.4 137.922 7.51333 137.562 7.74C137.216 7.95333 136.942 8.26 136.742 8.66C136.556 9.06 136.462 9.54667 136.462 10.12C136.462 10.6933 136.562 11.1867 136.762 11.6C136.976 12 137.269 12.3133 137.642 12.54C138.029 12.7533 138.482 12.86 139.002 12.86C139.482 12.86 139.916 12.78 140.302 12.62C140.689 12.4467 141.029 12.1933 141.322 11.86L143.002 13.54C142.522 14.1 141.942 14.52 141.262 14.8C140.582 15.08 139.836 15.22 139.022 15.22Z" fill="url(#paint0_linear_611_983)"></path><defs><linearGradient id="paint0_linear_611_983" x1="7.17033" y1="7" x2="145" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="#7429C6"></stop><stop offset="1" stop-color="#C951E7"></stop></linearGradient></defs></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-kmm14j{max-width:500px;background-image:var(--very-dark-blue-to-dark-blue);padding:2rem 1.6rem;border-radius:var(--border-r);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;position:relative;z-index:10}@media screen and (max-width: 500px){article.svelte-kmm14j{max-width:90%;padding:1.25rem}}",
  map: null
};
const MAX_TRIES = 5;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $status, $$unsubscribe_status;
  const initialWord = { normal: "", scrambled: "" };
  const game = createGame({ initialWord });
  const { status } = game;
  $$unsubscribe_status = subscribe(status, (value) => $status = value);
  $$result.css.add(css);
  $$unsubscribe_status();
  return `<article class="svelte-kmm14j">${validate_component(WordScramblle, "WordScramblle").$$render($$result, {}, {}, {})} ${$status === GAME_STATUS.PLAYING ? `${validate_component(Game, "Game").$$render($$result, { MAX_TRIES, game }, {}, {})}` : ``} </article>`;
});
export {
  Page as default
};
