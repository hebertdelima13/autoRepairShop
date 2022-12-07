import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCreateComponent } from './pages/service-create/service-create.component';
import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ServiceCreateComponent, ServiceDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ServiceModule {}
