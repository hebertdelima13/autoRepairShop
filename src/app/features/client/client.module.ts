import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { ClientCreateComponent } from './pages/client-create/client-create.component';

@NgModule({
  declarations: [ClientDashboardComponent, ClientCreateComponent],
  imports: [CommonModule],
})
export class ClientModule {}
