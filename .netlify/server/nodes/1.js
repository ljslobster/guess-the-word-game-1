

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8cede840.js","_app/immutable/chunks/scheduler.b59f2731.js","_app/immutable/chunks/index.07cbc064.js","_app/immutable/chunks/singletons.88f5d42b.js","_app/immutable/chunks/index.cc2cdcf5.js"];
export const stylesheets = [];
export const fonts = [];
