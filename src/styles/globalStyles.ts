import { globalCss } from "@stitches/react";

import { prefix } from "utils/prefix";

import { reset } from "./global/reset";

export const globalStyles = globalCss({
	...reset,

	"@import": `${prefix}/fonts/custom.css`,
});
