import { styled } from "stitches.config";

export const Footer = styled("footer", {
	borderBottom: "5px solid $green",
	marginTop: "20px",

	a: {
		display: "flex",
		transition: "transform 0.5s cubic-bezier(0.4, 1, 0.8, 1)",

		"&:hover, &:active": {
			transform: "scale3d(1.1, 1.1, 1.1)",
		},
	},
});

export const Developer = styled("a", {
	position: "relative",
	fontWeight: "800",
	padding: "20px 0 20px 20px",
	color: "$brand-text",

	"&:after": {
		content: "",
		width: "0",
		transform: "translateX(-50%)",
		bottom: "15px",
		left: "50%",
		borderBottom: "2px solid $green",
		position: "absolute",
		transition: "width 0.5s ease",
	},

	"&:hover::after, &:focus::after": {
		width: "50%",
	},

	"@phoneOnly": {
		fontSize: "1.4rem",
	},
});

export const LinksContainer = styled("ul", {
	display: "flex",
	gap: "15px",
});
