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
  apiURLServicesCount = environment.apiURL + 'servicescount';
  apiURLServicesFiniCount = environment.apiURL + 'servfinishedcount';
  apiURLServicesUnfiniCount = environment.apiURL + 'servunfinishedcount';

  constructor(private http: HttpClient) {}

  getServices(): Observable<CalendarServicesModel[]> {
    return this.http.get<CalendarServicesModel[]>(this.apiURL);
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
}
