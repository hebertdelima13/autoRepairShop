import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  timeGridPlugin,
  interactionPlugin,
  listPlugin,
  dayGridPlugin,
]);

@NgModule({
  declarations: [CalendarPageComponent],
  imports: [CommonModule, SharedModule, FullCalendarModule],
})
export class CalendarModule {}
