/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { prefix } from "utils/prefix";

import Container from "atoms/container";

import * as Styled from "./styled";

const instagramLogo = `${prefix}/images/instagramLogo.svg`;
const whatsappLogo = `${prefix}/images/whatsappLogo.svg`;

const Footer = () => {
	return (
		<Styled.Footer>
			<Container
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Styled.LinksContainer>
					<li>
						<Link href="https://www.instagram.com/docesdiasdagi/">
							<a aria-label="Instagram">
								<img
									src={instagramLogo}
									alt=""
									width={30}
									height={30}
									loading="lazy"
								/>
							</a>
						</Link>
					</li>
					<li>
						<Link href="http://wa.me/+5521970594240">
							<a aria-label="Whatsapp">
								<img
									src={whatsappLogo}
									alt=""
									width={30}
									height={30}
									loading="lazy"
								/>
							</a>
						</Link>
					</li>
				</Styled.LinksContainer>
				<Link href="https://github.com/JujubaOhime" passHref>
					<Styled.Developer>
						{" "}
						Desenvolvido por Amélia Guerreiro{" "}
					</Styled.Developer>
				</Link>
			</Container>
		</Styled.Footer>
	);
};

export default Footer;
