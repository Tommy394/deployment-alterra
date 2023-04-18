import { rest } from "msw";

export const handlers = rest.get(
	"https://jsonplaceholder.typicode.com/posts",
	(req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ rates: { IDR: 14987.54 } }));
	}
);
