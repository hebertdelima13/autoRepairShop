import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiURL = environment.apiURL + 'users';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.apiURL}/login`, {
      email,
      password,
    });
  }
}
