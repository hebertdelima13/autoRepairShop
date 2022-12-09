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
  apiURLServices = environment.apiURLServices;
  apiURLClients = environment.apiURLClients;

  constructor(private http: HttpClient) {}

  getService(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.apiURLServices);
  }

  getServiceId(_id: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(`${this.apiURLServices}/${_id}`);
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
    return this.http.post<ServiceModel>(`${this.apiURLServices}`, serviceBody);
  }

  updateService(service: ServiceModel): Observable<ServiceModel> {
    return this.http.put<ServiceModel>(
      `${this.apiURLServices}/update/${service._id}`,
      service
    );
  }

  deleteService(_id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.apiURLServices}/${_id}`);
  }

  getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.apiURLClients}`);
  }
}
