import { CSSProperties } from 'react';
import { ETodoStatus, ITodo, TodoType } from '../types/data';

export const getTitleStyleByType = (
	status: ETodoStatus
): CSSProperties | undefined => {
	if (status !== ETodoStatus.Complited) return undefined;
	return { textDecoration: 'line-through gray 1px', color: 'gray' };
};

export const isType = (target: ITodo, value: TodoType): boolean => {
	switch (value) {
		case ETodoStatus.Active:
		case ETodoStatus.Complited:
			return target.status === value;
		case 'all':
			return true;
	}
};

export const toggleStatus = (status: ETodoStatus): ETodoStatus =>
	status === ETodoStatus.Complited ? ETodoStatus.Active : ETodoStatus.Complited;
