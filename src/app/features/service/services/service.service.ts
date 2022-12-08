import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../../client/models/client.model';
import { ServiceModel } from '../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  apiURL = environment.apiURL + 'services';
  apiURLClients = environment.apiURL + 'clients';

  constructor(private http: HttpClient) {}

  getService(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.apiURL);
  }

  getServiceId(_id: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(`${this.apiURL}/${_id}`);
  }

  createService(service: ServiceModel): Observable<ServiceModel> {
    const serviceBody = {
      title: service.title,
      start: service.start,
      startHour: service.startHour,
      end: service.end,
      endHour: service.endHour,
      services: service.services,
      price: service.price,
      finished: service.finished,
      paid: service.paid,
    };
    return this.http.post<ServiceModel>(`${this.apiURL}`, serviceBody);
  }

  updateService(service: ServiceModel): Observable<ServiceModel> {
    return this.http.put<ServiceModel>(
      `${this.apiURL}/update/${service._id}`,
      service
    );
  }

  deleteService(_id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.apiURL}/${_id}`);
  }

  getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.apiURLClients}`);
  }
}
