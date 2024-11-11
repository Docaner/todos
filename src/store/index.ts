import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer, { todosMiddleware } from './todosSlice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rootReducer = combineReducers({ todos: todosReducer });

const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(todosMiddleware),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
