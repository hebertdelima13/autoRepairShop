import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Subscription } from 'rxjs';
import { CalendarServicesModel } from '../../models/calendar-services.model';
import { CalendarServicesService } from '../../services/calendar.service';
import { ToastrService } from 'ngx-toastr';
import brLocale from '@fullcalendar/core/locales/pt-br';

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
  total: any[] = [];
  locales = [brLocale];

  constructor(
    private calendarServices: CalendarServicesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getServices();
    this.getServicesCount();
    this.getServicesFiniCount();
    this.getServicesUnfiniCount();
    this.getServicesTotalPrice();
  }

  getServices() {
    this.subscriptions = this.calendarServices
      .getServices()

      .subscribe((Events) => {
        console.log(Events);
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          locales: this.locales,
          titleFormat: {
            day: 'numeric',
            year: '2-digit',
            month: 'numeric',
          },
          allDaySlot: false,
          slotMinTime: '07:00:00',
          slotMaxTime: '22:00:00',
          dayMaxEvents: true,
          eventTextColor: 'fffffe',
          eventBackgroundColor: '#004239',
          eventBorderColor: '#34373c',
          slotLabelFormat: [{ hour: '2-digit', minute: '2-digit' }],
          eventClick: this.handleServiceClick.bind(this),

          // eventClick: function (res) {
          //   console.log(res);
          //   alert(
          //     'Cliente: ' +
          //       res.event.title +
          //       '\n' +
          //       'Serviço: ' +
          //       res.event.extendedProps.services +
          //       '\n' +
          //       'Data da entrega: ' +
          //       res.event.end?.toLocaleDateString()
          //   );
          // },
          events: (this.Services = Events),
          headerToolbar: {
            left: '',
            center: 'prev next today dayGridMonth timeGridWeek listWeek',
            right: '',
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

  getServicesUnfiniCount() {
    this.subscriptions = this.calendarServices
      .getUnfinishedServices()
      .subscribe((unifinished) => {
        console.log(unifinished);
        this.unfinished = unifinished;
      });
  }

  getServicesTotalPrice() {
    this.subscriptions = this.calendarServices
      .getServicesTotalPrice()
      .subscribe((totalprice) => {
        this.total = totalprice;
      });
  }

  handleServiceClick(arg: any) {
    this.toastr.info(
      'Serviço: ' +
        arg.event.extendedProps.services +
        '<br>' +
        'Data de entrega: ' +
        arg.event.end?.toLocaleDateString(),
      arg.event.title,
      {
        closeButton: true,
        enableHtml: true,
        timeOut: 5000,
      }
    );
  }
}
