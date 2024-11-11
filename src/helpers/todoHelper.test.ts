import { ETodoStatus, ITodo } from '../types/data';
import {
	getTitleStyleByType,
	getTooltipTitleBox,
	isType,
	toggleStatus,
} from './todoHelper';

describe('headerHelper', () => {
	const todo: ITodo = {
		id: 1,
		status: ETodoStatus.Active,
		title: 'hello',
	};

	test('getTitleStyleByType корректное значение (active)', () => {
		expect(getTitleStyleByType(ETodoStatus.Active)).toEqual({
			wordBreak: 'break-word',
		});
	});
	test('getTitleStyleByType корректное значение (completed)', () => {
		expect(getTitleStyleByType(ETodoStatus.Complited)).toEqual({
			wordBreak: 'break-word',
			textDecoration: 'line-through gray 1px',
			color: 'gray',
		});
	});

	test('toggleStatus корректное значение (Active)', () => {
		expect(toggleStatus(ETodoStatus.Active)).toBe(ETodoStatus.Complited);
	});
	test('toggleStatus корректное значение (Complited)', () => {
		expect(toggleStatus(ETodoStatus.Complited)).toBe(ETodoStatus.Active);
	});

	test('getTooltipTitleBox корректное значение (Active)', () => {
		expect(getTooltipTitleBox(ETodoStatus.Active)).toBe('Active');
	});
	test('getTooltipTitleBox корректное значение (Complited)', () => {
		expect(getTooltipTitleBox(ETodoStatus.Complited)).toBe('Complited');
	});

	test('isType корректное значение (Active)', () => {
		expect(isType(todo, ETodoStatus.Active)).toBe(true);
	});
	test('isType корректное значение (Complited)', () => {
		expect(isType(todo, ETodoStatus.Complited)).toBe(false);
	});
});
