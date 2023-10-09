

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d6deef7a.js","_app/immutable/chunks/scheduler.b59f2731.js","_app/immutable/chunks/index.07cbc064.js"];
export const stylesheets = ["_app/immutable/assets/0.c788076e.css"];
export const fonts = [];
