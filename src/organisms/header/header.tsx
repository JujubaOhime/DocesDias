import Link from "next/link";

import * as Styled from "./styled";

const Header = () => {
	return (
		<Styled.Header>
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
		</Styled.Header>
	);
};

export default Header;
