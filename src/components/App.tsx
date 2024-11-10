import { Input, List, RadioChangeEvent } from 'antd';
import Header from './Header';
import { ETodoStatus, ITodo, TodoType } from '../types/data';
import { useMemo, useState } from 'react';
import TodoItem from './Todo';
import { isType, toggleStatus } from '../helpers/todoHelper';

const App: React.FC = () => {
	const [type, setType] = useState<TodoType>('all');
	const [list, setList] = useState<ITodo[]>([]);
	const [text, setText] = useState<string>('');

	const clearAllCompleted = () =>
		setList(l => l.filter(v => v.status !== ETodoStatus.Complited));

	const toggleTodo = (id: number) =>
		setList(l =>
			l.map(v => (v.id === id ? { ...v, status: toggleStatus(v.status) } : v))
		);

	const data = useMemo(() => list.filter(i => isType(i, type)), [list, type]);

	const handleOnChangeType: (e: RadioChangeEvent) => void = e =>
		setType(e.target.value);

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key !== 'Enter' || !text.length) return;
		setList(l => [
			...l,
			{ title: text, status: ETodoStatus.Active, id: new Date().getTime() },
		]);
		setText('');
	};

	return (
		<div style={{ width: '30%', margin: '0 auto' }}>
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
						onAllClear={clearAllCompleted}
					/>
				}
				dataSource={data}
				renderItem={item => (
					<List.Item>
						<TodoItem value={item} onToggle={toggleTodo} />
					</List.Item>
				)}
			/>
		</div>
	);
};

export default App;
