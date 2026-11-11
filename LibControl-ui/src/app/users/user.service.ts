import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { User } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  async add(user: User): Promise<User> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = User.toJson(user);
      return await firstValueFrom(this.http.post<User>(this.usersUrl, body, { headers }));
    }
}
