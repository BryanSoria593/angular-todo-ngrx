import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map,  } from 'rxjs';
import { TodoService } from 'src/app/modules/todo/services/todo.service';
import { createTodoRequest, createTodoSuccess, deleteTodoRequest, deleteTodoSuccess, getTodosRequest, getTodosSuccess, todosError, updateTodoRequest, updateTodoSuccess } from '../actions/todo.actions';
import { GeneralService } from 'src/app/modules/todo/services/general.service';

@Injectable()
export class TodosEffects {

    createTodo$ = createEffect(() => this.actions$.pipe(
        ofType(createTodoRequest),
        exhaustMap((action) =>
        
            this.todoService.createTodo(action.todo)
            .pipe(
                map((resp: any) => {
                    return createTodoSuccess({ todo: resp })
                }),
                catchError(() => {
                    this.generalService.openDialogGeneric('Error al crear el TODO', 'fa-solid fa-xmark', 'text-red-500')
                    return [todosError({ error: 'Error al crear el TODO' })]
                })
            )
        )
    ))

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(getTodosRequest), // Se escucha la acción getTodosRequest y esto desencadena el flujo
        exhaustMap(() => //exhaustMap se usa para evitar que se hagan peticiones duplicadas
            this.todoService.getTodos() // Se llama al servicio
                .pipe( // se tratan los datos obtenidos
                    map((resp) => {
                        // Se retorna la acción getTodosSuccess con los TODOS obtenidos
                        
                        return getTodosSuccess({ todos: resp }) // La respuesta se la pasa por props a la acción
                    }),
                    catchError((err) => {
                        console.log(err);
                        
                        this.generalService.openDialogGeneric('Error al obtener los TODOS', 'fa-solid fa-xmark', 'text-red-500')
                        // Se retorna la acción getTodosError con un error en caso de que la petición falle
                        return [todosError({ error: 'Error al obtener los TODOS' })]
                    })
                )
        )
    ))

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodoRequest), // Se escucha la acción getTodosRequest y esto desencadena el flujo
        exhaustMap((action) => //exhaustMap se usa para evitar que se hagan peticiones duplicadas
            this.todoService.updateTodo(action._id, action.todo) // Se llama al servicio
                .pipe( // se tratan los datos obtenidos
                    map((resp: any) => {

                        return updateTodoSuccess({ todo: resp })
                    }),
                    catchError(() => {
                        this.generalService.openDialogGeneric('Error al actualizar el TODO', 'fa-solid fa-xmark', 'text-red-500')
                        // Se retorna la acción getTodosError con un error en caso de que la petición falle
                        return [todosError({ error: 'Error al actualizar el TODO' })]
                    })
                )
        )

    ))

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTodoRequest), // Se escucha la acción getTodosRequest y esto desencadena el flujo
        exhaustMap((action) => //exhaustMap se usa para evitar que se hagan peticiones duplicadas
            this.todoService.deleteTodo(action._id) // Se llama al servicio
                .pipe( // se tratan los datos obtenidos
                    map((resp: any) => {
                        // Se retorna la acción getTodosSuccess con los TODOS obtenidos
                        // this.generalService.openDialogGeneric('TODO actualizado', 'fa-solid fa-check', 'text-green-500')
                        return deleteTodoSuccess({ _id: resp._id })
                    }),
                    catchError(() => {
                        this.generalService.openDialogGeneric('Error al eliminar el TODO', 'fa-solid fa-xmark', 'text-red-500')
                        return [todosError({ error: 'Error al eliminar el TODO' })]
                    })
                )
        )
    ))

    // Se inyectan las dependencias
    constructor(
        private actions$: Actions,
        private todoService: TodoService,
        private generalService: GeneralService
    ) { }
}