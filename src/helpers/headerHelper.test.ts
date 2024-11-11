import { ETodoStatus } from '../types/data';
import { getCountText, getTodoTypeText } from './headerHelper';

describe('headerHelper', () => {
	test('getCountText корректное значение (all)', () => {
		expect(getCountText('all')).toBe('');
	});
	test('getCountText корректное значение (active)', () => {
		expect(getCountText(ETodoStatus.Active)).toBe('left');
	});
	test('getCountText корректное значение (completed)', () => {
		expect(getCountText(ETodoStatus.Complited)).toBe('complited');
	});

	test('getTodoTypeText корректное значение (all)', () => {
		expect(getTodoTypeText('all')).toBe('all');
	});
	test('getTodoTypeText корректное значение (active)', () => {
		expect(getTodoTypeText(ETodoStatus.Active)).toBe('active');
	});
	test('getTodoTypeText корректное значение (completed)', () => {
		expect(getTodoTypeText(ETodoStatus.Complited)).toBe('complited');
	});
});
