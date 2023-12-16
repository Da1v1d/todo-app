import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, ITodoForm, ITodos } from './types';

const initialState: ITodos = {
  todos: [],
  deleted: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.unshift({ ...action.payload, completed: false });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const deletedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      deletedTodo?.id && state.deleted?.push(deletedTodo);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      const findTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[findTodo].completed = true;
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      const findTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[findTodo] = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
