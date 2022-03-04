import React, { useEffect, useState } from "react";

import Footer from "organisms/footer";
import Header from "organisms/header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	const [footerHeight, setFooterHeight] = useState(0);

	useEffect(() => {
		const updateFooterdimension = () => {
			const footer = document.querySelector("footer");
			const marginFooter =
				parseInt(
					window.getComputedStyle(footer as HTMLElement).marginTop
				) ?? 0;
			const footerHeight = footer?.getBoundingClientRect().height ?? 0;
			setFooterHeight(footerHeight + marginFooter);
		};

		window.addEventListener("resize", updateFooterdimension);

		return () => {
			window.removeEventListener("resize", updateFooterdimension);
		};
	}, []);

	return (
		<>
			<div
				className="content"
				style={{
					minHeight: `calc(100vh - ${footerHeight}px`,
				}}
			>
				<Header />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
