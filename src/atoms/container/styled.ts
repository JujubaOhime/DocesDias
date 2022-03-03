import { styled } from "stitches.config";

export const Container = styled("div", {
	"@phoneOnly": {
		marginLeft: "20px",
		marginRight: "20px",
	},

	"@tabletOnly": {
		marginLeft: "32px",
		marginRight: "32px",
	},

	"@tabletDown": {
		width: "auto",
	},

	"@notebookUp": {
		marginLeft: "auto",
		marginRight: "auto",
	},

	"@notebookOnly": {
		width: "1036px",
	},

	"@desktopOnly": {
		width: "960px",
	},
});
