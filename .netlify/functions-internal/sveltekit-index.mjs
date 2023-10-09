import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-guess-the-word-small.png","bg-guess-the-word.png","favicon.ico","fonts/Outfit-Regular.ttf","guess-the-word-ogimg.jpeg"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.4ecca055.js","app":"_app/immutable/entry/app.be186a84.js","imports":["_app/immutable/entry/start.4ecca055.js","_app/immutable/chunks/scheduler.b59f2731.js","_app/immutable/chunks/singletons.88f5d42b.js","_app/immutable/chunks/index.cc2cdcf5.js","_app/immutable/entry/app.be186a84.js","_app/immutable/chunks/scheduler.b59f2731.js","_app/immutable/chunks/index.07cbc064.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
