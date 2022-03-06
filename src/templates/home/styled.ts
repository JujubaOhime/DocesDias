import { styled } from "stitches.config";

export const Title = styled("h1", {
	color: "red",
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
