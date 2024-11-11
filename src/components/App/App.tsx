import { Input, List, RadioChangeEvent } from 'antd';
import Header from '../Header';
import { TodoType } from '../../types/data';
import { useMemo, useState } from 'react';
import TodoItem from '../Todo';
import { isType } from '../../helpers/todoHelper';
import Content from './Content';
import Wrapper from './Wrapper';
import GlobalStyle from './GlobalStyle';
import Title from './Title';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addTodo, clearAll } from '../../store/todosSlice';

const App: React.FC = () => {
	const [type, setType] = useState<TodoType>('all');
	const [text, setText] = useState<string>('');

	const dispatch = useAppDispatch();
	const list = useAppSelector(state => state.todos.list);

	const data = useMemo(() => list.filter(i => isType(i, type)), [list, type]);

	const handleOnChangeType: (e: RadioChangeEvent) => void = e =>
		setType(e.target.value);

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key !== 'Enter' || !text.length) return;
		dispatch(addTodo(text));
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
								onClear={() => dispatch(clearAll(type))}
							/>
						}
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<TodoItem value={item} />
							</List.Item>
						)}
					/>
				</Content>
			</Wrapper>
		</>
	);
};

export default App;
