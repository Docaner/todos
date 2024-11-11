import { Button, Col, Radio, RadioChangeEvent, Row } from 'antd';
import { TodoType } from '../types/data';
import { headerOptions } from '../constants/headerOptions';
import { getCountText, getTodoTypeText } from '../helpers/headerHelper';

interface IHeaderProps {
	count: number;
	type: TodoType;
	onChangeType: (e: RadioChangeEvent) => void;
	onClear: () => void;
}

const Header: React.FC<IHeaderProps> = ({
	count,
	type,
	onChangeType,
	onClear,
}) => {
	return (
		<Row>
			<Col span={5}>
				{count} items {getCountText(type)}
			</Col>
			<Col span={14} style={{ textAlign: 'center' }}>
				<Radio.Group
					optionType="button"
					buttonStyle="solid"
					onChange={onChangeType}
					options={headerOptions}
					value={type}
				/>
			</Col>
			<Col span={5}>
				<Button style={{ float: 'right' }} onClick={onClear}>
					Clear {getTodoTypeText(type)}
				</Button>
			</Col>
		</Row>
	);
};

export default Header;
