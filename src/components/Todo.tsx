import { Checkbox, Row } from 'antd';
import { ETodoStatus, ITodo } from '../types/data';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { getTitleStyleByType } from '../helpers/todoHelper';

interface ITodoProps {
	value: ITodo;
	onToggle: (id: number) => void;
}

const Todo = ({ value, onToggle }: ITodoProps) => {
	const { title, status, id } = value;
	const handleChange: ((e: CheckboxChangeEvent) => void) | undefined = () => {
		onToggle(id);
	};

	return (
		<Row>
			<Checkbox
				checked={status === ETodoStatus.Complited}
				onChange={handleChange}
				style={{ marginInline: '20px' }}
			/>
			<span style={getTitleStyleByType(status)}>{title}</span>
		</Row>
	);
};

export default Todo;
