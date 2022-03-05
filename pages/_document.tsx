import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "stitches.config";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta
						name="description"
						content="Doces Dias - Por Gizelle Dias • Bolos - Doces - Sobremesas • São Gonçalo - RJ"
					/>
					<style
						id="stitches"
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
