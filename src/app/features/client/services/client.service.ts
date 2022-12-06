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
  apiCars = 'https://private-anon-71ea83ed72-carsapi1.apiary-mock.com/cars';

  constructor(private http: HttpClient) {}

  getClient(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiURL);
  }

  getClientId(_id: string): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.apiURL}/${_id}`);
  }

  createClient(client: ClientModel): Observable<ClientModel> {
    const clientBody = {
      name: client.name,
      email: client.email,
      phone: client.phone,
      street: client.street,
      streetnumber: client.streetnumber,
      city: client.city,
      state: client.state,
      car: client.car,
      licenseplate: client.licenseplate,
    };
    return this.http.post<ClientModel>(`${this.apiURL}`, clientBody);
  }

  updateClient(client: ClientModel): Observable<ClientModel> {
    return this.http.put<ClientModel>(`${this.apiURL}/${client._id}`, client);
  }

  deleteClient(_id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.apiURL}/${_id}`);
  }

  getCars(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiCars);
  }
}
