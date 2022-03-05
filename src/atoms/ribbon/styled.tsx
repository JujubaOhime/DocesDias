import { styled } from "stitches.config";

export const RibbonContainer = styled("div", {
	display: "flex",
	justifyContent: "center",
	marginBottom: "30px",
	margin: "0 60px 20px",

	"@phoneOnly": {
		margin: "0 35px 20px",
	},
});

export const Ribbon = styled("div", {
	width: "100%",
	maxWidth: "600px",
	height: "60px",
	textAlign: "center",
	position: "relative",
	color: "$white",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: "$green-soft",
	fontWeight: "800",
	fontSize: "2.4rem",

	"@phoneOnly": {
		fontSize: "2rem",
		height: "45px",
	},
});

export const Flag = styled("span", {
	width: "20px",
	position: "absolute",
	border: "30px solid $green",
	zIndex: -2,
	bottom: "-20px",

	"@phoneOnly": {
		bottom: "-17px",
		width: "20px",
		border: "20px solid $green",
	},

	variants: {
		left: {
			true: {
				left: "-60px",
				borderLeftColor: "transparent",

				"@phoneOnly": {
					left: "-44px",
				},
			},

			false: {
				borderRightColor: "transparent",
				right: "-60px",

				"@phoneOnly": {
					right: "-44px",
				},
			},
		},
	},
});

export const FlagShadow = styled("span", {
	position: "absolute",
	border: "20px solid transparent",
	zIndex: -1,
	bottom: "-20px",

	"@phoneOnly": {
		bottom: "-17px",
		border: "16px solid transparent",
	},

	variants: {
		left: {
			true: {
				borderRightColor: "$green-dark",
				left: "-20px",

				"@phoneOnly": {
					left: "-16px",
				},
			},

			false: {
				right: "-20px",
				borderLeftColor: "$green-dark",

				"@phoneOnly": {
					right: "-16px",
				},
			},
		},
	},
});
