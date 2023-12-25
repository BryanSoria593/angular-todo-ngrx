import { createReducer, on } from "@ngrx/store";
import { createTodoRequest, createTodoSuccess, deleteTodoRequest, deleteTodoSuccess, getTodosRequest, getTodosSuccess, updateTodoRequest, updateTodoSuccess } from "../actions/todo.actions";
import { TodoState } from "src/app/core/interfaces/todo-state";
import { Todo } from "src/app/core/interfaces/todo-interface";

export const initialState: TodoState = {
    todos: [],
    loading: false,
    error: ''
};

export const _todoReducer = createReducer(
    initialState,
    on(createTodoRequest, (state) => ({
        ...state,
        loading: true
    })),

    on(createTodoSuccess, (state, { todo }  ) => ({
        ...state,
        todos: [...state.todos || [], todo], // Se agrega el TODO creado al arreglo de TODOS
        loading: false
    })),

    on(getTodosRequest, (state) => ({
        ...state, // Se regresa el mismo estado
        loading: true // Se cambia el estado para indicar que se están cargando los TODOS desde la API
    })),

    on(getTodosSuccess, (state, { todos }) => ({
        ...state, // Se regresa el mismo estado
        todos, // Se actualiza el estado con los TODOS obtenidos
        loading: false // Se cambia el estado para indicar que se terminó de cargar los TODOS desde la API
    })),

    on(updateTodoRequest, (state) => ({
        ...state,
        loading: true
    })),

    on(updateTodoSuccess, (state, { todo }) => ({
        ...state,
        todos: state.todos?.map(t => t._id === todo._id ? todo : t), // Se actualiza el TODO en el arreglo de TODOS
        loading: false
    })),
    on(deleteTodoRequest, (state) => ({
        ...state,
        loading: true
    })),

    on(deleteTodoSuccess, (state, { _id }) => ({
        ...state,
        todos: state.todos?.filter(t => t._id !== _id), // Retornar todos los TODOS menos el que se eliminó
        loading: false
    })),
)
