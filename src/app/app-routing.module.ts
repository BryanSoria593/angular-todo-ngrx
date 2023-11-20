import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('../app/modules/todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
