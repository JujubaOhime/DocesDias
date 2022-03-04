import { styled } from "stitches.config";

export const Header = styled("header", {
	borderTop: "5px solid $green",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "20px",
});

export const TitleUp = styled("h2", {
	fontSize: "3rem",
	fontFamily: "Parisienne",
	color: "$brand-text",
	lineHeight: "1",

	"@phoneOnly": {
		fontSize: "2.4rem",
	},
});

export const TitleBottom = styled("h2", {
	fontSize: "3rem",
	fontFamily: "Parisienne",
	color: "$brand-text",
	lineHeight: "1",
	marginLeft: "20px",

	"@phoneOnly": {
		fontSize: "2.4rem",
	},
});

export const TitlesContainer = styled("div", {
	padding: "10px 20px 0",
	display: "flex",
	flexDirection: "column",
	transition: "transform 0.5s cubic-bezier(0.4, 1, 0.8, 1)",

	"&:hover, &:active": {
		transform: "scale3d(1.1, 1.1, 1.1)",
	},
});

export const Nav = styled("nav", {
	display: "flex",
	gap: "20px",
	padding: "20px",

	a: {
		color: "$brand-text",
		position: "relative",
		fontWeight: "800",
		transition: "transform 0.5s cubic-bezier(0.4, 1, 0.8, 1)",

		"&:hover, &:active": {
			transform: "scale3d(1.1, 1.1, 1.1)",
		},

		"&:after": {
			content: "",
			width: "0",
			transform: "translateX(-50%)",
			top: "20px",
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
	},
});
