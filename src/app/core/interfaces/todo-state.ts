import { Todo } from "./todo-interface";

// Esta será la interfaz del estado de los TODOS
export interface TodoState {
    todos?: Todo[], // Los todos
    loading: boolean, // Indica si se estan cargando los todos
    error?: string // Si hay un error
}