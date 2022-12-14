import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { ClientCreateComponent } from './pages/client-create/client-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ClientDashboardComponent, ClientCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ClientModule {}
