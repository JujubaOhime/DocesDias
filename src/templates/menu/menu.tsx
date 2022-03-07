import Head from "next/head";

import OrderForm from "organisms/orderForm";

import Container from "atoms/container";
import Ribbon from "atoms/ribbon";

import * as Styled from "./styled";

const Menu = () => {
	return (
		<>
			<Head>
				<title>Doces Dias</title>
				<meta
					name="description"
					content="Doces Dias - Por Gizelle Dias • Bolos - Doces - Sobremesas • São Gonçalo - RJ"
				/>
			</Head>
			<Container>
				<Ribbon>Faça seu Pedido</Ribbon>
				<Styled.Text style={{ textAlign: "center" }}>
					Terminado o seu pedido, logo entraremos em contato
				</Styled.Text>
				<OrderForm />
			</Container>
		</>
	);
};

export default Menu;
