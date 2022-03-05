/* eslint-disable @next/next/no-img-element */
import { prefix } from "utils/prefix";

import Ribbon from "atoms/ribbon";

import * as Styled from "./styled";

const cakes = `${prefix}/images/bolo.png`;
const partySweeties = `${prefix}/images/docinhos.png`;
const desserts = `${prefix}/images/sobremesas.png`;
const brownies = `${prefix}/images/brownies.png`;

const OurProducts = () => (
	<Styled.OurProducts>
		<Ribbon text="Nossos produtos" />
		<Styled.Products>
			<div>
				<Styled.ProductImg alt="" src={cakes} />
				<p>Bolos</p>
			</div>
			<div>
				<Styled.ProductImg alt="" src={partySweeties} />
				<p>Docinhos</p>
			</div>
			<div>
				<Styled.ProductImg alt="" src={desserts} />
				<p>Sobremesas</p>
			</div>
			<div>
				<Styled.ProductImg alt="" src={brownies} />
				<p>Brownie</p>
			</div>
		</Styled.Products>
	</Styled.OurProducts>
);

export default OurProducts;
