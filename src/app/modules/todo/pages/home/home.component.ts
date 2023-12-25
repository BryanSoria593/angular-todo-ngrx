import { Component, OnInit } from '@angular/core'
import { ModalTodoComponent } from '../../components/modal-todo/modal-todo.component'
import { MatDialog } from '@angular/material/dialog'
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/core/interfaces/todo-interface'
import { GeneralService } from '../../services/general.service'
import { AppState } from 'src/app/state/app.state'
import { Store } from '@ngrx/store'
import { createTodoRequest, getTodosRequest } from '../../../../state/actions/todo.actions'
import { Observable } from 'rxjs'
import { selectTodosDone, selectTodosInProgress, selectTodosPending } from 'src/app/state/selectors/todo.selectors'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  // tasksCreated: Todo[] = []
  // tasksCreated: Observable<Todo[]> = this.store.select(selectTodosPending)
  // tasksInProgress: Observable<Todo[]> = this.store.select(selectTodosInProgress)
  // tasksCompleted: Observable<Todo[]> = this.store.select(selectTodosDone)
  tasksCreated: Observable<Todo[]> = new Observable()
  tasksInProgress: Observable<Todo[]> = new Observable()
  tasksCompleted: Observable<Todo[]> = new Observable()


  constructor(
    private dialog: MatDialog,
    private todoService: TodoService,
    private generalService: GeneralService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getTodosRequest())
    this.tasksCreated = this.store.select(selectTodosPending)
    this.tasksInProgress = this.store.select(selectTodosInProgress)
    this.tasksCompleted = this.store.select(selectTodosDone)

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
      
      this.store.dispatch(createTodoRequest({todo: result}))
    })
  }

}
