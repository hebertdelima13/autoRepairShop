import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCreateComponent } from './pages/service-create/service-create.component';
import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';



@NgModule({
  declarations: [
    ServiceCreateComponent,
    ServiceDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
