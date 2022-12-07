import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPageComponent } from './features/calendar/pages/calendar-page/calendar-page.component';
import { ClientCreateComponent } from './features/client/pages/client-create/client-create.component';
import { ClientDashboardComponent } from './features/client/pages/client-dashboard/client-dashboard.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { ServiceCreateComponent } from './features/service/pages/service-create/service-create.component';
import { ServiceDashboardComponent } from './features/service/pages/service-dashboard/service-dashboard.component';
import { AuthGuard } from './shared/guard/auth/auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    component: ServiceDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'services/create',
    component: ServiceCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'services/update/:id',
    component: ServiceCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'client',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'client/create',
    component: ClientCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'client/update/:id',
    component: ClientCreateComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
