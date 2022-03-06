/* eslint-disable @next/next/no-img-element */
import { prefix } from "utils/prefix";

const logo = `${prefix}/images/logo.png`;

import * as Styled from "./styled";

const Presentation = () => (
	<Styled.Presentation>
		<Styled.ImageContainer>
			<Styled.Image alt="" src={logo} />
		</Styled.ImageContainer>
		<Styled.Content>
			<Styled.Title>
				Fazendo a melhor sobremesa para você sempre!
			</Styled.Title>
			<Styled.Text>Seja muito bem vindo(a)!</Styled.Text>
		</Styled.Content>
	</Styled.Presentation>
);

export default Presentation;
