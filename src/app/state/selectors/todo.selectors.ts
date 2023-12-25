import { createSelector } from "@ngrx/store";
import { State } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectTodoState = (state: AppState) => state.todos;

export const selectLoading = createSelector(
    selectTodoState,
    (state) => state.loading
)
export const selectTodosPending = createSelector(
    selectTodoState,
    (state) => state.todos?.filter(todo => todo.status?._id === 1) || []
)

export const selectTodosInProgress = createSelector(
    selectTodoState,
    (state) => state.todos?.filter(todo => todo.status?._id === 2) || []
)

export const selectTodosDone = createSelector(
    selectTodoState,
    (state) => state.todos?.filter(todo => todo.status?._id === 3) || []
)

export const selectError = createSelector(
    selectTodoState,
    (state) => state.error
)