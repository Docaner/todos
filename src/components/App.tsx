import { Input, List, RadioChangeEvent } from 'antd';
import Header from './Header';
import { Todo, TodoType } from '../types/data';
import { useMemo, useState } from 'react';
import TodoItem from './TodoItem';

function App(): JSX.Element {
	const [type, setType] = useState<TodoType>(TodoType.All);
	const [list, setList] = useState<Todo[]>([]);
	const [text, setText] = useState<string>('');

	function handleOnChangeType(e: RadioChangeEvent) {
		setType(e.target.value);
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key !== 'Enter' || !text.length) return;
		setList(l => [
			...l,
			{ title: text, type: TodoType.Active, id: new Date().getTime() },
		]);
		setText('');
	}

	function handleAllClear() {
		setList(l => l.filter(v => v.type !== TodoType.Complited));
	}

	function handleChangeType(value: Todo) {
		console.log(list, value);
		setList(l => l.map(v => (v.id === value.id ? value : v)));
	}

	const data = useMemo(() => list.filter(i => isType(i, type)), [list, type]);

	return (
		<div>
			<div>todos</div>
			<Input
				placeholder="What needs to be done?"
				value={text}
				onChange={e => setText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<List
				header={
					<Header
						count={data.length}
						type={type}
						onChangeType={handleOnChangeType}
						onAllClear={handleAllClear}
					/>
				}
				dataSource={data}
				renderItem={item => (
					<List.Item>
						<TodoItem value={item} onChange={handleChangeType} />
					</List.Item>
				)}
			/>
		</div>
	);
}

function isType(el: Todo, value: TodoType) {
	switch (value) {
		case TodoType.Complited:
		case TodoType.Active:
			return el.type === value;
		case TodoType.All:
			return true;
		default:
			return false;
	}
}

export default App;
