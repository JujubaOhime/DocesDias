import { createStitches } from "@stitches/react";
import { colors } from "styles/abstracts/colors";
import { medias } from "styles/abstracts/medias";

export const { styled, getCssText } = createStitches({
	theme: {
		fonts: {
			system: "system-ui",
		},
		colors: colors,
	},
	media: medias,
});
