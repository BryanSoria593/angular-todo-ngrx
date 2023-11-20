import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-modal-todo',
  templateUrl: './modal-todo.component.html',
})
export class ModalTodoComponent implements OnInit {

  modeEdit: boolean = this.data.modeEdit || false;
  formTodo: FormGroup = new FormGroup({})
  formChanged: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.formTodoGroup();
    this.trackFormChangesInEditMode();
  }
  formTodoGroup(): void {
    this.formTodo = new FormGroup({
      title: new FormControl(this.data?.todo?.title, [Validators.required]),
      description: new FormControl(this.data?.todo?.description),
      statusId: new FormControl(this.data?.todo?.status._id || 1, [Validators.required]),
    });
  }

  trackFormChangesInEditMode(): void {
    if (this.modeEdit) {
      this.formTodo.valueChanges.subscribe((value) => {
        this.formChanged = (
          this.data.todo.title !== value.title ||
          this.data.todo.description !== value.description ||
          this.data.todo.status._id !== value.statusId
        );
      });
    }
  }

  onChangeCurrentState(newState: number): void {
    this.formTodo.patchValue({
      statusId: newState
    });
  }

  saveTodo(): void {
    if (!this.formTodo.valid) return;
    this.dialogRef.close(this.formTodo.value);
  }
}
