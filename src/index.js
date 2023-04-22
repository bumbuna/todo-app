// API for a todo app
//
// functionality
// - register
// - login
// - view todos
// - add todos
// - manage todos(delete,update status)
// - logout
// - info
// - generate report


export default {
	async fetch(request, env, ctx) {
		const {pathname} = new URL(request.url)
		return new Response(JSON.stringify(env));
	},
};
