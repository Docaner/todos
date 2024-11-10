import { Todo } from '../types/data';

function TodoItem({ value }: { value: Todo }): JSX.Element {
	const { title, type } = value;
	return (
		<>
			{title} - {type}
		</>
	);
}

export default TodoItem;
