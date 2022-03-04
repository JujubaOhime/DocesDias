import Head from "next/head";

import Container from "atoms/container/container";

import * as Styled from "./styled";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Doces Dias</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
			</Head>
			<Container>
				<Styled.Title>oi</Styled.Title>
				<p>teste do deploy</p>
			</Container>
		</div>
	);
};

export default Home;
