import { List } from './list';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) {
  }
  
  getList(): Observable<List> {
    return this.http.get('/api/list-service/list')
      .map((data) => data as List);
  }

}
