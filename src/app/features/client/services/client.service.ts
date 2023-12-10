import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarModel } from '../models/car.model';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiURLClients = environment.apiURLClients;
  apiURLCars = 'https://private-anon-8c619f123c-carsapi1.apiary-mock.com/cars';

  constructor(private http: HttpClient) {}

  getClient(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiURLClients);
  }

  getClientId(_id: string): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.apiURLClients}/${_id}`);
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
    return this.http.post<ClientModel>(`${this.apiURLClients}`, clientBody);
  }

  updateClient(client: ClientModel): Observable<ClientModel> {
    return this.http.put<ClientModel>(
      `${this.apiURLClients}/update/${client._id}`,
      client
    );
  }

  deleteClient(_id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.apiURLClients}/${_id}`);
  }

  getCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.apiURLCars);
  }
}
