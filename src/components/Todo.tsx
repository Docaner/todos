import { Button, Checkbox, Col, Row, Tooltip } from 'antd';
import { ETodoStatus, ITodo } from '../types/data';
import { getTitleStyleByType, getTooltipTitleBox } from '../helpers/todoHelper';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks';
import { removeTodo, toggleTodo } from '../store/todosSlice';

interface ITodoProps {
	value: ITodo;
}

const Todo = ({ value }: ITodoProps) => {
	const { title, status, id } = value;
	const dispatch = useAppDispatch();

	return (
		<Row justify="center" align="middle" style={{ width: '100%' }}>
			<Col span={2} style={{ textAlign: 'center' }}>
				<Tooltip title={getTooltipTitleBox(status)}>
					<Checkbox
						checked={status === ETodoStatus.Complited}
						onChange={() => dispatch(toggleTodo(id))}
					/>
				</Tooltip>
			</Col>
			<Col span={20}>
				<span
					style={{ ...getTitleStyleByType(status), wordBreak: 'break-word' }}
				>
					{title}
				</span>
			</Col>
			<Col
				span={2}
				style={{
					textAlign: 'center',
				}}
			>
				<Tooltip title="Delete">
					<Button
						icon={<DeleteOutlined />}
						onClick={() => dispatch(removeTodo(id))}
					/>
				</Tooltip>
			</Col>
		</Row>
	);
};

export default Todo;
