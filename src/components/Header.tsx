import { Button, Col, Radio, RadioChangeEvent, Row } from 'antd';
import { TodoType } from '../types/data';
import { headerOptions } from '../constants/headerOptions';
import { getCountText } from '../helpers/headerHelper';

interface IHeaderProps {
	count: number;
	type: TodoType;
	onChangeType: (e: RadioChangeEvent) => void;
	onAllClear: () => void;
}

const Header = ({ count, type, onChangeType, onAllClear }: IHeaderProps) => {
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
				<Button style={{ float: 'right' }} onClick={onAllClear}>
					Clear all complited
				</Button>
			</Col>
		</Row>
	);
};

export default Header;
