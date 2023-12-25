import { createAction, props } from "@ngrx/store";
import { CreateTodo, Todo, UpdateTodo } from "src/app/core/interfaces/todo-interface";


export const createTodoRequest = createAction(
    "[Todo] Create Todo Request",
    props<{ todo: CreateTodo }>()
)

export const createTodoSuccess = createAction(
    "[Todo] Create Todo Success",
    props<{ todo: Todo }>()
)


//Esta acción será llamada cuando la app se inicie
export const getTodosRequest = createAction(
    "[Todo] Get Todos Request" // Nombre de la acción
);

// Esta acción será llamada cuando la API responda los TODOS
export const getTodosSuccess = createAction(
    "[Todo] Get Todos Success", // Nombre de la acción
    props<{ todos: Todo[] }>() // Se recibe como props un arreglo de TODOS
)

export const todosError = createAction(
    "[Todo] Get Todos Error",
    props<{ error: string }>()
)

export const updateTodoRequest = createAction(
    "[Todo] Update Todo Request",
    props<{ _id: string, todo: UpdateTodo }>()
)
export const updateTodoSuccess = createAction(
    "[Todo] Update Todo Success",
    props<{ todo: any }>()
)

export const deleteTodoRequest = createAction(
    "[Todo] Delete Todo Request",
    props<{ _id: string }>()
)

export const deleteTodoSuccess = createAction(
    "[Todo] Delete Todo Success",
    props<{ _id: string }>()

)


