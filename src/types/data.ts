import { RadioChangeEvent } from 'antd';

export enum TodoType {
	All,
	Active,
	Complited,
}

export interface Todo {
	title: string;
	type: TodoType;
}

export interface HeaderProps {
	count: number;
	type: TodoType;
	onChangeType: (e: RadioChangeEvent) => void;
	onAllClear: () => void;
}
