/**
 * @module Option
 *
 */
export default interface Type extends Option {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

import type Option from "files-pipe/Target/Interface/Option.js";
