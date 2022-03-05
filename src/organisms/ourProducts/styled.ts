import { styled } from "stitches.config";

export const OurProducts = styled("section", {
	margin: "20px 0",
});

export const Products = styled("div", {
	display: "flex",
	textAlign: "center",
	justifyContent: "center",
	gap: "20px",
	marginTop: "20px",
});

export const ProductImg = styled("img", {
	width: "80px",
	height: "80px",
	padding: "25px",
	borderRadius: "20px",
	marginBottom: "5px",
	background: "$brand",
});
