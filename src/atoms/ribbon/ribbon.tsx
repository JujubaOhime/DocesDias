import React, { PropsWithChildren } from "react";

import * as Styled from "./styled";

const Ribbon = ({ children }: PropsWithChildren<{}>) => (
	<Styled.RibbonContainer>
		<Styled.Ribbon>
			<Styled.Dashed>
				{children}
				<Styled.FlagShadow left={true} />
				<Styled.FlagShadow left={false} />
				<Styled.Flag left={true} />
				<Styled.Flag left={false} />
			</Styled.Dashed>
		</Styled.Ribbon>
	</Styled.RibbonContainer>
);
export default Ribbon;
