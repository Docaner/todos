import { Input, List, RadioChangeEvent } from 'antd';
import Header from './Header';
import { Todo, TodoType } from '../types/data';
import { useState } from 'react';
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
		setList(l => [...l, { title: text, type: TodoType.Active }]);
	}

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
						count={list.length}
						type={type}
						onChangeType={handleOnChangeType}
						onAllClear={() => {}}
					/>
				}
				dataSource={list}
				renderItem={item => (
					<List.Item>
						<TodoItem value={item} />
					</List.Item>
				)}
			/>
		</div>
	);
}

export default App;
