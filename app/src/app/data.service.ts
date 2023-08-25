import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(pageNo: number, perPage: number) {
    return this.http.post('http://localhost:3000/api/user', { pageNo, perPage });
  }
}
