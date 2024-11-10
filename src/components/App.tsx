import { Input, List } from 'antd';
import Header from './Header';
import { TodoListType } from '../types/data';

function App(): JSX.Element {
	return (
		<div>
			<div>todos</div>
			<Input />
			<List
				header={
					<Header count={1} type={TodoListType.All} onAllClear={() => {}} />
				}
			></List>
		</div>
	);
}

export default App;
