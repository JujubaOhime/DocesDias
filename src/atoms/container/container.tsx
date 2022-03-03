import { CSSProperties, PropsWithChildren } from "react";

import * as Styled from "./styled";

type PropsType = {
	style?: CSSProperties;
	id?: string;
};

const Container = ({ children, style, id }: PropsWithChildren<PropsType>) => (
	<Styled.Container id={id} style={style} tabIndex={-1}>
		{children}
	</Styled.Container>
);
export default Container;
