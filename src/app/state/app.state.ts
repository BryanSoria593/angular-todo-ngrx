import { ActionReducerMap } from "@ngrx/store";
import { TodoState } from "../core/interfaces/todo-state";
import { _todoReducer } from "./reducers/todo.reducers";

export interface AppState {
    todos: TodoState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    todos: _todoReducer
};