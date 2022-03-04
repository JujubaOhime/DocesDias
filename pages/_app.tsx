import type { AppProps } from "next/app";
import Layout from "src/layout";
import { globalStyles } from "styles/globalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
	globalStyles();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
