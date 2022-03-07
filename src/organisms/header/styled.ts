import { styled } from "stitches.config";

export const flagSize = 40;

export const Header = styled("div", {
	background: "$brand",
	position: "relative",
});

export const TitleUp = styled("h2", {
	fontSize: "4rem",
	fontFamily: "Parisienne",
	color: "$background",
	fontWeight: 400,
	lineHeight: "1",
});

export const TitleBottom = styled("h2", {
	fontSize: "4rem",
	fontFamily: "Parisienne",
	color: "$background",
	fontWeight: 400,
	lineHeight: "1",
	marginLeft: "20px",
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
		fontSize: "1.8rem",
		color: "$background",
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
			top: "25px",
			left: "50%",
			borderBottom: "2px solid $green",
			position: "absolute",
			transition: "width 0.5s ease",
		},

		"&:hover::after": {
			width: "50%",
		},

		"@phoneOnly": {
			fontSize: "1.4rem",
			"&:after": {
				top: "20px",
			},
		},
	},
});

export const TriangleBorder = styled("span", {
	transform: "rotate(-45deg)",
	borderRadius: "0 0 0 10px",
	background: "$brand",
	height: `${flagSize}px`,
	width: `${flagSize}px`,
	position: "absolute",
	pointerEvents: "none",
	bottom: "-12px",
	zIndex: "-1",
});
