import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CalendarServicesModel } from '../models/calendar-services.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarServicesService {
  apiURLServices = environment.apiURLServices;
  apiURLServicesCount = environment.apiURLServicesCount;
  apiURLServicesFiniCount = environment.apiURLServicesFinCount;
  apiURLServicesUnfiniCount = environment.apiURLServicesUnfCount;
  apiURLServicesTotalPrice = environment.apiURLServicesTotalPrice;

  constructor(private http: HttpClient) {}

  getServices(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(this.apiURLServices);
  }

  getServicesCount(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(this.apiURLServicesCount);
  }

  getFinishedServices(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(this.apiURLServicesFiniCount);
  }

  getUnfinishedServices(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(
      this.apiURLServicesUnfiniCount
    );
  }

  getServicesTotalPrice(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(
      this.apiURLServicesTotalPrice
    );
  }
}
