import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Subscription } from 'rxjs';
import { CalendarServicesModel } from '../../models/calendar-services.model';
import { CalendarServicesService } from '../../services/calendar.service';

@Component({
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
  Services: CalendarServicesModel[] = [];
  calendarOptions: CalendarOptions = {};
  subscriptions: Subscription;
  count: any[] = [];
  finished: any[] = [];
  unfinished: any[] = [];

  constructor(private calendarServices: CalendarServicesService) {}

  ngOnInit(): void {
    this.getServices();
    this.getServicesCount();
    this.getServicesFiniCount();
    this.getServicesUnifiniCount();
  }

  getServices() {
    this.subscriptions = this.calendarServices
      .getServices()
      .subscribe((Events) => {
        console.log(Events);
        this.calendarOptions = {
          initialView: 'timeGridWeek',
          locale: 'pt',
          slotMinTime: '07:00:00',
          slotMaxTime: '22:00:00',
          slotLabelFormat: [{ hour: '2-digit', minute: '2-digit' }],
          events: (this.Services = Events),
          // eventClick: function (res) {},
          headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next timeGridWeek listWeek dayGridMonth',
          },
        };
      });
  }

  getServicesCount() {
    this.subscriptions = this.calendarServices
      .getServicesCount()
      .subscribe((count) => {
        console.log(count);
        this.count = count;
      });
  }

  getServicesFiniCount() {
    this.subscriptions = this.calendarServices
      .getFinishedServices()
      .subscribe((finished) => {
        console.log(finished);
        this.finished = finished;
      });
  }

  getServicesUnifiniCount() {
    this.subscriptions = this.calendarServices
      .getUnfinishedServices()
      .subscribe((unifinished) => {
        console.log(unifinished);
        this.unfinished = unifinished;
      });
  }
}
