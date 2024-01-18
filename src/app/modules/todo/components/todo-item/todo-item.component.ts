import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTodoComponent } from '../modal-todo/modal-todo.component';
import { Todo } from 'src/app/core/interfaces/todo-interface';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: []
})
export class TodoItemComponent implements OnInit {

  @Input() tasks: any = []
  @Input() title: string = ''

  constructor(
    private dialog: MatDialog,    
  ) { }

  ngOnInit(): void { }

  editTodoModal(todo: Todo) {

    const dialogRef = this.dialog.open(ModalTodoComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'my-panel-class',
      data: {
        titleModal: 'Editar tarea',
        modeEdit: true,
        todo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return
    })

  }

  deleteTodo(id: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      height: '200px',
      panelClass: 'my-panel-class',
      data: {
        title: 'Eliminar tarea',
        description: '¿Está seguro que desea eliminar la tarea?',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return

    });
  }

  updateStatus(nuevoEstado: number, id: string) {


  }
}
