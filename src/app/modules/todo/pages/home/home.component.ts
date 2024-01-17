import { Component, OnInit } from '@angular/core'
import { ModalTodoComponent } from '../../components/modal-todo/modal-todo.component'
import { MatDialog } from '@angular/material/dialog'
import { Todo } from 'src/app/core/interfaces/todo-interface'
import { AppState } from 'src/app/state/app.state'
import { Store } from '@ngrx/store'
import { createTodoRequest, getTodosRequest } from 'src/app/state/actions/todo.actions'
import { Observable } from 'rxjs'
import { selectTodosDone, selectTodosInProgress, selectTodosPending } from 'src/app/state/selectors/todo.selectors'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasksCreated: Observable<Todo[]> = new Observable()
  tasksInProgress: Observable<Todo[]> = new Observable()
  tasksCompleted: Observable<Todo[]> = new Observable()


  constructor(
    private dialog: MatDialog,
    private store: Store<AppState> // Inyecta el servicio Store de NgRx para gestionar el estado de la aplicación
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getTodosRequest()) // llama a la acción para obtener los todos
    this.tasksCreated = this.store.select(selectTodosPending) // obtiene los todos pendientes
    this.tasksInProgress = this.store.select(selectTodosInProgress) // obtiene los todos en progreso
    this.tasksCompleted = this.store.select(selectTodosDone) // obtiene los todos completados
  }

  createTodo() {
    const dialogRef = this.dialog.open(ModalTodoComponent, {
      width: '500px',
      height: '400px',
      panelClass: 'my-panel-class',
      data: { titleModal: 'Crear nueva tarea' }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return
      this.store.dispatch(createTodoRequest({ todo: result }))
    })
  }
}
