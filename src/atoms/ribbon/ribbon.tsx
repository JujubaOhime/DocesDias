import * as Styled from "./styled";

type PropsType = {
	text: string;
};

const Ribbon = (props: PropsType) => (
	<Styled.RibbonContainer>
		<Styled.Ribbon>
			{props.text}
			<Styled.FlagShadow left={true} />
			<Styled.FlagShadow left={false} />
			<Styled.Flag left={true} />
			<Styled.Flag left={false} />
		</Styled.Ribbon>
	</Styled.RibbonContainer>
);
export default Ribbon;
