import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiURL = environment.apiURL + 'clients';

  constructor(private http: HttpClient) {}

  getClient(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiURL);
  }
}
