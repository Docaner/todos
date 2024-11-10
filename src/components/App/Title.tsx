import TitleText from './TitleText';
import TitleWrapper from './TitleWrapper';

interface ITitleProps {
	children: string;
}

const Title = ({ children }: ITitleProps) => (
	<TitleWrapper>
		<TitleText>{children}</TitleText>
	</TitleWrapper>
);

export default Title;
