import { styled } from "stitches.config";

export const flagSize = 40;

export const Header = styled("header", {
	marginBottom: "60px",
	background: "$brand-text",
	position: "relative",
});

export const TitleUp = styled("h2", {
	fontSize: "4rem",
	fontFamily: "Parisienne",
	color: "$white",
	lineHeight: "1",

	"@phoneOnly": {
		fontSize: "3.6rem",
	},
});

export const TitleBottom = styled("h2", {
	fontSize: "4rem",
	fontFamily: "Parisienne",
	color: "$white",
	lineHeight: "1",
	marginLeft: "20px",

	"@phoneOnly": {
		fontSize: "3.2rem",
	},
});

export const TitlesContainer = styled("div", {
	padding: "20px 0",
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
	paddingBottom: "25px",

	a: {
		color: "$white",
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

export const TriangleBorder = styled("span", {
	transform: "rotate(-45deg)",
	borderRadius: "0 0 0 10px",
	background: "$brand-text",
	height: `${flagSize}px`,
	width: `${flagSize}px`,
	position: "absolute",
	pointerEvents: "none",
	bottom: "-12px",
	zIndex: "-1",
});
