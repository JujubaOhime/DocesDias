import Head from "next/head";

import Container from "atoms/container/container";
import Ribbon from "atoms/ribbon";

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
				<Ribbon text="Nossos serviços" />
			</Container>
		</div>
	);
};

export default Home;
