import { ETodoStatus, TodoType } from '../types/data';

export const getCountText = (type: TodoType) => {
	switch (type) {
		case ETodoStatus.Active:
			return 'left';
		case ETodoStatus.Complited:
			return 'complited';
		case 'all':
			return '';
	}
};
