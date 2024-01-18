import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { MatSelectModule } from '@angular/material/select'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  exports: [
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
