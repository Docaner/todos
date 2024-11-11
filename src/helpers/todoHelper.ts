import { CSSProperties } from 'react';
import { ETodoStatus, ITodo, TodoType } from '../types/data';

const defTitleStyle: CSSProperties = { wordBreak: 'break-word' };

export const getTitleStyleByType = (
	status: ETodoStatus
): CSSProperties | undefined => {
	if (status !== ETodoStatus.Complited) return defTitleStyle;
	return {
		...defTitleStyle,
		textDecoration: 'line-through gray 1px',
		color: 'gray',
	};
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

export const getTooltipTitleBox = (status: ETodoStatus): string => {
	switch (status) {
		case ETodoStatus.Active:
			return 'Active';
		case ETodoStatus.Complited:
			return 'Complited';
	}
};
