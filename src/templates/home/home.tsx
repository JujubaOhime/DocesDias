/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import OurProducts from "organisms/ourProducts";

import Container from "atoms/container/container";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Doces Dias</title>
				<meta
					name="description"
					content="Doces Dias - Por Gizelle Dias • Bolos - Doces - Sobremesas • São Gonçalo - RJ"
				/>
			</Head>
			<Container>
				<OurProducts />
			</Container>
		</div>
	);
};

export default Home;
