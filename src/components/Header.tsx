import { CheckboxOptionType, Col, Radio, Row } from 'antd';
import { HeaderProps, TodoListType } from '../types/data';

function Header({ count, type, onAllClear }: HeaderProps): JSX.Element {
	return (
		<Row>
			<Col span={8}>{count} items left</Col>
			<Col span={8}>
				<Radio.Group
					style={{ width: '100%' }}
					optionType="button"
					buttonStyle="solid"
					onChange={onAllClear}
					options={options}
					value={type}
				/>
			</Col>
			<Col span={8}>{count} items left</Col>
		</Row>
	);
}

const options: CheckboxOptionType<TodoListType>[] = [
	{
		label: 'All',
		value: TodoListType.All,
	},
	{
		label: 'Active',
		value: TodoListType.Active,
	},
	{
		label: 'Complited',
		value: TodoListType.Complited,
	},
];

export default Header;
