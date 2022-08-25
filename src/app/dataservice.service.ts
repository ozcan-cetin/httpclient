import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  constructor(private http: HttpClient) {}

  _url = 'https://jsonplaceholder.typicode.com/';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url + 'todos');
  }
}
