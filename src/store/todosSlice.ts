import { createSlice, Middleware, PayloadAction } from '@reduxjs/toolkit';
import { ETodoStatus, ITodo, TodoType } from '../types/data';
import { isType, toggleStatus } from '../helpers/todoHelper';
import { RootState } from '.';

type TodoState = {
	list: ITodo[];
};

const loadTodos = (): TodoState | undefined => {
	const jsonTodos = localStorage.getItem('todos');
	if (!jsonTodos) return undefined;
	return JSON.parse(jsonTodos);
};

const saveTodos = (state: TodoState): void => {
	const jsonTodos = JSON.stringify(state);
	localStorage.setItem('todos', jsonTodos);
};

const initialState: TodoState = loadTodos() || {
	list: [],
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setTodo(state, action: PayloadAction<ITodo[]>) {
			state.list = [...action.payload];
		},
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: new Date().getTime(),
				title: action.payload,
				status: ETodoStatus.Active,
			});
		},
		toggleTodo(state, action: PayloadAction<number>) {
			const todo = state.list.find(t => t.id === action.payload);
			if (!todo) return;
			todo.status = toggleStatus(todo.status);
		},
		removeTodo(state, action: PayloadAction<number>) {
			state.list = state.list.filter(t => t.id !== action.payload);
		},
		clearAll(state, action: PayloadAction<TodoType>) {
			state.list = state.list.filter(t => !isType(t, action.payload));
		},
	},
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const todosMiddleware: Middleware<{}, RootState> =
	storeAPI => next => action => {
		const result = next(action);
		saveTodos(storeAPI.getState().todos);
		return result;
	};

export const { setTodo, addTodo, toggleTodo, removeTodo, clearAll } =
	todosSlice.actions;
export default todosSlice.reducer;
