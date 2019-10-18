import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get('/api/findAll');
  }
  create(data: any) {
    return this.http.post('/api/create', data);
  }
  findOne(id: any) {
    return this.http.get('/api/findOne/' + id);
  }
  edit(data: any) {
    return this.http.put('/api/edit/' + data._id, data);
  }
  delete(id: any) {
    return this.http.delete('/api/delete/' + id);
  }
}
