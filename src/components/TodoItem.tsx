import { Checkbox, Row } from 'antd';
import { Todo, TodoType } from '../types/data';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CSSProperties } from 'react';

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
			<span style={getTitleStyleByType(type)}>{title}</span>
		</Row>
	);
}

export default TodoItem;

function getTitleStyleByType(type: TodoType): CSSProperties | undefined {
	if (type !== TodoType.Complited) return undefined;
	return { textDecoration: 'line-through gray 1px', color: 'gray' };
}
