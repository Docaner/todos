import { CheckboxOptionType } from 'antd';
import { ETodoStatus, TodoType } from '../types/data';

export const headerOptions: CheckboxOptionType<TodoType>[] = [
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'Active',
		value: ETodoStatus.Active,
	},
	{
		label: 'Complited',
		value: ETodoStatus.Complited,
	},
];
