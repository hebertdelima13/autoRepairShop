import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPageComponent } from './features/calendar/pages/calendar-page/calendar-page.component';
import { ClientCreateComponent } from './features/client/pages/client-create/client-create.component';
import { ClientDashboardComponent } from './features/client/pages/client-dashboard/client-dashboard.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { ServiceCreateComponent } from './features/service/pages/service-create/service-create.component';
import { ServiceDashboardComponent } from './features/service/pages/service-dashboard/service-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'calendar',
    component: CalendarPageComponent,
  },
  {
    path: 'services',
    component: ServiceDashboardComponent,
  },
  {
    path: 'services/create',
    component: ServiceCreateComponent,
  },
  {
    path: 'services/create/:id',
    component: ServiceCreateComponent,
  },
  {
    path: 'client',
    component: ClientDashboardComponent,
  },
  {
    path: 'client/create',
    component: ClientCreateComponent,
  },
  {
    path: 'client/update/:id',
    component: ClientCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
