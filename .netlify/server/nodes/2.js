

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.81950edf.js","_app/immutable/chunks/scheduler.b59f2731.js","_app/immutable/chunks/index.07cbc064.js","_app/immutable/chunks/index.cc2cdcf5.js"];
export const stylesheets = ["_app/immutable/assets/2.68438a9b.css"];
export const fonts = [];
