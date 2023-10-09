import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `:root{--color-gray-light:#97A3B6;--color-gray-dark:#4A5567;--color-gray-very-dark:rgb(34, 34, 34);--color-magenta:#672171;--color-pink:#C951E7;--color-purple:#7429C6;--color-dark:#030616;--color-white:#F2F5F9;--color-very-dark-blue:#030617;--color-dark-blue:#21283a;--border-r:10px;--border-r-sm:5px;--purple-to-pink:linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );--very-dark-blue-to-dark-blue:linear-gradient(
      140deg,
      var(--color-very-dark-blue),
      var(--color-dark-blue)
    );--font-large:2rem;--font-medium:1.25rem;--font-small:0.75rem;--font-button:0.875rem;--sm:640px}@font-face{font-family:"Outfit";src:url("/fonts/Outfit-Regular.ttf") format("truetype")}.guess__container.svelte-19jsro6.svelte-19jsro6{background-image:var(--purple-to-pink);background-size:cover;background-position:center;min-height:100vh;display:grid;place-items:center;overflow:hidden;font-family:'Outfit'}.guess__container.loaded.svelte-19jsro6 .guess__bg.svelte-19jsro6{opacity:1}.guess__container.svelte-19jsro6 .guess__bg.svelte-19jsro6{opacity:0;transition:opacity 0.5s ease-in-out;width:100%;position:absolute;height:100%;object-fit:cover;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loaded;
  let bg;
  let bgLoaded = false;
  $$result.css.add(css);
  loaded = bgLoaded;
  return `${$$result.head += `<!-- HEAD_svelte-1ixvncq_START --><link rel="preload" href="/fonts/Outfit-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"><!-- HEAD_svelte-1ixvncq_END -->`, ""} <div class="${["guess__container svelte-19jsro6", loaded ? "loaded" : ""].join(" ").trim()}" style="background-image: url('/bg-guess-the-word-small.png')"><img class="guess__bg svelte-19jsro6" src="/bg-guess-the-word.png" alt="Small background guess the word" loading="lazy"${add_attribute("this", bg, 0)}> ${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
