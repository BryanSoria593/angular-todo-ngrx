import { Component, OnInit } from '@angular/core'
import { ModalTodoComponent } from '../../components/modal-todo/modal-todo.component'
import { MatDialog } from '@angular/material/dialog'
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/core/interfaces/todo-interface'
import { GeneralService } from '../../services/general.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasksCreated: Todo[] = []
  tasksInProgress: Todo[] = []
  tasksCompleted: Todo[] = []

  constructor(
    private dialog: MatDialog,
    private todoService: TodoService,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void { }


  createTodo() {
    const dialogRef = this.dialog.open(ModalTodoComponent, {
      width: '500px',
      height: '400px',
      panelClass: 'my-panel-class',
      data: { titleModal: 'Crear nueva tarea' }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return

    })
  }

}
