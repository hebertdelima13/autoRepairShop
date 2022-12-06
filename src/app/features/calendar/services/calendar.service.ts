import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalendarServicesModel } from '../models/calendar-services.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarServicesService {
  apiURL = environment.apiURL + 'services';
  apiURLCount = environment.apiURL + 'servicescount';

  constructor(private http: HttpClient) {}

  getServices(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(this.apiURL);
  }

  getServicesCount(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(this.apiURLCount);
  }
}
