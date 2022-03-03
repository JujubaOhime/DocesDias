import { createStitches } from "@stitches/react";
import { medias } from "styles/abstracts/medias";

export const { styled, getCssText } = createStitches({
	theme: {
		fonts: {
			system: "system-ui",
		},
	},
	media: medias,
});
