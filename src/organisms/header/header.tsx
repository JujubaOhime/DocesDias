import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "atoms/container";

import * as Styled from "./styled";

const Header = () => {
	const [flagQuantity, setFlagQuantity] = useState(0);

	useEffect(() => {
		const updateDimensions = () => {
			setFlagQuantity(Math.ceil(window.innerWidth / Styled.flagSize));
		};
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);
	return (
		<>
			<Styled.Header>
				<Container
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<Link href="#">
						<a aria-label="Página inicial">
							<Styled.TitlesContainer>
								<Styled.TitleUp>Doces</Styled.TitleUp>
								<Styled.TitleBottom>Dias</Styled.TitleBottom>
							</Styled.TitlesContainer>
						</a>
					</Link>

					<Styled.Nav>
						<Link href="#">
							<a>Cardápio</a>
						</Link>

						<Link href="#">
							<a>Sobre nós</a>
						</Link>
					</Styled.Nav>
				</Container>

				{[...new Array(flagQuantity)].map((_, index) => (
					<Styled.TriangleBorder
						style={{ left: `${40 * index}px` }}
						key={index}
					/>
				))}
			</Styled.Header>
		</>
	);
};

export default Header;
