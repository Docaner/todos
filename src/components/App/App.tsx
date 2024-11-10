import { Input, List, RadioChangeEvent } from 'antd';
import Header from '../Header';
import { ETodoStatus, ITodo, TodoType } from '../../types/data';
import { useMemo, useState } from 'react';
import TodoItem from '../Todo';
import { isType, toggleStatus } from '../../helpers/todoHelper';
import Content from './Content';
import Wrapper from './Wrapper';
import GlobalStyle from './GlobalStyle';
import Title from './Title';

const App: React.FC = () => {
	const [type, setType] = useState<TodoType>('all');
	const [list, setList] = useState<ITodo[]>([]);
	const [text, setText] = useState<string>('');

	const clearAll = (type: TodoType) =>
		setList(l => l.filter(v => !isType(v, type)));

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
		<>
			<GlobalStyle />
			<Wrapper>
				<Content>
					<Title>todos</Title>
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
								onClear={() => clearAll(type)}
							/>
						}
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<TodoItem value={item} onToggle={toggleTodo} />
							</List.Item>
						)}
					/>
				</Content>
			</Wrapper>
		</>
	);
};

export default App;
