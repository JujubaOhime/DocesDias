import { styled } from "stitches.config";

import { prefix } from "utils/prefix";

const arrowDown = `${prefix}/images/arrowDown.svg`;

export const Form = styled("form", {
	display: "flex",
	gap: "20px",
	flexWrap: "wrap",
});

export const InputContainer = styled("div", {
	display: "flex",
	width: "calc(50% - 10px)",
	flexDirection: "column",

	label: {
		marginBottom: "4px",
	},

	"select, input, textArea": {
		padding: "10px",
		border: "2px solid $brand-soft",
		borderRadius: "10px",
		outline: "none",
		boxSizing: "border-box",
		background: "$brand-soft",

		"&:focus": {
			outline: "none !important",
			borderColor: "$green",
		},
	},

	select: {
		cursor: "pointer",
		position: "relative",
		appearance: "none",
		"-moz-appearance": "none",
		"-webkit-appearance": "none",
		backgroundImage: `url(${arrowDown})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "15px",
		backgroundPosition: "calc(100% - 15px)",
	},

	variants: {
		fullWidth: {
			true: {
				width: "100%",
			},
		},
	},
});

export const Button = styled("input", {
	padding: "10px 20px",
	color: "$white",
	background: "$green",
	margin: "0 auto",
	border: "none",
	borderRadius: "15px",

	"&:hover": {
		cursor: "pointer",
		background: "$green-dark",
	},
});
