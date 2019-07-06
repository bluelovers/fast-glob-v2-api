/**
 * Created by user on 2019/6/27.
 */

import Bluebird = require('bluebird');

export function promisify(fg: typeof import('fast-glob') | typeof import('./index'), fn: Function | typeof import('bluebird') = Bluebird.method): typeof import('./bluebird')
{
	// @ts-ignore
	if (typeof fn.resolve === 'function' && typeof fn.method === 'function')
	{
		// @ts-ignore
		fn = fn.method
	}
	// @ts-ignore
	else if (fn.promisify)
	{
		// @ts-ignore
		fn = fn.promisify
	}

	const FastGlob = (fn as typeof Bluebird.method)(fg) as any as typeof import('./bluebird');

	// @ts-ignore
	Object.assign(FastGlob, fg);

	// @ts-ignore
	delete FastGlob.async;
	// @ts-ignore
	delete FastGlob.default;
	// @ts-ignore
	delete FastGlob.sync;

	// @ts-ignore
	FastGlob.sync = fg.sync;

	// @ts-ignore
	FastGlob.async = FastGlob.default = FastGlob;


	// @ts-ignore
	return FastGlob
}
