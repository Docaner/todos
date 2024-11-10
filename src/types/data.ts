export enum ETodoStatus {
	Active,
	Complited,
}

export type TodoType = ETodoStatus | 'all';

export interface ITodo {
	id: number;
	title: string;
	status: ETodoStatus;
}
