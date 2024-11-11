import { Button, Checkbox, Col, Row, Tooltip } from 'antd';
import { ETodoStatus, ITodo } from '../types/data';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { getTitleStyleByType } from '../helpers/todoHelper';
import { DeleteOutlined } from '@ant-design/icons';

interface ITodoProps {
	value: ITodo;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
}

const Todo = ({ value, onToggle, onDelete }: ITodoProps) => {
	const { title, status, id } = value;
	const handleChange: ((e: CheckboxChangeEvent) => void) | undefined = () => {
		onToggle(id);
	};

	return (
		<Row justify="center" align="middle" style={{ width: '100%' }}>
			<Col span={2} style={{ textAlign: 'center' }}>
				<Tooltip title={getTooltipTitleBox(status)}>
					<Checkbox
						checked={status === ETodoStatus.Complited}
						onChange={handleChange}
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
					<Button icon={<DeleteOutlined />} onClick={() => onDelete(id)} />
				</Tooltip>
			</Col>
		</Row>
	);
};

export default Todo;

const getTooltipTitleBox = (status: ETodoStatus): string => {
	switch (status) {
		case ETodoStatus.Active:
			return 'Active';
		case ETodoStatus.Complited:
			return 'Complited';
	}
};
