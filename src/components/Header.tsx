import { Button, CheckboxOptionType, Col, Radio, Row } from 'antd';
import { HeaderProps, TodoType } from '../types/data';

function Header({
	count,
	type,
	onChangeType,
	onAllClear,
}: HeaderProps): JSX.Element {
	return (
		<Row>
			<Col span={8}>{count} items left</Col>
			<Col span={8}>
				<Radio.Group
					style={{ width: '100%' }}
					optionType="button"
					buttonStyle="solid"
					onChange={onChangeType}
					options={options}
					value={type}
				/>
			</Col>
			<Col span={8}>
				<Button style={{ float: 'right' }} onClick={onAllClear}>
					Clear all active
				</Button>
			</Col>
		</Row>
	);
}

const options: CheckboxOptionType<TodoType>[] = [
	{
		label: 'All',
		value: TodoType.All,
		style: { width: '33.33%', textAlign: 'center' },
	},
	{
		label: 'Active',
		value: TodoType.Active,
		style: { width: '33.33%', textAlign: 'center' },
	},
	{
		label: 'Complited',
		value: TodoType.Complited,
		style: { width: '33.33%', textAlign: 'center' },
	},
];

export default Header;
