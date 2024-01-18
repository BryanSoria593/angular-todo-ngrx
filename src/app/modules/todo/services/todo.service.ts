import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateTodo, UpdateTodo } from 'src/app/core/interfaces/todo-interface';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API = environment.API_URL

  constructor(private http: HttpClient,) { }


  getTodos(): Observable<Object> {
    return this.http.get(`${this.API}/getAll`)
  }

  createTodo(todo: CreateTodo): Observable<Object> {
    return this.http.post(`${this.API}/create`, todo)
  }

  deleteTodo(id: string): Observable<Object> {
    return this.http.delete(`${this.API}/delete/${id}`)
  }

  updateTodo(id: string, todo: UpdateTodo): Observable<Object> {

    return this.http.put(`${this.API}/update/${id}`, todo)
  }

  updateStatus(nuevoEstado: number, id: string): Observable<Object> {
    return this.http.put(`${this.API}/update-status/${id}`, { statusId: nuevoEstado })
  }

}
