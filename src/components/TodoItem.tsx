import { Checkbox, Row } from 'antd';
import { Todo, TodoType } from '../types/data';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

function TodoItem({
	value,
	onChange,
}: {
	value: Todo;
	onChange: (value: Todo) => void;
}): JSX.Element {
	function handleChange(e: CheckboxChangeEvent) {
		onChange({
			...value,
			type: e.target.checked ? TodoType.Complited : TodoType.Active,
		});
	}

	const { title, type } = value;

	return (
		<Row>
			<Checkbox
				checked={type === TodoType.Complited}
				onChange={handleChange}
				style={{ marginInline: '20px' }}
			/>
			{title}
		</Row>
	);
}

export default TodoItem;
