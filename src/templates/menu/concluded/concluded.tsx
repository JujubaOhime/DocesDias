import Head from "next/head";

import Container from "atoms/container";

import * as Styled from "./styled";

const Concluded = () => {
	return (
		<>
			<Head>
				<title>Doces Dias - Pedido concluído</title>
				<meta
					name="description"
					content="Doces Dias - Por Gizelle Dias • Bolos - Doces - Sobremesas • São Gonçalo - RJ"
				/>
			</Head>
			<Container>
				<Styled.Title>
					Seu pedido foi concluído com sucesso! <br /> Logo logo
					entraremos em contato. <br /> Muito obrigado e volte sempre!
				</Styled.Title>
			</Container>
		</>
	);
};
export default Concluded;
