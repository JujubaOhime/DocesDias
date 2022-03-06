import { styled } from "stitches.config";

export const Presentation = styled("section", {
	margin: "80px 0",
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "30px",

	"@phoneOnly": {
		flexDirection: "column",
		gap: "20px",
	},
});

export const Image = styled("img", {
	width: "100%",
	borderRadius: "50%",
	background: "$white-bright",
});

export const ImageContainer = styled("div", {
	width: "calc(40% - 15px)",

	"@phoneOnly": {
		width: "50%",
	},
});

export const Title = styled("h2", {
	fontFamily: "Parisienne",
	fontSize: "5rem",
	fontWeight: "500",
	borderTop: "4px solid var(--colors-green-soft)",
	borderBottom: "4px solid var(--colors-green-soft)",
	marginBottom: "20px",
	padding: "10px",
	color: "$grey",

	"@tabletOnly": {
		fontSize: "3.4rem",
	},

	"@phoneOnly": {
		fontSize: "3rem",
		border: "none",
		padding: 0,
		marginBottom: "10px",
	},
});

export const Content = styled("div", {
	width: "calc(60% - 15px)",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",

	"@phoneOnly": {
		width: "100%",
	},
});

export const Text = styled("p", {
	fontSize: "1.8rem",
	color: "$grey",

	"@phoneOnly": {
		fontSize: "1.4rem",
		paddingBottom: "5px",
		//width: "fit-content",
		borderBottom: "4px solid var(--colors-green-soft)",
	},
});
